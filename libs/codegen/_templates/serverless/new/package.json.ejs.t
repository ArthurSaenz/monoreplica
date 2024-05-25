---
to: <%= pathname %>/package.json
---
{
  "name": "<%= name %>",
  "description": "Serverless function",
  "private": true,
  "version": "0.1.0",
  "main": "handler.js",
  "files": [
    "dist",
    "package.json",
    "README.md"
  ],
  "scripts": {
    "clean": "pnpm clean",
    "eslint": "pnpm eslint --cache ./src",
    "stylelint": "pnpm stylelint",
    "lint": "yarn eslint && yarn stylelint",
    "qa": "yarn ts-check && yarn lint && yarn test-silent && yarn codestyle",
    "codestyle": "pnpm codestyle",
    "format": "pnpm format",
    "fix": "yarn eslint --fix && yarn stylelint --fix",
    "test": "pnpm test",
    "test-silent": "pnpm test-silent",
    "test-report": "pnpm test-report",
    "ts-check": "pnpm ts-check",
    "ts-report": "pnpm ts-report",
  },
  "devDependencies": {
    "esbuild": "^0.14.25",
    "serverless-esbuild": "^1.25.0"
  },
  "engines": {
    "node": ">=20.x"
  }
}
