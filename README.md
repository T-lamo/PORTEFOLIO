# 🌌 Portfolio Pro - React 19 & Three.js 


[![CI Portfolio](https://github.com/T-lamo/PORTEFOLIO/actions/workflows/ci.yml/badge.svg)](https://github.com/T-lamo/PORTEFOLIO/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ce portfolio n'est pas qu'une vitrine visuelle ; c'est une démonstration d'architecture frontend moderne. Construit avec **React 19**, **Vite**, et **Tailwind v4**, il intègre un pipeline de rendu 3D haute performance et une rigueur de code industrielle.



## 🛠️ Stack Technique

* **Core:** React 19 (Fiber) & TypeScript (Strict Mode)
* **Build Tool:** Vite 6+
* **Styling:** Tailwind CSS v4 (Engine v4)
* **3D Engine:** React Three Fiber (Three.js abstraction)
* **Animations:** Framer Motion
* **Quality Assurance:** ESLint 9 (Flat Config), Prettier, Husky (Pre-commit hooks)
* **CI/CD:** GitHub Actions

## 🏗️ Architecture du Projet

Le projet suit une structure modulaire pour garantir la séparation des préoccupations (SoC) :

```text
src/
├── assets/             # Assets statiques (Modèles 3D, Textures, Images)
├── components/
│   ├── canvas/         # Scènes Three.js et composants R3F
│   ├── sections/       # Sections du portfolio (Hero, About, etc.)
│   └── shared/         # Composants UI réutilisables (Atom design)
├── hoc/                # Higher Order Components (ex: SectionWrapper)
├── hooks/              # Custom hooks (Logique métier réutilisable)
├── styles/             # Configurations globales CSS et thèmes
└── constants/          # Configuration textuelle et liens du site