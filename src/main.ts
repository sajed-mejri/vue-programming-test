import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import JsonViewer from "vue3-json-viewer";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(JsonViewer)
  .use(vuetify)
  .use(router)
  .mount("#app");

const routes = [];
