/**
 * Gamepad Tester - UI Manager
 *
 * Gestion de l'interface utilisateur
 *
 * @license GPL-3.0
 */

function resetTest() {
  GamepadState.buttons.forEach((button) => {
    button.classList.remove('used', 'active');
  });

  GamepadState.axes.forEach((axis) => {
    axis.classList.remove('used', 'active');
    const valueElement = axis.querySelector('.axis-value');
    if (valueElement) {
      valueElement.textContent = '0.00';
    }
  });

  document.querySelectorAll('.stick-dot').forEach((dot) => {
    dot.style.transform = 'translate(0px, 0px)';
  });

  resetStats();
  console.log('🔄 Test réinitialisé');
}

function initUI() {
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetTest);
  }

  console.log('✅ Interface utilisateur initialisée');
}
