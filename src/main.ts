import { createApp } from "vue";
import { Quasar } from "quasar";

import "uno.css";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import { i18n, pinia, router, villus } from "./modules";
import App from "./App.vue";
import "./style.css";

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(villus)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount("#app");
