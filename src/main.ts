import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(vuetify)
  .mount("#app");
