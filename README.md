# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

## Directory functions

- [.husky] Contains pre-commit script
- [.storybook] Contains config of storybook(`Frontend documentation`)
- [.vscode] Contains config of vscode
- [locales] Contains translation messages
- [public] Contains files to be served by Vite
- [src] Contains application on development version
  --- [assets] This is for brand assets like logos, fonts or anything that is client-specific. Assets makes it easy to find a logo or font for the next project with that client.
  --- [components] This is for all vue components, everyone to be here, will be injected in app context, and it can be used without importation in another components
  --- [helpers] here, we can inject functions to use in all application, without importation
  --- [modules] This is for set all modules to be injected in application construction
  --- [stores] This is put all storage to use in application
  --- [stories] To define all `stories`, to document all components vue
  --- [views] To define all routes avaliable in application, in this way we can define a path, and this path will be accepted like a avaliable route
