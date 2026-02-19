// 1. IMPORT DES ASSETS (Indispensable pour Vite & Netlify)
import cvBuilderMain from "../assets/projects/cv-builder-capture.png";
import decatCommande from "../assets/projects/decat-commande.png";
import decatDetails from "../assets/projects/decat-details.png";
import decatMain from "../assets/projects/decat-main.png";
import desevNetMain from "../assets/projects/desev-net.png";
import digiJira from "../assets/projects/digi-jira-board.png";
import digiMain from "../assets/projects/digi-swagger.png";
import digiWorkflow from "../assets/projects/digi-workflow.png";
import mlaMain from "../assets/projects/mla-api-example.png";
import mlaJira from "../assets/projects/mla-jira-board.png";
import mlaSchema from "../assets/projects/mla-schema-db.png";
import portFolioMain from "../assets/projects/port_folio.png";
import portJira from "../assets/projects/port_jira.png";
import portUserStory from "../assets/projects/port_user_story.png";

export const navLinks = [
  { id: "about", title: "À propos" },
  { id: "projects", title: "Projets" },
  { id: "experience", title: "Expérience" },
  { id: "contact", title: "Contact" },
];

export const heroTexts = {
  name: "Amos Dorceus",
  role: "Ingénieur Logiciel Fullstack",
  subtitle: "Expertise Vue.js, Angular, TypeScript & FastAPI",
  description:
    "Ingénieur avec 2 ans d'expérience au sein d'environnements industriels exigeants (Airbus, Anakeen). Je me spécialise dans la conception d'architectures web scalables et d'interfaces fluides. Passionné par l'innovation technique, j'allie rigueur professionnelle et créativité à travers des projets ambitieux. Disponible pour des missions de projet ou un CDI.",
  ctaPrimary: "Voir mes projets",
  ctaSecondary: "Me contacter",
  Tel: "+330749286021",
  Email: "amosdorceus2010@gmail.com",
};

export const projects = [
  {
    title: "Portfolio Professionnel - 2026",
    description: "Vitrine technologique interactive conçue pour mettre en avant mes compétences.",
    longDescription:
      "Développement de mon portfolio personnel utilisant une architecture moderne et optimisée.",
    tags: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/portfolio",
    liveUrl: "https://amosdorceus.netlify.app",
    image: portFolioMain,
    challenges: [
      "Conception d'une interface responsive avec animations haute performance",
      "Optimisation des Web Vitals pour un score Lighthouse proche de 100",
      "Architecture de composants réutilisables",
    ],
    results: "Une plateforme élégante et rapide servant de démonstration concrète.",
    detailedScreenshots: [
      { url: portJira, caption: "Organisation Jira du projet : gestion agile." },
      { url: portUserStory, caption: "Exemple de user story dans Jira." },
    ],
  },
  {
    title: "MLA Planning - début 2026",
    description:
      "Application de planification de ressources critiques pour le Ministère de la Louange (ICC).",
    longDescription:
      "Conception et développement d'une application pour la gestion des chantres et musiciens.",
    tags: ["FastAPI", "Vue.js", "PostgreSQL", "Docker", "Jira"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/mla-planning",
    liveUrl: "https://mla-planning.render.com",
    image: mlaMain,
    challenges: [
      "Conception d'une architecture scalable",
      "Développement d'un 'Moteur de Collision Temporelle'",
      "Gestion fine des accès (RBAC)",
    ],
    results: "Système robuste garantissant 100 % de fiabilité.",
    detailedScreenshots: [
      { url: mlaMain, caption: "Exemple de réponse d'API REST." },
      { url: mlaJira, caption: "Scrums organisés via Jira." },
      { url: mlaSchema, caption: "Architecture de données SQL." },
    ],
  },
  {
    title: "Digicheese - Refonte SI Fidélité - Janvier 2026",
    description: "Modernisation d'un système legacy Access/VBA vers API REST Python sécurisée.",
    longDescription:
      "Projet critique de transformation numérique visant à remplacer un système obsolète.",
    tags: ["Python", "FastAPI", "MySQL", "JWT", "Docker"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/DIGICHEES_APP",
    liveUrl: "https://digichees-app-1.onrender.com/docs",
    image: digiMain,
    challenges: [
      "Architecture en couches pour testabilité maximale",
      "Sécurisation via hachage Argon2",
      "Migration de données complexes",
    ],
    results: "Livraison d'un socle API REST 100 % fonctionnel et sécurisé.",
    detailedScreenshots: [
      { url: digiMain, caption: "Documentation OpenAPI/Swagger." },
      { url: digiWorkflow, caption: "Workflow de développement GitHub Actions." },
      { url: digiJira, caption: "Gestion de projet Agile via Jira." },
    ],
  },
  {
    title: "E-Commerce Decathlon 2023",
    description: "Application type Decathlon avec gestion de catalogue dynamique.",
    longDescription:
      "Plateforme e-commerce robuste conçue pour gérer des milliers de références produits.",
    tags: ["Svelte", "TypeScript", "PostgreSQL"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/decathlon",
    liveUrl: "https://decathlon-test.netlify.app/",
    image: decatMain,
    challenges: ["Panier persistant", "Optimisation SEO", "Architecture micro-services"],
    results: "Application fluide avec chargement < 1 s.",
    detailedScreenshots: [
      { url: decatMain, caption: "Liste d'articles avec filtres dynamiques." },
      { url: decatCommande, caption: "Page de suivi de commande." },
      { url: decatDetails, caption: "Page de détails produit." },
    ],
  },
  {
    title: "CV Builder Dynamique - 2024",
    description: "Outil de création de CV avec prévisualisation temps réel (NgRx).",
    longDescription:
      "Un éditeur WYSIWYG permettant aux utilisateurs de construire des CV professionnels.",
    tags: ["Angular", "NgRx", "PrimeNg"],
    link: "#",
    githubUrl: "https://gitlab.com/cvbuilder1/cvbuilder-front",
    liveUrl: "https://cvbuilder-singlepage.netlify.app/cv/editor/about",
    image: cvBuilderMain,
    challenges: ["Synchronisation temps réel NgRx", "Exportation PDF haute fidélité"],
    results: "Projets personnels pour la maîtrise de NgRx & Angular.",
    detailedScreenshots: [],
  },
  {
    title: "Desevnet Graph Editor",
    description: "Éditeur de graphes interactif pour la simulation de réseaux électriques.",
    longDescription:
      "Outil technique destiné aux ingénieurs réseau pour modéliser des Smart Grids.",
    tags: ["Vue.js", "D3.js", "Leaflet"],
    link: "#",
    githubUrl: "https://github.com/votreuser/desevnet",
    liveUrl: "https://netgenerator.netlify.app/",
    image: desevNetMain,
    challenges: ["Rendu D3.js fluide", "Algorithmes de topologie réseau"],
    results: "Réduction du temps de configuration de 80 %.",
    detailedScreenshots: [],
  },
];

export const experiences = [
  {
    company: "Diginamic",
    role: "Data Engineer & IA",
    period: "Déc 2025 – Présent",
    icon: "education",
    description: "Conception d'architectures de données et systèmes d'IA industrialisés.",
    keyTasks: [
      "Développement de pipelines Big Data complexes",
      "Déploiement de modèles Machine Learning & NLP",
      "Industrialisation via Docker et CI/CD",
    ],
    stack: ["Python", "FastAPI", "Spark", "TensorFlow", "Docker", "Kafka"],
  },
  {
    company: "Anakeen",
    role: "Développeur Fullstack",
    period: "Juin 2024 – Oct. 2025",
    icon: "work",
    description: "Refonte d'une bibliothèque de composants graphiques.",
    keyTasks: [
      "Migration de Vue 2 vers Vue 3",
      "Développement d'UI components",
      "Documentation Storybook",
    ],
    stack: ["Vue.js 3", "PHP", "Storybook", "TypeScript"],
  },
  {
    company: "Capgemini - Airbus",
    role: "Ingénieur Logiciel",
    period: "Sept. 2023 – Fév. 2024",
    icon: "work",
    description: "Évolution d'un système PLM critique aéronautique.",
    keyTasks: ["Features métier complexes", "Plans de tests", "Maintenance PLM"],
    stack: ["Java", "Angular", "TypeScript", "Scrum"],
  },
  {
    company: "Laboratoire Informatique Avignon",
    role: "Développeur Fullstack",
    period: "Juin 2022 – Juil. 2023",
    icon: "work",
    description: "Optimisation d'un simulateur de réseau électrique.",
    keyTasks: ["Éditeur de graphes interactif", "Maintenance évolutive", "Rédaction technique"],
    stack: ["Rust", "Vue.js", "D3.js", "Leaflet"],
  },
  {
    company: "Avignon Université",
    role: "Master Ingénierie des Logiciels",
    period: "2021 – 2023",
    icon: "education",
    description: "Architecture logicielle et systèmes complexes.",
    keyTasks: ["Architecture avancée", "Gestion de projets", "Algorithmique"],
    stack: ["Java", "Génie Logiciel", "Python"],
  },
  {
    company: "HopitalWeb Corp",
    role: "Développeur Informatique Santé",
    period: "Mars 2021 – Sept. 2021",
    icon: "work",
    description: "Plateforme de gestion hospitalière centralisée.",
    keyTasks: ["Module suivi patient", "Optimisation serveurs", "UI Improvement"],
    stack: ["Angular", "PHP", "SQL"],
  },
  {
    company: "ESIH Haïti",
    role: "Licence en Sciences Informatiques",
    period: "2016 – 2020",
    icon: "education",
    description: "Double cursus Informatique et Gestion.",
    keyTasks: ["Software development", "Modélisation SQL", "Entrepreneuriat"],
    stack: ["Java", "SQL", "HTML/CSS"],
  },
];
