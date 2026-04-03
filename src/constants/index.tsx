// 1. IMPORT DES ASSETS (Indispensable pour Vite & Netlify)
import cvBuilderMain from "../assets/projects/cv-builder-capture.png";
import decatCommande from "../assets/projects/decat-commande.png";
import decatDetails from "../assets/projects/decat-details.png";
import decatMain from "../assets/projects/decat-main.png";
import desevNetMain from "../assets/projects/desev-net.png";
import digiJira from "../assets/projects/digi-jira-board.png";
import digiMain from "../assets/projects/digi-swagger.png";
import digiWorkflow from "../assets/projects/digi-workflow.png";
import mlaJira from "../assets/projects/mla-jira-board.png";
import mlaPlanningDetails from "../assets/projects/mla-planning-details.png";
import mlaSchema from "../assets/projects/mla-schema-db.png";
import mlaCalendar from "../assets/projects/mlaCalendar.png";
import mlaCalendarWeek from "../assets/projects/mlaCalendarWeek.png";
import mlaCampusConfig from "../assets/projects/mlaCampusConfig.png";
import mlaIndisponibilites from "../assets/projects/mlaIndisponibilites.png";
import mlaLogin from "../assets/projects/mlaLogin.png";
import mlaMesAffectations from "../assets/projects/mlaMesAffectations.png";
import mlaPlanningFormActivite from "../assets/projects/mlaPlanningFormActivite.png";
import mlaPlanningFormEquipe from "../assets/projects/mlaPlanningFormEquipe.png";
import mlaPlanningFormSlots from "../assets/projects/mlaPlanningFormSlots.png";
import mlaPlanningWorkflow from "../assets/projects/mlaPlanningWorkflow.png";
import mlaProfileDrawerAcces from "../assets/projects/mlaProfileDrawerAcces.png";
import mlaProfileDrawerInfo from "../assets/projects/mlaProfileDrawerInfo.png";
import mlaProfileDrawerMinisteres from "../assets/projects/mlaProfileDrawerMinisteres.png";
import mlaProfiles from "../assets/projects/mlaProfiles.png";
import mlaSidebar from "../assets/projects/mlaSidebar.png";
import mlaSidebarCollapsed from "../assets/projects/mlaSidebarCollapsed.png";
import mlaSuperProfiles from "../assets/projects/mlaSuperProfiles.png";
import mlaSwagger from "../assets/projects/mlaSwagger.png";
import mlaTests from "../assets/projects/mlaTests.png";
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
    "Ingénieur avec 3 ans d'expérience au sein d'environnements industriels exigeants (Airbus, Anakeen). Je me spécialise dans la conception d'architectures web scalables et d'interfaces fluides. Passionné par l'innovation technique, j'allie rigueur professionnelle et créativité à travers des projets ambitieux. Disponible pour des missions de projet ou un CDI.",
  ctaPrimary: "Voir mes projets",
  ctaSecondary: "Me contacter",
  Tel: "+330749286021",
  Email: "amosdorceus2010@gmail.com",
};

export const projects = [
  {
    title: "MLA Planning — SaaS de planification",
    description:
      "Plateforme SaaS multi-tenant pour la gestion des ressources humaines du Ministère de la Louange (ICC). Affectation des chantres, planning 24h/24, gestion des rôles et des absences.",
    longDescription:
      "Conception et développement complet (full-stack) d'une application de planification critique pour une organisation multi-campus. L'application couvre la gestion des membres, l'affectation aux créneaux de service, le suivi de présence en temps réel et le contrôle d'accès granulaire. Le backend expose une API REST FastAPI documentée (OpenAPI), le frontend est une SPA Nuxt 4 avec calendrier interactif FullCalendar. L'architecture multi-tenant isole les données par campus et applique un modèle RBAC à 4 niveaux (SuperAdmin, Admin, Responsable, Membre).",
    tags: [
      "FastAPI",
      "Vue 3",
      "Nuxt 4",
      "TailwindCSS v4",
      "FullCalendar",
      "PostgreSQL",
      "SQLModel",
      "Alembic",
      "Docker",
      "Makefile",
      "CI/CD",
      "Pinia",
      "JWT",
      "RBAC",
      "Jira",
    ],
    link: "#",
    githubUrl: "https://github.com/T-lamo/MLA-Planner",
    liveUrl: "https://icctoulouseplanner.netlify.app/",
    image: mlaCalendarWeek,

    challenges: [
      "Architecture multi-tenant : isolation stricte des données par campus avec filtres obligatoires sur chaque requête SQL",
      "Moteur de workflow d'affectation : machine à états (PROPOSE → CONFIRME → PRÉSENT / ABSENT / RETARD) avec transitions métier validées côté serveur",
      "Sécurité JWT avancée : tokens signés HS256 avec JTI unique et blacklist en base — révocation immédiate à la déconnexion",
      "RBAC à 4 niveaux : SuperAdmin, Admin, Responsable MLA, Membre MLA — chaque endpoint protégé via RoleChecker injectable (FastAPI Depends)",
      "Calendrier 24h/24 multi-perspectives : vue Personnelle, Ministère ou Campus avec coloration déterministe par ministère",
      "Pipeline CI/CD complet : isort → black → mypy (strict) → pylint 10/10 → flake8 → pytest (192 tests) — zéro tolérance aux erreurs",
    ],

    results:
      "192 tests backend (100 % de réussite), mypy strict sans type: ignore, pylint 10/10, déployé sur Render (API) et Netlify (frontend statique). Couverture complète du cycle de vie d'un planning : création → publication → affectation → pointage.",

    detailedScreenshots: [
      // ── AUTHENTIFICATION & NAVIGATION ──────────────────────────────
      {
        // Page de login avec le formulaire centré et le logo
        url: mlaLogin,
        caption:
          "Page de connexion — authentification JWT sécurisée (cookies HttpOnly, sameSite strict).",
      },
      {
        // Sidebar dépliée avec toutes les sections visibles (Planning, Administration)
        url: mlaSidebar,
        caption:
          "Navigation principale — sidebar responsive avec sections par rôle (Admin, Membre).",
      },
      {
        // Sidebar repliée en mode icônes avec le popup Planning au survol
        url: mlaSidebarCollapsed,
        caption: "Mode compact — sidebar réduite aux icônes avec popup contextuel au survol.",
      },

      // ── CALENDRIER ──────────────────────────────────────────────────
      {
        // Vue calendrier mensuel avec créneaux colorés par ministère
        url: mlaCalendar,
        caption: "Calendrier FullCalendar 24h/24 — vue mensuelle avec coloration par ministère.",
      },
      {
        // Vue calendrier en mode semaine avec créneaux détaillés
        url: mlaCalendarWeek,
        caption: "Vue hebdomadaire — créneaux détaillés et taux de remplissage en temps réel.",
      },

      // ── GESTION DES PLANNINGS ───────────────────────────────────────
      {
        // Formulaire de création : section Activité avec le sélecteur de type
        url: mlaPlanningFormActivite,
        caption: "Création de planning — sélection du type d'activité, dates et lieu.",
      },
      {
        // Formulaire : section Créneaux avec l'heure début/fin et quota de personnes
        url: mlaPlanningFormSlots,
        caption: "Configuration des créneaux — horaires, quota de membres requis par service.",
      },
      {
        // Formulaire : section Équipe avec picker de membres et rôles affectés
        url: mlaPlanningFormEquipe,
        caption:
          "Affectation de l'équipe — sélection des membres par ministère et attribution des rôles.",
      },
      {
        // Drawer de détail d'un planning publié avec les statuts de présence
        url: mlaPlanningDetails,
        caption: "Détail d'un planning publié — statuts de présence (Présent / Absent / Retard).",
      },
      {
        // Boutons de transition workflow dans le drawer (Publier, Terminer, Annuler)
        url: mlaPlanningWorkflow,
        caption: "Moteur de workflow — transitions d'état validées côté serveur (machine à états).",
      },

      // ── AFFECTATIONS MEMBRE ─────────────────────────────────────────
      {
        // Page mes-affectations avec section "En attente" et boutons Accepter/Refuser
        url: mlaMesAffectations,
        caption: "Mes affectations — acceptation ou refus des propositions en temps réel.",
      },

      // ── GESTION DES PROFILS ─────────────────────────────────────────
      {
        // Page profils admin avec grille de cards membres
        url: mlaProfiles,
        caption: "Gestion des membres — vue admin avec recherche et filtrage par campus.",
      },
      {
        // Drawer profil ouvert sur la section Informations personnelles
        url: mlaProfileDrawerInfo,
        caption: "Fiche membre — édition des informations personnelles et statut actif/inactif.",
      },
      {
        // Drawer profil section Ministères & Pôles avec cases à cocher
        url: mlaProfileDrawerMinisteres,
        caption: "Affectation ministères — rattachement aux pôles et ministères de l'organisation.",
      },
      {
        // Drawer profil section Accès applicatif (username, mot de passe, rôles)
        url: mlaProfileDrawerAcces,
        caption:
          "Accès applicatif — création du compte utilisateur avec RBAC depuis le même formulaire.",
      },
      {
        // Page super admin profiles avec dropdown campus et liste complète
        url: mlaSuperProfiles,
        caption: "Vue SuperAdmin — accès global à tous les campus, gestion cross-tenant.",
      },

      // ── INDISPONIBILITÉS ────────────────────────────────────────────
      {
        // Page indisponibilités avec la liste des périodes et les badges validé/en attente
        url: mlaIndisponibilites,
        caption: "Gestion des indisponibilités — déclaration des absences avec validation admin.",
      },

      // ── CONFIGURATION CAMPUS ────────────────────────────────────────
      {
        // Page campus-config avec les ministères, pôles et rôles configurables
        url: mlaCampusConfig,
        caption: "Configuration campus — gestion des ministères, pôles et rôles de compétence.",
      },

      // ── TECHNIQUE ───────────────────────────────────────────────────
      {
        // Swagger /docs avec les groupes d'endpoints dépliés
        url: mlaSwagger,
        caption: "API REST FastAPI — 40+ endpoints documentés, sécurisés et versionnés (OpenAPI).",
      },
      {
        // Terminal avec "192 passed" en vert
        url: mlaTests,
        caption:
          "Couverture de tests — 192 tests pytest, mypy strict, pylint 10/10, zéro régression.",
      },
      {
        // Schéma ERD base de données
        url: mlaSchema,
        caption:
          "Modèle de données SQL — 20+ tables, multi-tenant, soft delete, migrations Alembic.",
      },
      {
        // Board Jira avec tickets organisés en sprints
        url: mlaJira,
        caption: "Gestion de projet Agile — sprints Jira, backlog priorisé, suivi des livraisons.",
      },
    ],
  },
  {
    title: "Portfolio Professionnel",
    description: "Vitrine technologique interactive conçue pour mettre en avant mes compétences.",
    longDescription:
      "Développement de mon portfolio personnel utilisant une architecture moderne et optimisée.",
    tags: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "#",
    githubUrl: "https://github.com/T-lamo/PORTEFOLIO",
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
    title: "Digicheese - Refonte SI Fidélité",
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
    title: "E-Commerce Decathlon",
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
    title: "CV Builder Dynamique",
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
    period: "Déc 2025 – Mars 2026",
    icon: "education",
    description: "Formation Data Engineering & IA suivie de décembre 2025 à mars 2026.",
    keyTasks: [
      "Conception d'applications avec UML et développement Python",
      "Qualité applicative : tests SquashTM, CI/CD, Docker, tests automatisés",
      "Méthodologie Agile : Scrum, Jira, Confluence, product management",
      "Veille technologique et leadership / gestion de conflits",
    ],
    stack: ["Python", "UML", "Docker", "CI/CD", "SquashTM", "Jira", "Scrum"],
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
