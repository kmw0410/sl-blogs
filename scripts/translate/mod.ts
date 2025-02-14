// @deno-types="npm:@types/mdast"
import { Parent } from "npm:mdast";

import * as fs from "jsr:@std/fs";
import { SupportedLanguages, SupportedLanguagesCode } from "npm:@seelen-ui/lib";
import * as deepl from "npm:deepl-node";
import * as GoogleTranslator from "npm:google-translate-api-x";
import { remark } from "npm:remark";
import rfdc from "npm:rfdc";

import { DeeplSupportedTargetLanguages, Translator } from "./constants.ts";
import { PromiseByBatches } from "./PromiseByBatches.ts";

const deepClone = rfdc();
const MarkdownProcessor = remark();

const API_KEY = Deno.env.get("DEEPL_API_KEY");

if (!API_KEY) {
  console.error("Missing DEEPL_API_KEY");
  Deno.exit(1);
}

const targets = SupportedLanguages.filter((lang) => lang.value !== "en");

const DeeplTranslator = new deepl.Translator(API_KEY);

const batches = new PromiseByBatches(10);
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

async function translateMarkdownAST(
  ast: Parent,
  lang: SupportedLanguagesCode,
  translator: Translator
) {
  for (const child of ast.children) {
    // avoid tranlate code block
    if (child.type === "code") {
      continue;
    }

    if (child.type == "text") {
      await batches.add(async () => {
        child.value = await translateText(child.value, lang, translator);
      });
      continue;
    }

    if ("children" in child) {
      await translateMarkdownAST(child, lang, translator);
    }
  }
}

async function completeTranslationsFor(localesDir: string) {
  const enPath = `${localesDir}/en.md`;
  const enFile = await Deno.readTextFile(enPath);
  console.info(`* ${enPath}`);

  const encoder = new TextEncoder();
  // Repare/Format the origin file
  const englishAST = MarkdownProcessor.parse(enFile);
  Deno.writeFileSync(enPath, encoder.encode(MarkdownProcessor.stringify(englishAST)));

  for (const lang of targets) {
    const filePath = `${localesDir}/${lang.value}.md`;
    if (fs.existsSync(filePath)) {
      console.info(`  - ${filePath} (${lang.enLabel}) - Skipped`);
      continue;
    }

    const translator = DeeplSupportedTargetLanguages.includes(
      lang.value as deepl.TargetLanguageCode
    )
      ? Translator.Google
      : Translator.Google;
    console.info(`  - ${filePath} (${lang.enLabel}) - ${translator}`);

    const AST = deepClone(englishAST);
    await translateMarkdownAST(AST, lang.value as SupportedLanguagesCode, translator);
    await batches.flush();
    Deno.writeFileSync(filePath, encoder.encode(MarkdownProcessor.stringify(AST)));
  }

  console.info(); // newline on finish
}

if (Deno.args.length === 0) {
  console.error("Missing locales directory, example: deno run scripts/translate/mod.ts locales");
  Deno.exit(1);
}

for (const path of Deno.args) {
  await completeTranslationsFor(path);
}
