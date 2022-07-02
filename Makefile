.PHONY: all build clean install watch zip
.NOTPARALLEL:

DIRS = dist/assets dist/config dist/layout dist/locales dist/sections dist/snippets dist/templates
LAST_TAG = $(shell git describe --tags)

ifeq ($(LAST_TAG),)
LAST_TAG=development
endif

build:
	npm run build

clean:
	rm -rf *.zip

install:
	npm install

lint:
	npm run lint

lint-fix:
	npm run lint:fix

watch:
	npm run watch

deploy:
	npm run deploy

zip: 
	npm run package