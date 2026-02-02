/**
 * Gamepad Tester - Statistics Manager
 *
 * Gestion des statistiques d'utilisation
 * Comptage des touches testées (boutons + axes)
 *
 * @license GPL-3.0
 */

const StatsElements = {
  testedCount: null,
  totalCount: null
};

function initStats() {
  StatsElements.testedCount = document.getElementById('testedCount');
  StatsElements.totalCount = document.getElementById('totalCount');

  const totalControls = GamepadState.buttons.length + GamepadState.axes.length;
  if (StatsElements.totalCount) {
    StatsElements.totalCount.textContent = totalControls;
  }

  updateStats();
  console.log('✅ Statistiques initialisées');
}

function updateStats() {
  const testedButtons = GamepadState.buttons.filter((b) => b.classList.contains('used')).length;
  const testedAxes = GamepadState.axes.filter((a) => a.classList.contains('used')).length;
  const testedCount = testedButtons + testedAxes;

  if (StatsElements.testedCount) {
    StatsElements.testedCount.textContent = testedCount;
  }
}

function resetStats() {
  updateStats();
  console.log('✅ Statistiques réinitialisées');
}
