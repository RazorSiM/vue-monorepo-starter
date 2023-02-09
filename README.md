# Vue Monorepo Starter

> A Vue.js monorepo starter with Turbo, PNPM Workspaces, Cypress, and Vue 3

This is my personal monorepo starter for Vue.js projects. It uses PNPM workspaces to manage dependencies, Turbo to orchestrate the project and Lefthook to spin a very light pre-commit hook. It also includes Cypress for end-to-end and component testing.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Spin it up

The project is set up to use PNPM workspaces. You can install dependencies with `pnpm install` and run the project with `pnpm dev`. This command will start the development server for the Vue SPA app and for the UI library.

You can look at `turbo.json` and the root `package.json` to see what commands are available.

TLDR: to build the project, you can run `pnpm build`. It will: run the linter, run the tests and build everything.

## Project Structure

The project is structured as follows:

- `apps` folder for your apps;
- `packages` folder for your libraries, utilities and global dependencies;

## Contribute

If you have any suggestions, feel free to open an issue or a PR! I'm always open to feedbacks and willing to improve 🫡
