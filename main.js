const kpiCards = Array.from(document.querySelectorAll('#kpiGrid .kpi'));
const emergencyButton = document.getElementById('emergencyButton');
const demoToggle = document.getElementById('demoToggle');

let demoTimer = null;
let demoIndex = 0;
let demoRunning = true;

const clearDemoClasses = () => {
  kpiCards.forEach((card) => card.classList.remove('demo-hover'));
  emergencyButton.classList.remove('demo-pulse');
};

const runDemoStep = () => {
  clearDemoClasses();
  kpiCards[demoIndex % kpiCards.length].classList.add('demo-hover');
  if (demoIndex % 2 === 0) {
    emergencyButton.classList.add('demo-pulse');
  }
  demoIndex += 1;
};

const startDemo = () => {
  if (demoTimer) return;
  runDemoStep();
  demoTimer = setInterval(runDemoStep, 1400);
  demoRunning = true;
  demoToggle.textContent = '자동 데모 일시정지';
  demoToggle.setAttribute('aria-pressed', 'true');
};

const stopDemo = () => {
  clearInterval(demoTimer);
  demoTimer = null;
  clearDemoClasses();
  demoRunning = false;
  demoToggle.textContent = '자동 데모 다시 시작';
  demoToggle.setAttribute('aria-pressed', 'false');
};

demoToggle.addEventListener('click', () => {
  if (demoRunning) {
    stopDemo();
  } else {
    startDemo();
  }
});

emergencyButton.addEventListener('click', () => {
  emergencyButton.classList.add('pressed');
  setTimeout(() => emergencyButton.classList.remove('pressed'), 220);
});

startDemo();
