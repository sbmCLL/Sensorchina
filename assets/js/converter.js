const FACTOR = 0.3937007874;

export function mountConverter(t) {
  const inputCm = document.getElementById('input-cm');
  const inputIn = document.getElementById('input-in');
  const result = document.getElementById('result');
  const calcBtn = document.getElementById('btn-calc');
  const copyBtn = document.getElementById('btn-copy');
  const clearBtn = document.getElementById('btn-clear');

  function renderFromCm() {
    const cm = Number(inputCm.value || 0);
    const inches = cm * FACTOR;
    inputIn.value = inches.toFixed(4);
    const explanation = `${cm} cm = ${inches.toFixed(4)} in\n${t.formulaLabel}: inches = cm × ${FACTOR}\n${t.stepsLabel}: ${cm} × ${FACTOR} = ${inches.toFixed(4)}`;
    result.textContent = explanation;
    result.dataset.copy = explanation;
  }

  function renderFromIn() {
    const inch = Number(inputIn.value || 0);
    const cm = inch / FACTOR;
    inputCm.value = cm.toFixed(4);
    const explanation = `${inch} in = ${cm.toFixed(4)} cm\n${t.formulaLabel}: cm = inches ÷ ${FACTOR}\n${t.stepsLabel}: ${inch} ÷ ${FACTOR} = ${cm.toFixed(4)}`;
    result.textContent = explanation;
    result.dataset.copy = explanation;
  }

  calcBtn.addEventListener('click', renderFromCm);
  inputIn.addEventListener('change', renderFromIn);
  clearBtn.addEventListener('click', () => { inputCm.value=''; inputIn.value=''; result.textContent=t.emptyState; result.dataset.copy=''; });
  copyBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(result.dataset.copy || '');
    copyBtn.textContent = t.copied;
    setTimeout(() => (copyBtn.textContent = t.copyAnalysis), 1200);
  });
}
