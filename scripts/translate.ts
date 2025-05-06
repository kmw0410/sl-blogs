import {
  AutoTranslator,
  GoogleTranslator,
  MarkdownTranslator,
  ObjectTranslator,
} from "@seelen/translation-toolkit";

import * as fs from "jsr:@std/fs";
import { SupportedLanguages } from "npm:@seelen-ui/lib";

const DEEPL_API_KEY = Deno.env.get("DEEPL_API_KEY");
if (!DEEPL_API_KEY) {
  console.error("Missing DEEPL_API_KEY");
  Deno.exit(1);
}

const targets = SupportedLanguages.filter((lang) => lang.value !== "en");
const googleTranslator = new GoogleTranslator({
  source: "en",
});

const autoTranslator = new AutoTranslator({
  source: "en",
  deeplApiKey: DEEPL_API_KEY,
});

async function completeTranslationsFor(localesDir: string) {
  localesDir = localesDir.replace("\\", "/");
  if (localesDir.endsWith("/")) {
    localesDir = localesDir.slice(0, -1);
  }
  Deno.mkdirSync(`${localesDir}/translations`, { recursive: true });

  const enMarkdown = await Deno.readTextFile(`${localesDir}/en.md`);
  console.info(`* translating: ${localesDir}`);

  let jsonTranslator:
    | ObjectTranslator<object, string, string, AutoTranslator>
    | null = null;
  if (await fs.exists(`${localesDir}/en.json`)) {
    const json = JSON.parse(await Deno.readTextFile(`${localesDir}/en.json`));
    jsonTranslator = new ObjectTranslator(json, autoTranslator);
    jsonTranslator.gap = 600;
  }

  const mdTranslator = new MarkdownTranslator(enMarkdown, googleTranslator);
  mdTranslator.gap = 600;
  const encoder = new TextEncoder();

  for (const lang of targets) {
    const markdownPath = `${localesDir}/translations/${lang.value}.md`;
    const jsonMetadataPath = `${localesDir}/translations/${lang.value}.json`;

    if (!fs.existsSync(markdownPath)) {
      const translatedMarkdown = await mdTranslator.translate_to(lang.value);
      Deno.writeFileSync(markdownPath, encoder.encode(translatedMarkdown));
    }

    if (jsonTranslator) {
      const cached = fs.existsSync(jsonMetadataPath)
        ? JSON.parse(await Deno.readTextFile(jsonMetadataPath))
        : {};
      const translatedObject = await jsonTranslator.translate_to(
        lang.value,
        cached,
      );
      Deno.writeFileSync(
        jsonMetadataPath,
        encoder.encode(JSON.stringify(translatedObject, null, 2)),
      );
    }
  }

  console.info(); // newline on finish
}

if (Deno.args.length === 0) {
  console.error(
    "Missing locales directory, example: deno run scripts/translate/mod.ts locales",
  );
  Deno.exit(1);
}

for (const path of Deno.args) {
  await completeTranslationsFor(path);
}
