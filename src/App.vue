<template>
  <div id="nav">
    <router-link class="styled" :to="{ name: 'Spreadsheet' }"
      >sheet</router-link
    >
    |
    <router-link class="styled" :to="{ name: 'Mediaconverter' }"
      >Media</router-link
    >
    <router-link class="styled" :to="{ name: 'Jsonviewer' }">Json</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Spreadsheet from "./components/Spreadsheet.vue";
// import JViewer from "./components/Jsonviewer.vue";
// import Mediaconverter from "./components/Mediaconverter.vue";

export default defineComponent({
  name: "App",

  components: {
    // Spreadsheet,
    // Mediaconverter,
    // JViewer,
  },

  data() {
    return {
      //
    };
  },
});
</script>
<style lang="scss">
#nav {
  background: rgb(22, 22, 22);
  color: white;
  padding-left: 50px;
  .styled {
    color: white;
    padding-right: 20px;
    font-family: "lato";
    font-size: 50px;
    transition: 0.3s ease-in;

    &:hover {
      color: rgb(168, 168, 168);
      transition: 0.3s ease-out;
      font-size: 80px;
    }
  }
}
</style>
