// constants/index.ts

export const navLinks = [
  { id: "about", title: "À propos" },
  { id: "projects", title: "Projets" },
  { id: "contact", title: "Contact" },
];

export const heroTexts = {
  name: "Amos Dorceus",
  role: "Ingénieur Logiciel Fullstack",
  subtitle: "Expertise Vue.js, Angular, TypeScript & FastAPI",
  description:
    "Ingénieur avec 2 ans d'expérience au sein d'environnements industriels exigeants (Airbus, Anakeen). Je me spécialise dans la conception d'architectures web scalables et d'interfaces fluides. Passionné par l'innovation technique, j'allie rigueur professionnelle et créativité à travers des projets ambitieux. Disponible pour des missions de Projet ou un CDI.",
  ctaPrimary: "Voir mes projets",
  ctaSecondary: "Me contacter",
};

export const projects = [
  {
    title: "E-Commerce Sport",
    description:
      "Application type Decathlon avec gestion de catalogue dynamique et tunnel d'achat optimisé.",
    tags: ["Svelte", "TypeScript", "FastAPI", "PostgreSQL"],
    link: "#",
  },
  {
    title: "CV Builder Dynamique",
    description:
      "Outil de création de CV avec prévisualisation en temps réel et gestion d'état complexe (NgRx).",
    tags: ["Angular", "NgRx", "PrimeNg"],
    link: "#",
  },
  {
    title: "Desevnet Graph Editor",
    description:
      "Éditeur de graphes interactif haute performance pour la simulation de réseaux électriques.",
    tags: ["Vue.js", "D3.js", "Rust"],
    link: "#",
  },
];

export const experiences = [
  {
    company: "Anakeen",
    role: "Développeur Fullstack",
    period: "Juin 2024 – Oct. 2025",
    team: "Équipe de 8 développeurs",
    methodology: "Agile Scrum",
    description:
      "Migration stratégique d'une bibliothèque de composants critiques de Vue 2 vers Vue 3.",
    keyTasks: [
      "Architecture de composants réutilisables et performants",
      "Développement de nouvelles fonctionnalités UI complexes",
      "Rédaction de documentation technique avec Storybook",
    ],
    impact:
      "Mise en place d'un Design System industrialisé, optimisant la vélocité de l'équipe de 30%.",
    stack: ["Vue.js 3", "Storybook", "PHP", "Vitest"],
  },
  {
    company: "Capgemini | Airbus",
    role: "Ingénieur Logiciel",
    period: "Sept. 2023 – Fév. 2024",
    team: "Équipe agile multi-site (15+ personnes)",
    methodology: "SAFE / Scrum",
    description:
      "Évolution d'un système PLM (Product Lifecycle Management) pour le secteur aéronautique.",
    keyTasks: [
      "Implémentation de modules métier pour la gestion de production",
      "Optimisation de requêtes SQL et robustesse Java",
      "Conception et exécution de plans de tests automatisés",
    ],
    impact:
      "Garantie de la fiabilité des fonctionnalités critiques et maintien d'un environnement zéro-régression.",
    stack: ["Angular", "Java", "JUnit", "SQL"],
  },
  {
    company: "Laboratoire Informatique Avignon",
    role: "Développeur Fullstack",
    period: "Juin 2022 – Juil. 2023",
    team: "Binôme R&D",
    methodology: "Kanban / Itératif",
    description:
      "Développement d'un simulateur de réseau de bornes de recharge pour véhicules électriques.",
    keyTasks: [
      "Conception d'un éditeur de graphes interactif (Smart Grids)",
      "Optimisation des calculs de flux via des modules Rust",
      "Visualisation de données massives en temps réel",
    ],
    impact:
      "Conception d'un moteur de rendu haute performance alliant la rapidité de Rust et la flexibilité de D3.js.",
    stack: ["Rust", "Vue.js", "D3.js", "Linux"],
  },
];
