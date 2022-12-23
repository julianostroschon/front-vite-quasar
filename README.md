# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/views)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🌍 [I18n ready](./locales)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🦾 TypeScript, of course

## Directories

|- `.husky/` Contains pre-commit script <br />
|- `.storybook/` Contains config of storybook(`Frontend documentation`) <br />
|- `.vscode/` Contains config of vscode <br />
|- `locales/` Contains translation messages <br />
|- `public/` Contains files to be served by Vite <br />
|- `src/` Contains application on development version <br />
|--- `./src/assets/` This is for brand assets like logos, fonts or anything that is client-specific. Assets makes it easy to find a logo or font for the next project with that client <br />
|--- `./src/components/` This is for all vue components, everyone to be here, will be injected in app context, and it can be used without importation in another components <br />
|--- `./src/helpers/` here, we can inject functions to use in all application, without importation <br />
|--- `./src/modules/index.ts` This is for set all modules to be injected in application construction <br />

<!-- |--- `./src/modules/i18n.ts` -> configuration of `i18n` translation package
|--- `./src/modules/pinia.ts` -> configuration of `Pinia Store`
|--- `./src/modules/router.ts` -> configuration of `router` from `vue-router`
|--- `./src/modules/villus.ts` -> configuration of the graphql client `villus` -->

|--- `./src/stores/` This is put all storage to use in application <br />
|--- `./src/stories/` To define all `stories`, to document all components vue <br />
|--- `./src/views/` To define all routes avaliable in application, in this way we can define a path, and this path will be accepted like a avaliable route <br />
