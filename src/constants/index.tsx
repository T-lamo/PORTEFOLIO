// 1. IMPORT DES ASSETS (Indispensable pour Vite & Netlify)

import cvBuilderMain from "../assets/projects/cv-builder-capture.png";
import decatCommande from "../assets/projects/decat-commande.png";
import decatDetails from "../assets/projects/decat-details.png";
import decatMain from "../assets/projects/decat-main.png";
import desevNetMain from "../assets/projects/desev-net.png";
import digiJira from "../assets/projects/digi-jira-board.png";
import digiMain from "../assets/projects/digi-swagger.png";
import digiWorkflow from "../assets/projects/digi-workflow.png";
import genAppDistribuee from "../assets/projects/gen-app-distribuee.svg";
import genCeriGame from "../assets/projects/gen-ceri-game.svg";
import genEcommerceCeri from "../assets/projects/gen-ecommerce-ceri.svg";
import genEkolplus from "../assets/projects/gen-ekolplus.svg";
import genFiveInRow from "../assets/projects/gen-five-in-row.svg";
import genHackTrash from "../assets/projects/gen-hacktrash.svg";
import genN8nAutomation from "../assets/projects/gen-n8n-automation.svg";
import genRapidDelivery from "../assets/projects/gen-rapid-delivery.svg";
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
import type { Project, ProjectCategoryInfo } from "../types";

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

export const projectCategories: ProjectCategoryInfo[] = [
  { id: "fullstack", label: "Web Fullstack & SaaS" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "automation", label: "Automatisation" },
  { id: "systems", label: "Systèmes & Algorithmes" },
];

export const projects: Project[] = [
  {
    title: "MLA Planning — SaaS de planification",
    category: "fullstack",
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
    title: "EkolPlus — SaaS de gestion scolaire (Haïti)",
    category: "fullstack",
    description:
      "SIS/ERP multi-tenant pour les écoles haïtiennes : présence, notes, bulletins PDF et facturation, avec isolation stricte des données par établissement.",
    longDescription:
      "SaaS de gestion scolaire conçu et développé en solo pour le marché haïtien, où les écoles gèrent encore élèves, présences et bulletins sur papier ou via des outils disparates. Le frontend est une app Next.js 15 (App Router, TypeScript, Tailwind CSS, shadcn/ui), le backend une API NestJS avec guards RBAC, et la donnée est portée par Supabase (PostgreSQL, Auth, Row Level Security). Chaque rôle — administrateur d'école, enseignant, parent, élève — a son propre tableau de bord, et l'isolation entre écoles est garantie par des policies RLS en base plutôt que par du code applicatif. L'application est déployée en conteneurs Docker sur un VPS, avec Supabase managé pour la donnée.",
    tags: [
      "Next.js 15",
      "NestJS",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Tailwind CSS",
      "shadcn/ui",
      "Docker",
      "Stripe",
      "RBAC",
      "Multi-tenant",
    ],
    link: "#",
    image: genEkolplus,
    challenges: [
      "Isolation multi-tenant portée par la base plutôt que par le code : policies RLS Postgres pilotées par profiles.tenant_id, vérifiées avec de vrais logins sur deux écoles de démonstration",
      "Authentification globale sans slug d'école dans l'URL : le tenant est dérivé du JWT vérifié, jamais de l'adresse, pour éviter toute fuite d'information entre établissements",
      "RBAC à quatre rôles (AdminÉcole, Enseignant, Parent, Élève) avec des tableaux de bord et des permissions distincts par profil",
      "Génération de bulletins PDF côté serveur (NestJS + Chromium), incompatible avec un hébergement serverless — d'où le choix d'un déploiement conteneurisé sur VPS",
      "Facturation des écoles par abonnement Stripe (checkout, portail client, webhooks et tâche planifiée de relance)",
      "Provisioning des écoles réservé à un CLI interne exécuté côté serveur plutôt qu'à une interface web, pour ne jamais exposer de super-admin accessible depuis l'application",
    ],
    results:
      "Application déployée et validée de bout en bout sur un VPS de production : isolation RLS testée avec de vraies données sur deux écoles, RBAC vérifié (un compte enseignant reçoit bien un 403 sur les routes réservées à l'administration), parcours de connexion validé avec un vrai navigateur (Playwright). Encore en phase de test avant ouverture à de vraies écoles.",
    detailedScreenshots: [],
  },
  {
    title: "Automatisation recherche d'emploi — n8n",
    category: "automation",
    description:
      "Pipeline d'automatisation complet du suivi de candidatures : Trello, n8n, Google APIs, Telegram et une extension Chrome maison.",
    longDescription:
      "Système d'automatisation personnel construit autour de n8n (auto-hébergé dans Docker). Une extension Chrome (Manifest V3) capture en un clic les offres LinkedIn / HelloWork et crée une carte Trello structurée. Les mouvements de cartes déclenchent des webhooks (exposés via ngrok) traités par deux workflows n8n : le premier programme une relance automatique à J+7 (rappel Google Calendar + brouillon Gmail personnalisé), le second journalise chaque étape dans Google Sheets et envoie un bilan hebdomadaire sur Telegram chaque vendredi.",
    tags: [
      "n8n",
      "Docker",
      "Trello API",
      "Webhooks",
      "OAuth2",
      "Google APIs",
      "Extension Chrome",
      "JavaScript",
      "ngrok",
      "Telegram Bot",
    ],
    link: "#",
    image: genN8nAutomation,
    challenges: [
      "Orchestration de 5 services externes (Trello, Gmail, Calendar, Sheets, Telegram) via OAuth2 et credentials chiffrés dans n8n",
      "Exposition sécurisée d'une instance locale via tunnel ngrok avec ré-enregistrement des webhooks Trello à chaque changement d'URL",
      "Extension Chrome Manifest V3 : scraping robuste des pages LinkedIn / HelloWork et création de cartes Trello via API",
      "Idempotence des relances : étiquette « Relancé » posée sur la carte pour éviter les doublons de rappels",
      "Configuration par variables d'environnement (TRELLO_BOARD_ID) pour un workflow portable sans valeurs codées en dur",
    ],
    results:
      "Zéro suivi manuel : chaque candidature déplacée dans « Postulé » génère automatiquement son rappel J+7 et son brouillon de relance ; un bilan chiffré (candidatures, entretiens, taux de réponse) arrive chaque vendredi sur Telegram.",
    detailedScreenshots: [],
  },
  {
    title: "Portfolio Professionnel",
    category: "frontend",
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
    category: "fullstack",
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
    category: "frontend",
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
    category: "frontend",
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
    category: "frontend",
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
  {
    title: "Rapid Delivery — Optimisation de tournées",
    category: "systems",
    description:
      "Application de routage de livraisons : carte interactive, clients géolocalisés et calcul d'itinéraires réels via OSRM.",
    longDescription:
      "Outil de planification de tournées de livraison développé en Vue 3 / TypeScript. Les clients sont positionnés sur une carte Leaflet, et le moteur open source OSRM fournit les itinéraires routiers réels (polylines, étapes) ainsi que les matrices distances/durées entre tous les points, base du choix de la tournée la plus efficace depuis le dépôt.",
    tags: ["Vue 3", "TypeScript", "Leaflet", "OSRM", "Vuetify", "Pinia", "Axios", "Vite"],
    link: "#",
    image: genRapidDelivery,
    challenges: [
      "Intégration de l'API OSRM : endpoints /route et /table pour obtenir trajets détaillés et matrices distance/durée N×N",
      "Appels réseau séquencés pour respecter les limites du serveur public de routage",
      "Modélisation du réseau de livraison en graphe (nœuds, arcs) synchronisé avec la carte Leaflet",
      "Architecture par stores Pinia séparés : clients, réseau routier, visualisation",
    ],
    results:
      "Visualisation immédiate de la tournée optimale entre dépôt et clients avec distances et durées réelles issues du réseau routier.",
    detailedScreenshots: [],
  },
  {
    title: "E-Commerce Cloud-Native — Master CERI",
    category: "fullstack",
    description:
      "Boutique en ligne complète déployée sur Google Cloud : FastAPI, Vue.js, Cloud SQL, Algolia et infrastructure Terraform.",
    longDescription:
      "Projet e-commerce de Master 1 mené en équipe (rôles : Backend Engineer et Site Reliability Engineer). Le backend FastAPI expose l'API produits / commandes / utilisateurs sur une base MySQL managée (Cloud SQL, accédée via cloud-sql-proxy), la recherche instantanée est déléguée à Algolia, et l'ensemble (frontend Vue.js, backend, reverse proxy) est conteneurisé avec des environnements docker-compose dev et prod. Le provisioning GCP est décrit en Terraform.",
    tags: [
      "FastAPI",
      "Python",
      "Vue.js",
      "MySQL",
      "GCP",
      "Cloud SQL",
      "Terraform",
      "Docker",
      "Algolia",
      "Nginx",
    ],
    link: "#",
    image: genEcommerceCeri,
    challenges: [
      "Double casquette Backend + SRE : conception de l'API et responsabilité du déploiement cloud de bout en bout",
      "Connexion sécurisée à Cloud SQL via cloud-sql-proxy en local comme en production",
      "Infrastructure as Code : provisioning GCP reproductible décrit en Terraform",
      "Parité dev/prod grâce à deux stacks docker-compose distinctes derrière un reverse proxy Nginx",
      "Indexation du catalogue dans Algolia pour une recherche instantanée côté client",
    ],
    results:
      "Plateforme e-commerce fonctionnelle déployée sur GCP avec recherche instantanée, base managée et environnements reproductibles — projet académique mené comme un produit réel.",
    detailedScreenshots: [],
  },
  {
    title: "Puissance 5 (Gomoku) — Rust",
    category: "systems",
    description:
      "Jeu de plateau en ligne de commande écrit en Rust : détection d'alignements, manches, scores et rendu coloré en terminal.",
    longDescription:
      "Implémentation complète du jeu Puissance 5 (Gomoku) en Rust, jouable à deux dans le terminal. Le projet est découpé en modules dédiés (plateau, partie, joueurs, énumérations d'état, utilitaires) et exploite les forces du langage : ownership, pattern matching exhaustif sur les états de jeu et types algébriques pour un code sans états invalides.",
    tags: ["Rust", "Cargo", "CLI", "Pattern Matching"],
    link: "#",
    image: genFiveInRow,
    challenges: [
      "Algorithme de détection des alignements de 5 pions dans toutes les directions (lignes, colonnes, deux diagonales)",
      "Modélisation des états de jeu avec des enums Rust et un pattern matching exhaustif vérifié à la compilation",
      "Gestion des manches successives et du score sur un cycle de parties complet",
      "Rendu du plateau lisible et coloré en terminal avec la crate colored",
    ],
    results:
      "Jeu robuste et sans crash possible sur états invalides — un terrain d'apprentissage concret de l'ownership et du système de types de Rust.",
    detailedScreenshots: [],
  },
  {
    title: "Streaming musical distribué piloté à la voix",
    category: "systems",
    description:
      "Système distribué de streaming musical commandé à la voix depuis Android, bâti sur le middleware ZeroC Ice.",
    longDescription:
      "Projet de systèmes distribués (Master) : une application Android enregistre la voix de l'utilisateur (« joue Hotel California »), la transmet par objets distants Ice à un service NLP qui interprète l'intention, puis des serveurs de streaming Java répartis sur plusieurs machines diffusent la musique en flux HTTP continu grâce à VLCj. Le catalogue musical est géré en SQLite et exposé via les mêmes interfaces Ice.",
    tags: ["Java", "Android", "ZeroC Ice", "Python", "Flask", "NLP", "VLCj", "SQLite"],
    link: "#",
    image: genAppDistribuee,
    challenges: [
      "Communication inter-langages (Java / Android / Python) par objets partagés via le middleware ZeroC Ice",
      "Chaîne voix → texte → intention : transmission de l'audio capté sur mobile et interprétation NLP des commandes",
      "Répartition des serveurs de streaming sur plusieurs machines avec registre Ice pour la découverte de services",
      "Diffusion audio HTTP en continu vers le mobile pendant le contrôle distant de la lecture",
    ],
    results:
      "Chaîne complète fonctionnelle : une commande vocale prononcée sur Android déclenche la lecture du bon titre, diffusé en streaming depuis un serveur distant.",
    detailedScreenshots: [],
  },
  {
    title: "CeriGame — Quiz interactif Angular",
    category: "frontend",
    description:
      "Jeu de quiz en ligne développé avec Angular 11 : comptes joueurs, parties chronométrées et notifications.",
    longDescription:
      "Application de quiz développée à l'Université d'Avignon avec Angular 11. La SPA gère la connexion des joueurs, le déroulement des parties (questions à choix multiples chronométrées), l'édition du profil utilisateur et un bandeau de notifications. Les données (authentification, questions, scores) sont consommées depuis l'API REST pédagogique de l'université via HttpClient et RxJS.",
    tags: ["Angular 11", "TypeScript", "RxJS", "SCSS", "API REST", "Karma"],
    link: "#",
    image: genCeriGame,
    challenges: [
      "Architecture en composants Angular : connexion, quiz, profil, notifications, routing dédié",
      "Flux asynchrones RxJS (Observables) pour consommer l'API REST de l'université",
      "Gestion de session joueur et modification du profil (pseudo, avatar, mot de passe)",
      "Mise en place des tests unitaires avec Karma / Jasmine",
    ],
    results:
      "Premier projet Angular complet : un quiz jouable de bout en bout, des fondations qui ont mené ensuite aux missions professionnelles Angular (Airbus, CV Builder).",
    detailedScreenshots: [],
  },
  {
    title: "HackTrash — ERP de recyclage plastique",
    category: "fullstack",
    description:
      "Plateforme web de pilotage d'une usine de recyclage : collecte, chaîne de production, ventes, RH et prédictions ML.",
    longDescription:
      "ERP web développé en PHP/MySQL lors d'un hackathon pour piloter toute la chaîne d'une usine de recyclage plastique : collecte auprès des collecteurs (avec solde et géolocalisation), étapes de production (triage, lavage, compactage, extrusion, pelletisation), ventes aux clients B2B, gestion du personnel (présence, paie) et maintenance des machines (carburant, pièces, rapports). Un tableau de bord Chart.js agrège l'activité en temps réel, et des modèles de régression scikit-learn entraînés en Python prédisent les volumes de collecte et les ventes à venir.",
    tags: ["PHP", "MySQL", "Chart.js", "Bootstrap", "Python", "scikit-learn", "Leaflet"],
    link: "#",
    image: genHackTrash,
    challenges: [
      "Modélisation complète du métier : 30+ écrans couvrant collecte, production, stock, ventes, RH et maintenance",
      "Intégration de modèles ML scikit-learn (prédiction des collectes et des ventes) servis depuis une application PHP",
      "Tableau de bord temps réel : indicateurs croisés stock / machines / carburant / présence avec Chart.js",
      "Cartographie des clients et collecteurs pour organiser les tournées de collecte",
    ],
    results:
      "Prototype d'ERP fonctionnel couvrant l'intégralité du cycle « déchet → granulé → vente », enrichi de prédictions ML pour anticiper collectes et revenus.",
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
