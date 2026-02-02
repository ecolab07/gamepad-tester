/**
 * Gamepad Tester - Gamepad Logic
 *
 * Gestion de la détection des boutons, sticks et mises à jour UI
 *
 * @license GPL-3.0
 */

/**
 * État global du gamepad
 */
const GamepadState = {
  buttons: [],
  axes: [],
  activeIndex: null,
  animationFrameId: null,
  statusElement: null,
  nameElement: null
};

/**
 * Initialise le module gamepad
 */
function initGamepad() {
  GamepadState.buttons = [...document.querySelectorAll('[data-button]')];
  GamepadState.axes = [...document.querySelectorAll('[data-axis]')];
  GamepadState.statusElement = document.getElementById('gamepadStatus');
  GamepadState.nameElement = document.getElementById('gamepadName');

  updateStatus('Aucun gamepad détecté');
  console.log(`✅ Gamepad initialisé : ${GamepadState.buttons.length} boutons détectés`);
}

/**
 * Attache les event listeners de connexion gamepad
 */
function attachGamepadListeners() {
  window.addEventListener('gamepadconnected', (event) => {
    if (GamepadState.activeIndex === null) {
      GamepadState.activeIndex = event.gamepad.index;
      updateStatus('Gamepad connecté');
      updateGamepadName(event.gamepad.id);
    }
    startPolling();
  });

  window.addEventListener('gamepaddisconnected', (event) => {
    if (GamepadState.activeIndex === event.gamepad.index) {
      GamepadState.activeIndex = null;
      updateStatus('Gamepad déconnecté');
      updateGamepadName('');
    }
  });

  startPolling();
  console.log('✅ Event listeners gamepad attachés');
}

/**
 * Lance la boucle de polling gamepad
 */
function startPolling() {
  if (GamepadState.animationFrameId) {
    cancelAnimationFrame(GamepadState.animationFrameId);
  }

  const poll = () => {
    updateGamepadState();
    GamepadState.animationFrameId = requestAnimationFrame(poll);
  };

  poll();
}

/**
 * Met à jour le statut du gamepad
 */
function updateStatus(message) {
  if (GamepadState.statusElement) {
    GamepadState.statusElement.textContent = message;
  }
}

/**
 * Met à jour le nom du gamepad
 */
function updateGamepadName(name) {
  if (GamepadState.nameElement) {
    GamepadState.nameElement.textContent = name ? `🎮 ${name}` : '';
  }
}

/**
 * Récupère le gamepad actif
 */
function getActiveGamepad() {
  if (GamepadState.activeIndex === null) {
    return null;
  }

  const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  return gamepads[GamepadState.activeIndex] || null;
}

/**
 * Met à jour l'état des boutons et sticks
 */
function updateGamepadState() {
  const gamepad = getActiveGamepad();
  if (!gamepad) {
    return;
  }

  updateButtons(gamepad);
  updateAxes(gamepad);
}

/**
 * Met à jour les boutons (pression/relâchement)
 */
function updateButtons(gamepad) {
  GamepadState.buttons.forEach((buttonElement) => {
    const index = Number(buttonElement.dataset.button);
    const button = gamepad.buttons[index];
    if (!button) {
      return;
    }

    const isActive = button.pressed || button.value > CONFIG.TRIGGER_THRESHOLD;
    buttonElement.classList.toggle('active', isActive);

    if (isActive) {
      buttonElement.classList.add('used');
    }
  });

  updateStats();
}

/**
 * Met à jour les axes (sticks analogiques)
 */
function updateAxes(gamepad) {
  GamepadState.axes.forEach((axisElement) => {
    const index = Number(axisElement.dataset.axis);
    const value = gamepad.axes[index] ?? 0;
    const isActive = Math.abs(value) > CONFIG.AXIS_THRESHOLD;

    axisElement.classList.toggle('active', isActive);
    if (isActive) {
      axisElement.classList.add('used');
    }

    const valueElement = axisElement.querySelector('.axis-value');
    if (valueElement) {
      valueElement.textContent = value.toFixed(2);
    }
  });

  updateStickPositions(gamepad);
  updateStats();
}

/**
 * Met à jour la position visuelle des sticks
 */
function updateStickPositions(gamepad) {
  const stickDots = document.querySelectorAll('.stick-dot');

  stickDots.forEach((dot) => {
    const axisX = Number(dot.dataset.axisX);
    const axisY = Number(dot.dataset.axisY);
    const x = gamepad.axes[axisX] ?? 0;
    const y = gamepad.axes[axisY] ?? 0;
    const offsetX = x * CONFIG.STICK_MAX_OFFSET;
    const offsetY = y * CONFIG.STICK_MAX_OFFSET;

    dot.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}
