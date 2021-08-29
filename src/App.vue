<template>
  <!-- <Spreadsheet /> -->
  <!-- <JViewer /> -->
  <Mediaconverter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Spreadsheet from "./components/Spreadsheet.vue";
// import JViewer from "./components/Jsonviewer.vue";
import Mediaconverter from "./components/Mediaconverter.vue";

export default defineComponent({
  name: "App",

  components: {
    // Spreadsheet,
    Mediaconverter,
    // JViewer,
  },

  data() {
    return {
      //
    };
  },
});
</script>
