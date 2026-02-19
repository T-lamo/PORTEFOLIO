// src/constants/index.ts

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
  Tel: "+330749286021",
  Email: "amosdorceus2010@gmail.com",
};

export const projects = [
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
      "Une application fluide avec un temps de chargement inférieur à 1s et un score Lighthouse de 98/100.",
    detailedScreenshots: [
      {
        url: "/public/projects/decat-main.png",
        caption: "Liste d'articles avec filtres dynamiques & système de profiling.",
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
    title: "CV Builder Dynamique",
    description:
      "Outil de création de CV avec prévisualisation en temps réel et gestion d'état complexe (NgRx).",
    longDescription:
      "Un éditeur WYSIWYG permettant aux utilisateurs de construire des CV professionnels. L'application utilise NgRx pour maintenir la cohérence des données entre les multiples formulaires et la prévisualisation live. Exportation PDF haute fidélité intégrée.",
    tags: ["Angular", "NgRx", "PrimeNg"],
    link: "#",
    githubUrl: "https://github.com/votreuser/cv-builder",
    liveUrl: "https://cv-builder-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2340&auto=format&fit=crop",
    challenges: [
      "Synchronisation en temps réel sans latence via NgRx",
      "Mise en page dynamique complexe supportant plusieurs templates",
      "Exportation PDF fidèle au rendu navigateur (CSS Print)",
    ],
    results:
      "Outil utilisé par plus de 500 utilisateurs par mois avec un taux de conversion élevé.",
    detailedScreenshots: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
        caption: "Système de drag-and-drop pour la réorganisation des sections.",
      },
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
        caption: "Gestionnaire de thèmes et de palettes de couleurs personnalisées.",
      },
    ],
  },
  {
    title: "Desevnet Graph Editor",
    description:
      "Éditeur de graphes interactif haute performance pour la simulation de réseaux électriques.",
    longDescription:
      "Un outil technique de pointe destiné aux ingénieurs réseau. Il permet de modéliser des réseaux électriques complexes (Smart Grids) via une interface de dessin de graphes. Les calculs de flux de puissance sont déportés dans un moteur Rust pour une performance maximale.",
    tags: ["Vue.js", "D3.js", "Rust"],
    link: "#",
    githubUrl: "https://github.com/votreuser/desevnet",
    liveUrl: "https://desevnet-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    challenges: [
      "Rendu fluide de milliers de nœuds et liens avec D3.js",
      "Bridge de données haute performance entre JavaScript et WebAssembly (Rust)",
      "Algorithmes de détection de cycles et de topologie réseau",
    ],
    results:
      "Réduction du temps de calcul des simulations de 80% par rapport à l'ancienne version PHP.",
    detailedScreenshots: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
        caption: "Visualisation des flux de charge en temps réel sur le graphe.",
      },
      {
        url: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=2000&auto=format&fit=crop",
        caption: "Console de debug et monitoring des performances du moteur Rust.",
      },
    ],
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
