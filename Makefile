help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@ Setup (install and bootstrap)

setup:	## Install node, all dependencies and built the artifacts
	pnpm run setup

reinstall:	## Clear cache and reinstall all dependencies and rebuild artifacts
	pnpm store prune && make clean-artifacts && make clean-cache

reset:	## Remove all node_modules directories in workspace
	rimraf ./apps/*/node_modules ./libs/*/node_modules ./configs/*/node_modules && rimraf node_modules

packages-build:	## Build all packages
	pnpm run packages-build

clean-artifacts:	## Clean dist (artifacts) in all packages
	pnpm run clean-artifacts

clean-cache:	## Clean all caches and into the root
	pnpm exec turbo run clean-cache

dedupe-deps:	## Dedupe deps in workspace
	pnpm dedupe

upgrade-deps:	##  Upgrade deps in workspace
	pnpm --recursive --interactive --latest update

upgrade-pnpm:	## Install or upgrade pnpm to last version
	curl -fsSL https://get.pnpm.io/install.sh | sh -

install-completion-pnpm:	## Install command line tab-completion
	pnpm install-completion zsh


##@ General

info:	## This command will output all the versions of packages that are installed
	pnpm list

packages-dev:	## This command will run all packages in watch mode
	pnpm run packages-dev

docs:	## Run documentation locally on http://localhost:4444
	pnpm run docs

docs-dev:	## Run documentation locally on dev mode http://localhost:4444
	pnpm run docs-dev

e2e:	## Run e2e codeceptjs locally on http://localhost:3333
	pnpm --filter e2e run e2e-test-ui


##@ Storybook - UI development

storybook: ## Run dev server of all storybook apps
	pnpm run storybook

storybook-build: ## Run production build of all storybook apps
	pnpm run storybook-build


##@ Code quality

prettier-fix:	## Launch prettier with format all files
	pnpm --recursive --parallel run prettier-fix

prettier-check:	## Launch prettier only check files. Without formating files
	pnpm run prettier-check

eslint-fix:	## Launch combine script for all fixing. That script must be contain the eslint --fix
	pnpm run eslint-fix

eslint-check:	## Launch eslint linting (with cache .eslintcache)
	pnpm run eslint-check

ts-check:	## Launch Typescript compilator with --check flag
	pnpm run ts-check

ts-report:	## Launch coverage report of type definition
	pnpm --recursive --parallel run ts-report

test:	## Launch all tests
	pnpm run test

test-watch:	## Launch all unit tests in watch mode
	pnpm --recursive --parallel run test-watch

test-report:	## Launch test-report script with jest --coverage
	pnpm --recursive --parallel run test-report

qa:	## Launch combine script with all testing scripts: from eslint to jest
	pnpm run qa

fix:	## Launch all possible fixes to pass qa command
	pnpm --recursive --parallel run fix
