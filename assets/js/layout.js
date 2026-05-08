import { SUPPORTED_LANGS } from './i18n.js';

export async function mountLayout(currentLang) {
  const [header, footer] = await Promise.all([
    fetch('/components/header.html').then(r => r.text()),
    fetch('/components/footer.html').then(r => r.text())
  ]);
  document.getElementById('site-header').innerHTML = header;
  document.getElementById('site-footer').innerHTML = footer;

  document.getElementById('year').textContent = new Date().getFullYear();

  const switcher = document.getElementById('lang-switcher');
  if (!switcher) return;
  const pathAfterLang = location.pathname.split('/').slice(2).join('/');
  SUPPORTED_LANGS.forEach(lang => {
    const op = document.createElement('option');
    op.value = lang;
    op.textContent = lang;
    op.selected = lang === currentLang;
    switcher.appendChild(op);
  });
  switcher.addEventListener('change', (e) => {
    location.href = `/${e.target.value}/${pathAfterLang}`;
  });
}
