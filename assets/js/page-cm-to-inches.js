import { loadI18n } from './i18n.js';
import { mountLayout } from './layout.js';
import { mountConverter } from './converter.js';

(async function init(){
  const lang = document.documentElement.lang;
  const t = await loadI18n(lang);
  await mountLayout(lang);
  document.getElementById('page-title').textContent = t.pageTitle;
  document.getElementById('page-subtitle').textContent = t.pageSubtitle;
  document.getElementById('label-cm').textContent = t.centimeters;
  document.getElementById('label-in').textContent = t.inches;
  document.getElementById('btn-calc').textContent = t.calculate;
  document.getElementById('btn-copy').textContent = t.copyAnalysis;
  document.getElementById('btn-clear').textContent = t.clear;
  document.getElementById('result').textContent = t.emptyState;
  mountConverter(t);
})();
