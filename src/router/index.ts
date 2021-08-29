import { createWebHistory, createRouter } from "vue-router";
//router
import Jsonviewer from "../components/Jsonviewer.vue";
import Mediaconverter from "../components/Mediaconverter.vue";
import Spreadsheet from "../components/Spreadsheet.vue";

const routes = [
  { name: "Jsonviewer", path: "/jsonviewer", component: Jsonviewer },
  {
    name: "Mediaconverter",
    path: "/mediaconverter",
    component: Mediaconverter,
  },
  { name: "Spreadsheet", path: "/spreadsheet", component: Spreadsheet },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
