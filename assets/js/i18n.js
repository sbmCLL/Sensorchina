export const SUPPORTED_LANGS = ["en","zh-cn","zh-tw","ko","ja","fr","es","tr","de","it"];

export async function loadI18n(lang) {
  const normalized = SUPPORTED_LANGS.includes(lang) ? lang : "en";
  const res = await fetch(`/assets/i18n/${normalized}.json`);
  return res.json();
}
