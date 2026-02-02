/**
 * Gamepad Tester - Main Entry Point
 *
 * Point d'entrée de l'application
 * Initialise tous les modules dans le bon ordre
 *
 * @license GPL-3.0
 * @version 1.0.0
 */

function initApp() {
  console.log('🚀 Démarrage de Gamepad Tester v1.0');

  try {
    initGamepad();
    initStats();
    initUI();
    attachGamepadListeners();

    console.log('✅ Application initialisée avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    alert('Une erreur est survenue lors du chargement de l\'application. Veuillez rafraîchir la page.');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
