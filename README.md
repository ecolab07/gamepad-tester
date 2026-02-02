# 🎮 Gamepad Tester

Un outil web pour tester toutes les touches et sticks de votre manette (gamepad). Vérifie rapidement les boutons, les gâchettes analogiques et les axes des sticks avec un retour visuel immédiat.

## ✨ Fonctionnalités

- **Test complet des boutons** : A/B/X/Y, D-Pad, start/menu, View, guide, LB/RB, LT/RT, L3/R3
- **Sticks analogiques** : Visualisation en temps réel du déplacement des axes
- **Gâchettes analogiques** : Détection progressive des LT/RT
- **Statistiques en temps réel** : Compteur des contrôles testés
- **100% offline** : Aucune dépendance externe
- **Interface responsive** : Mise en page adaptée aux différentes tailles d'écran

## 🚀 Installation

Aucune installation nécessaire ! Clonez simplement le dépôt et ouvrez `index.html` dans votre navigateur.

```bash
git clone https://github.com/votre-username/gamepad-tester.git
cd gamepad-tester
# Ouvrez index.html dans votre navigateur préféré
```

Ou téléchargez directement et double-cliquez sur `index.html`.

## 📖 Utilisation

1. Connectez votre gamepad à l'ordinateur
2. Ouvrez `index.html` dans votre navigateur
3. Appuyez sur chaque bouton et déplacez les sticks
4. Les contrôles testés s'illuminent et restent marqués
5. Le compteur se met à jour en temps réel
6. Cliquez sur "Réinitialiser" pour recommencer

## 📁 Structure du projet

```
gamepad-tester/
├── index.html              # Page principale
├── css/
│   ├── main.css           # Styles généraux
│   ├── keyboard.css       # Styles du gamepad (boutons/sticks)
│   └── components.css     # Styles des composants (stats, boutons)
├── js/
│   ├── config.js          # Configuration globale (seuils)
│   ├── gamepad.js         # Logique de détection gamepad
│   ├── stats.js           # Gestion des statistiques
│   ├── ui.js              # Gestion de l'interface (reset)
│   └── main.js            # Point d'entrée et initialisation
├── README.md              # Ce fichier
└── LICENSE                # Licence GPL v3
```

## 🔧 Technologies utilisées

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+ (Vanilla, API Gamepad)

## 🐛 Problèmes connus

- **Compatibilité navigateur** : L'API Gamepad nécessite un navigateur moderne (Chrome/Edge/Firefox récents)
- **Activation** : Certains navigateurs demandent une interaction utilisateur avant de détecter une manette
- **Mappings** : Les indices de boutons peuvent varier selon les manettes non standard

## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add amazing feature'`)
4. Pushez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### Idées de contributions

- Ajouter un profil PlayStation/Switch
- Afficher la vibration quand disponible
- Ajouter un mode de calibration
- Exporter un rapport de test

## 📜 Licence

Ce projet est sous licence GNU General Public License v3.0 - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Inspiré par les outils de test de gamepad en ligne
- Développé avec ❤️ pour la communauté open source
