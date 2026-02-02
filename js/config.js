/**
 * Gamepad Tester - Configuration
 *
 * Constantes globales et paramètres
 *
 * @license GPL-3.0
 */

const CONFIG = {
  /**
   * Seuil d'activation des axes analogiques
   */
  AXIS_THRESHOLD: 0.35,

  /**
   * Seuil d'activation des gâchettes analogiques
   */
  TRIGGER_THRESHOLD: 0.2,

  /**
   * Distance maximale (px) pour afficher le déplacement des sticks
   */
  STICK_MAX_OFFSET: 14
};

Object.freeze(CONFIG);
