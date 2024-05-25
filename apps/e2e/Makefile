help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@ Setup (install and bootstrap)

clean:	## Clean artifacts (screenshots) folder
	rm -rf output


##@ Main

test: 	## Run CodeceptJS all test suites
	pnpm run e2e-test

test-dev: 	## Run CodeceptJS all test suites with selections
	pnpm run e2e-test-dev

test-headless: 	## Run CodeceptJS all test suites with headless chrome
	pnpm run e2e-test-headless

test-ui: 	## Run CodeceptJS UI Dashboard
	pnpm run e2e-test-ui

test-demo: 	## Run (examples) CodeceptJS all DEMO test suites
	pnpm run e2e-test-demo

test-demo-headless: 	## Run (examples) CodeceptJS all DEMO test suites with headless chrome
	pnpm run e2e-test-demo-headless

test-demo-ui: 	## Run (examples) CodeceptJS UI Dashboard with demo tests
	pnpm run e2e-test-demo-ui


##@ Code generate (https://codecept.io/commands/#generators)

generate-helper: 	## Generate Helper https://codecept.io/helpers/#extending-codeceptjs-with-custom-helpers
	pnpm run codeceptjs generate-helper

generate-fragment: 	## Generate PageFragments https://codecept.io/pageobjects/#page-fragments
	pnpm run generate-fragment

generate-pageObject: 	## Generate PageObject https://codecept.io/pageobjects/#pageobject https://codecept.io/best/#page-objects
	pnpm run generate-pageObject


##@ Info

info-list:	## Prints all available methods of I to console
	pnpm run info-list


##@ Code quality

ts-check:	## Launch Typescript compilator with --check flag
	pnpm run ts-check

prettier-fix:	## Launch prettier with format all files
	pnpm run prettier-fix

prettier-check:	## Launch prettier only check files. Without formating files
	pnpm run prettier-check

qa:	## Launch combine script with all testing script: from typecheking to codestyle
	make codestyle && make ts-check && echo ✅ Successfully!