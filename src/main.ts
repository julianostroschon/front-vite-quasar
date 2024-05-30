import { createApp } from "vue";
import { Quasar } from "quasar";

import { i18n, pinia, router, villus } from "./modules";
import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import "./assets/global.css";
import "./style.css";
import "uno.css";

const plugins = [Quasar, villus, router, pinia, i18n];

const app = createApp(App);
for (const plugin of plugins) {
  app.use(plugin);
}
app.mount("#app");
