dev-client:
	cd client && npm run watch

compile-assets:
	cd client && npm run build

compile-assets-dev:
	cd client && npm run build-dev

run-server:
	cd server && npm run server

dev: compile-assets-dev run-server
