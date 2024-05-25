help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@ Main - development

dev-ui:	## Dev-server for frontend
	yarn run dev-ui

clean-cache:	## Clean all caches
	yarn run clean-cache

clean-artifacts:	## Clean dist (artifacts)
	yarn run clean-artifacts

build-prod:	## Create production build
	yarn run build

preview-website:	## Preview production build (website)
	yarn run preview-website

preview-mobile:	## Preview production build (mobile)
	yarn run preview-mobile

generate-svg-sprite:	## Generate svg sprite in the ./src/shared/ui/atoms/svg-icons/
	yarn run generate-svg-sprite


##@ Storybook - UI development

storybook: ## Run dev server of storybooks
	yarn run storybook

storybook-build: ## Run production build of storybooks
	yarn run storybook-build


##@ Mobile app

sync:	## Sync artifacts to Capasitor. Second step.
	yarn run sync

sdk-ios:	## Run ios application. Last step.
	yarn run ios

sdk-android:	## Run android application. Last step.
	yarn run android
	
env-set-mobile:	## Set up env in client UI for mobile building
	yarn run env-set-mobile

env-set-web:	## Restore env in client UI after mobile building to web developemnt
	yarn run env-set-web


##@ Code quality

prettier-fix:	## Launch prettier with format all files
	yarn run prettier-fix

prettier-check:	## Launch prettier only check files. Without formating files
	yarn run prettier-check

eslint-check:	## Launch eslint linting (with cache .eslintcache)
	yarn run eslint-check

eslint-fix:	## Launch combine script for all fixing. That script must be contain the eslint --fix
	yarn run eslint-fix

ts-check:	## Launch Typescript compilator with --check flag
	yarn run ts-check

ts-report:	## Launch coverage report of type definition
	yarn run ts-report

test:	## Launch all tests
	yarn run test

test-watch:	## Launch all unit tests in watch mode
	yarn run test-watch

test-report:	## Launch test-report script with jest --coverage
	yarn run test-report

qa:	## Launch combine script with all testing scripts: from eslint to jest
	yarn run qa

fix:	## Launch all possible fixes to pass qa command
	yarn run fix
