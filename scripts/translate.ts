import {
  AutoTranslator,
  MarkdownTranslator,
} from "@seelen/translation-toolkit";

import * as fs from "jsr:@std/fs";
import { SupportedLanguages } from "npm:@seelen-ui/lib";

const DEEPL_API_KEY = Deno.env.get("DEEPL_API_KEY");
if (!DEEPL_API_KEY) {
  console.error("Missing DEEPL_API_KEY");
  Deno.exit(1);
}

const targets = SupportedLanguages.filter((lang) => lang.value !== "en");
const translator = new AutoTranslator({
  source: "en",
  deeplApiKey: DEEPL_API_KEY,
});

async function completeTranslationsFor(localesDir: string) {
  const enPath = `${localesDir}/en.md`;
  const enMarkdown = await Deno.readTextFile(enPath);
  console.info(`* ${enPath}`);

  const fileTranlator = new MarkdownTranslator(enMarkdown, translator);
  const encoder = new TextEncoder();

  for (const lang of targets) {
    const filePath = `${localesDir}/${lang.value}.md`;
    if (fs.existsSync(filePath)) {
      console.info(`  - ${filePath} (${lang.enLabel}) - Skipped`);
      continue;
    }
    const translatedMarkdown = await fileTranlator.translate_to(lang.value);
    Deno.writeFileSync(filePath, encoder.encode(translatedMarkdown));
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
