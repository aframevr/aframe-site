all: update deploy syncdocs

deploy:
	rm db.json
	npm run generate
	npm run deploy

update:
	cd ../aframe && \
		git checkout dist/ && \
		git checkout master && \
		npm run dist && \
		git checkout dist/ && \
	cp ../aframe/dist/aframe* themes/aframe/source/js/.
	npm run update

syncdocs:
	npm run syncdocs
