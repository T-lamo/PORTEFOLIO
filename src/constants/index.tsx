// src/constants/index.ts

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
    description:
      "Vitrine technologique interactive conçue pour mettre en avant mes compétences en ingénierie logicielle et data.",
    longDescription:
      "Développement de mon portfolio personnel utilisant une architecture moderne et optimisée. L'objectif était de créer une expérience utilisateur fluide tout en appliquant des concepts avancés de développement : gestion d'état, animations performantes et intégration continue.",
    tags: [
      "React",
      "TypeScript",
      "Three.js",
      "MakeFile",
      "Git",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    link: "#",
    githubUrl: "https://github.com/T-lamo/portfolio", // À adapter si besoin
    liveUrl: "https://amosdorceus.netlify.app", // À adapter si besoin
    image: "/public/projects/port_folio.png",

    challenges: [
      "Conception d'une interface responsive et immersive avec des animations haute performance (Framer Motion)",
      "Optimisation des Web Vitals (SEO & Performance) pour un score Lighthouse proche de 100",
      "Architecture de composants réutilisables et typage rigoureux avec TypeScript",
      "Utilisation de l'IA pour l'optimisation du contenu et la génération de certains assets graphiques",
    ],

    results:
      "Une plateforme élégante et rapide, servant de démonstration concrète de mes capacités en développement Front-end et en design système.",

    detailedScreenshots: [
      {
        url: "public/projects/port_jira.png",
        // Correction : "jira" -> "Jira" (nom propre)
        caption: "Organisation Jira du projet : gestion agile et suivi des tâches.",
      },
      {
        url: "public/projects/port_user_story.png",

        caption: "Exemple de user story dans Jira pour la fonctionnalité de contact direct.",
      },
    ],
  },
  {
    title: "MLA Planning - début 2026",
    description:
      "Application de planification de ressources critiques pour le Ministère de la Louange (ICC), incluant un moteur de détection de conflits.",
    longDescription:
      "Conception et développement d'une application pour la gestion des chantres et musiciens. Le cœur du projet réside dans son moteur de planning capable d'orchestrer les disponibilités, les compétences (voix/instruments) et les contraintes de service pour plus de 500 utilisateurs.",
    tags: [
      "FastAPI",
      "Vue.js",
      "PostgreSQL",
      "FullCalendar",
      "Jira",
      "Scrum",
      "SQLModel",
      "JWT",
      "Tailwind CSS",
      "Docker",
      "Makefile",
      "Tests unitaires",
      "Git",
    ],
    link: "#",
    githubUrl: "https://github.com/T-lamo/mla-planning",
    liveUrl: "https://mla-planning.render.com",
    image: "public/projects/mla-api-example.png",

    challenges: [
      "Conception d'une architecture conçue pour être scalable afin de supporter plusieurs campus ICC",
      "Développement d'un 'Moteur de Collision Temporelle' pour empêcher les doubles affectations et respecter les indisponibilités (RG-01)",
      "Gestion fine des accès (RBAC) : sécurisation des endpoints selon les rôles (Admin, Responsable, Chantre)",
      "Optimisation des performances : utilisation de 'joinedload' pour résoudre le problème des requêtes N+1 sur les plannings mensuels",
      "Gestion proactive de la dette technique et assurance qualité assistée par IA (Pylint, analyse de complexité)",
    ],

    results:
      "Système robuste avec transition de statuts (Brouillon -> Publié -> Clôturé), garantissant 100 % de fiabilité dans la programmation des équipes et automatisant les notifications de service.",

    detailedScreenshots: [
      {
        url: "public/projects/mla-api-example.png",
        caption: "Exemple de réponse d'API REST avec documentation Swagger.",
      },
      {
        url: "public/projects/mla-jira-board.png",
        caption: "Vue Calendrier : consultation des activités et gestion des slots d'affectation.",
      },
      {
        url: "public/projects/mla-schema-db.png",
        caption: "Architecture de données SQL de l'application.",
      },
    ],
  },
  {
    title: "Digicheese - Refonte SI Fidélité - Janvier 2026",
    description:
      "Modernisation d'un système legacy Access/VBA vers une architecture API REST Python sécurisée.",
    longDescription:
      "Projet critique de transformation numérique visant à remplacer un système obsolète vieux de 20 ans par une solution robuste, évolutive et sécurisée. L'enjeu principal était de garantir la continuité métier tout en implémentant des standards de sécurité modernes (OWASP).",
    tags: ["Python", "FastAPI", "MySQL", "JWT", "Docker"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/DIGICHEES_APP",
    liveUrl: "https://digichees-app-1.onrender.com/docs",
    image: "public/projects/digi-swagger.png",

    challenges: [
      "Conception d'une architecture en couches (Routes → Services → Repositories) pour une testabilité maximale",
      "Sécurisation des données sensibles via hachage Argon2 et gestion fine des rôles (RBAC)",
      "Migration et modélisation de données complexes depuis un système Legacy (Access/VBA)",
      "Automatisation de la qualité logicielle : tests unitaires, d'intégration et analyse de complexité cyclomatique (Radon)",
    ],

    results:
      "Livraison d'un socle API REST 100 % fonctionnel, sécurisé selon les recommandations OWASP, avec une documentation Swagger interactive et une suite de tests automatisée validant l'ensemble des règles métier.",

    detailedScreenshots: [
      {
        url: "public/projects/digi-swagger.png",
        caption: "Documentation OpenAPI/Swagger générée automatiquement pour l'interopérabilité.",
      },
      {
        url: "public/projects/digi-workflow.png",
        caption:
          "Architecture de sécurité : flux d'authentification JWT et contrôle d'accès par rôles.",
      },
      {
        url: "public/projects/digi-jira-board.png",
        caption: "Gestion de projet Agile via Jira : suivi des sprints et des User Stories.",
      },
    ],
  },
  {
    title: "E-Commerce Decathlon 2023",
    description:
      "Application type Decathlon avec gestion de catalogue dynamique et tunnel d'achat optimisé.",
    longDescription:
      "Une plateforme e-commerce robuste conçue pour gérer des milliers de références produits. L'accent a été mis sur la performance du tunnel de commande et la réactivité de l'interface via Svelte. Le backend FastAPI assure des temps de réponse ultra-rapides pour les requêtes complexes de filtrage.",
    tags: ["Svelte", "TypeScript", "PostgreSQL"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/decathlon",
    liveUrl: "https://decathlon-test.netlify.app/",
    image: "/public/projects/decat-main.png",
    challenges: [
      "Gestion d'un panier d'achat persistant côté client/serveur",
      "Optimisation du SEO pour les pages produits dynamiques",
      "Mise en place d'une architecture micro-services pour le paiement",
    ],
    results:
      "Une application fluide avec un temps de chargement inférieur à 1 s et un score Lighthouse de 98/100.",
    detailedScreenshots: [
      {
        url: "/public/projects/decat-main.png",
        caption: "Liste d'articles avec filtres dynamiques & système de profilage.",
      },
      {
        url: "/projects/decat-commande.png",
        caption: "Page de suivi de commande et gestion du panier.",
      },
      {
        url: "/public/projects/decat-details.png",
        caption: "Page de détails produit.",
      },
    ],
  },
  {
    title: "CV Builder Dynamique - 2024",
    description:
      "Outil de création de CV avec prévisualisation en temps réel et gestion d'état complexe (NgRx).",
    longDescription:
      "Un éditeur WYSIWYG permettant aux utilisateurs de construire des CV professionnels. L'application utilise NgRx pour maintenir la cohérence des données entre les multiples formulaires et la prévisualisation live. Exportation PDF haute fidélité intégrée.",
    tags: ["Angular", "NgRx", "PrimeNg", "CSS/HTML"],
    link: "#",
    githubUrl:
      "https://gitlab.com/cvbuilder1/cvbuilder-front/-/tree/cv-builder-editor-responsiveness?ref_type=heads",
    liveUrl: "https://cvbuilder-singlepage.netlify.app/cv/editor/about",
    image: "/public/projects/cv-builder-capture.png",
    challenges: [
      "Synchronisation en temps réel sans latence via NgRx",
      "Mise en page dynamique complexe supportant plusieurs modèles",
      "Exportation PDF fidèle au rendu navigateur (CSS Print)",
    ],
    results: "Projets personnels de développement pour la maîtrise de NgRx & Angular.",
    detailedScreenshots: [],
  },
  {
    title: "Desevnet Graph Editor",
    description:
      "Éditeur de graphes interactif haute performance pour la simulation de réseaux électriques.",
    longDescription:
      "Un outil technique destiné aux ingénieurs réseau. Il permet de modéliser des réseaux électriques complexes (Smart Grids) via une interface de dessin de graphes. Les calculs de flux de puissance sont déportés dans un moteur Rust pour une performance maximale.",
    tags: ["Vue.js", "D3.js", "Leaflet", "Git"],
    link: "#",
    githubUrl: "https://github.com/votreuser/desevnet",
    liveUrl: "https://netgenerator.netlify.app/",
    image: "/public/projects/desev-net.png",
    challenges: [
      "Rendu fluide de milliers de nœuds et liens avec D3.js",
      "Bridge de données haute performance",
      "Algorithmes de détection de cycles et de topologie réseau",
    ],
    results:
      "Réduction du temps de configuration d'un simulateur de bornes de recharge de véhicules électriques de 80 % grâce à une interface graphique intuitive et un moteur de calcul optimisé.",
    detailedScreenshots: [],
  },
];

export const experiences = [
  {
    company: "Diginamic",
    role: "Data Engineer & IA",
    period: "Déc 2025 – Présent",
    icon: "education",
    description:
      "Conception et déploiement d'architectures de données robustes et de systèmes d'IA industrialisés.",
    keyTasks: [
      "Développement de pipelines Big Data complexes (Spark, Kafka, Cassandra)",
      "Conception et déploiement de modèles IA : Machine Learning & Deep Learning (NLP)",
      "Industrialisation et supervision d'applications via Docker et CI/CD",
      "Mise en œuvre d'un suivi de la qualité applicative assisté par l'IA",
      "Pilotage de projets en méthodologie Agile (Scrum, Jira, Confluence)",
    ],
    stack: ["Python", "Prompt Engineering", "FastAPI", "Spark", "TensorFlow", "Docker", "Kafka"],
  },
  {
    company: "Anakeen",
    role: "Développeur Fullstack",
    period: "Juin 2024 – Oct. 2025",
    icon: "work",
    description:
      "Refonte d'une bibliothèque de composants graphiques et ajout de fonctionnalités complexes.",
    keyTasks: [
      "Migration stratégique de Vue 2 vers Vue 3",
      "Développement d'une bibliothèque de composants UI",
      "Rédaction de documentation interactive avec Storybook",
    ],
    stack: ["Vue.js 3", "PHP", "Storybook", "TypeScript"],
  },
  {
    company: "Capgemini - Airbus",
    role: "Ingénieur Logiciel",
    period: "Sept. 2023 – Fév. 2024",
    icon: "work",
    description: "Évolution d'un système PLM critique au sein du secteur aéronautique.",
    keyTasks: [
      "Implémentation de fonctionnalités métier complexes",
      "Conception et exécution de plans de tests rigoureux",
      "Maintenance corrective et évolutive du système",
    ],
    stack: ["Java", "Angular", "TypeScript", "Scrum"],
  },
  {
    company: "Laboratoire Informatique Avignon",
    role: "Développeur Fullstack",
    period: "Juin 2022 – Juil. 2023",
    icon: "work",
    description:
      "Optimisation d'un simulateur de réseau de bornes de recharge pour véhicules électriques.",
    keyTasks: [
      "Développement d'un éditeur de graphes interactif",
      "Amélioration de la configuration du simulateur",
      "Maintenance évolutive et rédaction technique",
    ],
    stack: ["Rust", "Vue.js", "D3.js", "Linux", "Leaflet"],
  },
  {
    company: "Avignon Université",
    role: "Master Ingénierie des Logiciels",
    period: "2021 – 2023",
    icon: "education",
    description: "Formation approfondie en architecture logicielle et systèmes complexes.",
    keyTasks: [
      "Architecture logicielle avancée",
      "Gestion de projets informatiques",
      "Algorithmique et systèmes distribués",
    ],
    stack: ["Java", "Génie Logiciel", "Python"],
  },
  {
    company: "HopitalWeb Corp",
    role: "Développeur Informatique Santé",
    period: "Mars 2021 – Sept. 2021",
    icon: "work",
    description:
      "Participation au développement d'une plateforme de gestion hospitalière centralisée.",
    keyTasks: [
      "Implémentation de nouvelles fonctionnalités sur le module de suivi patient",
      "Optimisation des requêtes côté serveur pour le traitement des dossiers médicaux",
      "Maintenance corrective et amélioration de l'interface utilisateur (UI)",
      "Collaboration en équipe sur la stack Angular/PHP pour assurer la disponibilité du service",
    ],
    stack: ["Angular", "PHP", "JavaScript", "SQL"],
  },
  {
    company: "ESIH Haïti",
    role: "Licence en Sciences Informatiques",
    period: "2016 – 2020",
    icon: "education",
    description: "Double cursus en Sciences Informatiques et Gestion d'Entreprises.",
    keyTasks: [
      "Développement de logiciels fondamentaux",
      "Entrepreneuriat et gestion de PME",
      "Modélisation de bases de données SQL",
    ],
    stack: ["Java", "SQL", "HTML/CSS", "Gestion de projet"],
  },
];
