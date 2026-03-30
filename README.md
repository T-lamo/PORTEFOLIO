# Portfolio Pro — React 19 & Three.js

[![CI Portfolio](https://github.com/T-lamo/PORTEFOLIO/actions/workflows/ci.yml/badge.svg)](https://github.com/T-lamo/PORTEFOLIO/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://amosdorceus.netlify.app)

Portfolio professionnel interactif — démonstration d'architecture frontend moderne construite avec **React 19**, **Vite 6** et **Tailwind CSS v4**. Intègre un pipeline de rendu 3D haute performance via React Three Fiber.

**Live :** [amosdorceus.netlify.app](https://amosdorceus.netlify.app)

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | React 19 (Fiber) + TypeScript strict |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| 3D | React Three Fiber (Three.js) |
| Animations | Framer Motion |
| Qualité | ESLint 9, Prettier, Husky (pre-commit) |
| CI/CD | GitHub Actions → Netlify |

## Architecture

```
src/
├── assets/          # Modèles 3D, textures, screenshots projets
├── components/
│   ├── canvas/      # Scènes Three.js / R3F
│   ├── sections/    # Sections du portfolio (Hero, Projects, Experience…)
│   └── shared/      # Composants UI réutilisables
├── hoc/             # Higher Order Components (SectionWrapper…)
├── hooks/           # Custom hooks
├── styles/          # CSS global et thèmes
└── constants/       # Données du site (projets, expériences, nav)
```

## Démarrage rapide

**Prérequis :** Node.js 20+, npm

```bash
# Cloner
git clone https://github.com/T-lamo/PORTEFOLIO.git
cd PORTEFOLIO

# Installer les dépendances
make setup

# Lancer le serveur de développement
make dev
```

L'application est accessible sur `http://localhost:5173`.

## Commandes disponibles

```bash
make dev          # Serveur de développement (nettoie le cache auto)
make build        # Build de production (passe check avant)
make check        # Types + Lint + Format (bloquant en CI)
make lint         # ESLint avec auto-fix
make format       # Prettier sur tout src/
make clean        # Supprime dist/, node_modules/, cache
make clean-cache  # Nettoie le cache Vite uniquement
make doctor       # Diagnostic Node/npm
make help         # Liste toutes les commandes
```

## CI/CD

Chaque push/PR sur `main` déclenche le pipeline GitHub Actions :

1. `make check` — TypeScript strict + ESLint + Prettier
2. `make build` — build Vite de production

Le déploiement sur **Netlify** est automatique à chaque merge sur `main`.

## Contribuer

Voir [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

[MIT](LICENSE)
