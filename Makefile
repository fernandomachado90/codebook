.SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help:
	$(info available commands:)
	$(info -> setup                  installs dependencies)
	$(info -> format                 formats source code)
	$(info -> build                  builds deployable version)
	$(info -> test                   runs available tests)
	$(info -> run                    starts application locally)
	$(info -> publish                publishes changes to GitHub Pages)

.PHONY: setup
setup:
	npm install

.PHONY: format
format:
	npm run format

.PHONY: build
build:
	npm run build

.PHONY: test
test:
	npm test

.PHONY: run
run:
	npm start

.PHONY: publish
publish:
	npm run deploy
