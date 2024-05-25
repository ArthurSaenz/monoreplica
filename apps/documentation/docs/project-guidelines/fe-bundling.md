---
id: fe-bundling
---

# FE bundling (isomorphic applications)

There are two independent process for bundling frontend application for web and mobile:

1. [vike](https://vike.dev/) (SSG-mode, prerender)
2. [vite](https://github.com/vitejs/vite) (clear SPA-mode)

First option is usage for deployment for website.

Second option is usage for `Capacitor` mobile application bundling.

> Be carefully! Each bundling use the different router. SPA mode uses the react-router-dom.

Also, there are difference for entry points of bundling:

1. Web: `apps/website/src/renderer` folder.
2. Mobile: `apps/website/src/renderer-spa` + `apps/website/src/index.html`.

In codebase we define specific variable for define BL handling. Try found `isMobileApp`. Only in mobile part of codes we can use `@capasitor/core` package.
