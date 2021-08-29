<template>
  <!-- <Spreadsheet /> -->
  <JViewer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Spreadsheet from "./components/Spreadsheet.vue";
import JViewer from "./components/Jsonviewer.vue";

export default defineComponent({
  name: "App",

  components: {
    // Spreadsheet,
    JViewer,
    // test,
  },

  data() {
    return {
      //
    };
  },
});
</script>
