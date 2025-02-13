import { SupportedLanguages } from "@seelen-ui/lib";
import * as deepl from "deepl-node";
import * as GoogleTranslator from "google-translate-api-x";

import { DeeplSupportedTargetLanguages, Translator } from "./constants.ts";

const API_KEY = Deno.env.get("DEEPL_API_KEY");

if (!API_KEY) {
  console.error("Missing DEEPL_API_KEY");
  Deno.exit(1);
}

const targets = SupportedLanguages.filter((lang) => lang.value !== "en");

const DeeplTranslator = new deepl.Translator(API_KEY);

async function translateText(input: string, lang: string, translator: Translator) {
  if (translator === Translator.DeepL) {
    const res = await DeeplTranslator.translateText(input, "en", lang as deepl.TargetLanguageCode);
    return res.text;
  }

  const res = await GoogleTranslator.translate(input, {
    from: "en",
    to: lang,
    forceTo: true,
    forceBatch: false,
    autoCorrect: false,
  });
  return res.text;
}

function cleanTranslatedMarkdown(text: string) {
  return text
    .replace(/\*\*\s+([^*]+?)\s+\*\*/g, "**$1**") // this will fix **bold text**
    .replace("] (", "]("); // this will fix [text](link)
}

async function completeTranslationsFor(localesDir: string) {
  const enPath = `${localesDir}/en.md`;
  const enFile = await Deno.readTextFile(enPath);
  console.info(`* ${enPath}`);

  for (const lang of targets) {
    const filePath = `${localesDir}/${lang.value}.md`;
    const translator = DeeplSupportedTargetLanguages.includes(
      lang.value as deepl.TargetLanguageCode
    )
      ? Translator.Google
      : Translator.Google;

    console.info(`  - ${filePath} (${lang.enLabel}) - ${translator}`);

    const translated = await translateText(enFile, lang.value, translator);
    const encoder = new TextEncoder();
    const data = encoder.encode(cleanTranslatedMarkdown(translated));
    Deno.writeFileSync(filePath, data);
  }

  console.info(); // newline on finish
}

await completeTranslationsFor("FAQ");
