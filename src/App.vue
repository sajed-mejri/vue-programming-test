<template>
  <Spreadsheet />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Spreadsheet from "./components/Spreadsheet.vue";
// import test from "./components/test.vue";

export default defineComponent({
  name: "App",

  components: {
    Spreadsheet,
    // test,
  },

  data() {
    return {
      //
    };
  },
});
</script>
