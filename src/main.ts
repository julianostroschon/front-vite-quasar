import { createApp, watch } from "vue";
import { Quasar } from "quasar";

import { i18n, pinia, router, villus } from "./modules";
import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import "./style.css";
import "uno.css";
// watch(
//   pinia.state,
//   (state) => {
//     localStorage.setItem("users", JSON.stringify(state.profile));
//   },
//   { deep: true }
//   );

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(villus)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount("#app");
