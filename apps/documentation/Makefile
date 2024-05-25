help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@ Setup (install and bootstrap)

clean-cache:	## Clean all caches
	pnpm run clean-cache

clean-artifacts:	## Clean dist (artifacts)
	pnpm run clean-artifacts


##@ Main

dev:	## Starts the development server
	pnpm run dev

build:	## Bundles your website into static files for production
	pnpm run build

serve:	## Serves the built website locally
	pnpm run serve

deploy:	## Publishes the website to GitHub pages
	pnpm run deploy


##@ Code quality

ts-check:	## Launch Typescript compilator with --check flag
	pnpm run ts-check

prettier-fix:	## Launch prettier with format all files
	pnpm run prettier-fix

prettier-check:	## Launch prettier only check files. Without formating files
	pnpm run prettier-check

qa:	## Launch combine script with all testing script: from typecheking to codestyle
	make prettier-check && make ts-check && echo ✅ Successfully!