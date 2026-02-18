# Variables
NPM = npm
VITE = ./node_modules/.bin/vite
TSC = ./node_modules/.bin/tsc
ESLINT = ./node_modules/.bin/eslint
PRETTIER = npx prettier

# Couleurs
BLUE   = \033[1;34m
GREEN  = \033[1;32m
YELLOW = \033[1;33m
RED    = \033[1;31m
RESET  = \033[0m

.PHONY: help setup dev build lint format check clean doctor

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

setup: ## Installation propre des dépendances et outils de qualité
	@echo "$(BLUE)Installation des dépendances...$(RESET)"
	$(NPM) install

dev: clean-cache ## Lance le serveur de dev (nettoie le cache auto)
	@echo "$(GREEN)Démarrage du serveur local...$(RESET)"
	$(NPM) run dev

build: check ## Build de production (lance un check complet avant)
	@echo "$(GREEN)Compilation pour la production...$(RESET)"
	$(NPM) run build

lint: ## Analyse statique du code (ESLint)
	@echo "$(BLUE)Analyse du code...$(RESET)"
	$(ESLINT) src --ext .ts,.tsx --fix

format: ## Formate le code et trie les classes Tailwind (Prettier)
	@echo "$(BLUE)Formatage du code...$(RESET)"
	$(PRETTIER) --write "src/**/*.{ts,tsx,css,json}"

check: ## Vérification totale : Types + Lint + Format
	@echo "$(YELLOW)Vérification globale en cours...$(RESET)"
	$(TSC) --build
	@$(MAKE) lint
	@$(MAKE) format
	@echo "$(GREEN)Qualité de code validée !$(RESET)"

clean: ## Nettoyage complet (dist, node_modules, cache)
	@echo "$(RED)Suppression des dossiers de build et dépendances...$(RESET)"
	rm -rf dist node_modules .vite
	@echo "$(GREEN)Projet remis à zéro.$(RESET)"

clean-cache: ## Nettoyage du cache Vite
	@echo "$(YELLOW)Nettoyage du cache Vite...$(RESET)"
	rm -rf node_modules/.vite

doctor: ## Diagnostic du système
	@echo "$(BLUE)Diagnostic de l'environnement :$(RESET)"
	@printf "Node: " && node -v
	@printf "NPM:  " && npm -v
	@printf "Vite: " && $(VITE) -v

ci: setup check build ## Commande utilisée par GitHub Actions