# Contribuer

## Installation locale

```bash
git clone https://github.com/T-lamo/PORTEFOLIO.git
cd PORTEFOLIO
make setup
make dev
```

## Workflow Git

```
main               ← production (protégée)
└── POR-XX-feature ← branche de travail par ticket Jira
```

1. Créer une branche depuis `main` : `git checkout -b POR-XX-description`
2. Commiter en suivant la convention ci-dessous
3. Ouvrir une PR → les checks CI doivent passer

## Convention de commits

```
type: description courte POR-XX

feat:     nouvelle fonctionnalité
fix:      correction de bug
refactor: refactoring sans changement de comportement
style:    formatting, CSS
docs:     documentation uniquement
chore:    config, CI, dépendances
```

## Standards qualité

Avant chaque commit, Husky exécute automatiquement `make check` :
- TypeScript strict (`tsc --noEmit`)
- ESLint 9 avec auto-fix
- Prettier

Pour lancer manuellement : `make check`

## Ajouter un projet au portfolio

1. Déposer les screenshots dans `src/assets/projects/` (format PNG, nom en camelCase)
2. Ajouter les imports dans `src/constants/index.tsx` (ordre alphabétique)
3. Ajouter l'entrée dans le tableau `projects` du même fichier
