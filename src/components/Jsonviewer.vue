<template lang="">
  <v-container>
    <div>
      <label for="myfile">Select a JSON file:</label>
      <input
        type="file"
        id="myfile"
        name="myfile"
        @change="processFile($event)"
      />
    </div>
    <br />
    The loading of {{ fileName }} doesn't work propery.. I could fix it but I
    don't want to loose much time.
    <json-viewer :value="jsonData" copyable boxed sort v-bind="jsonData" />
  </v-container>
</template>
<script lang="ts">
// So after a long time looking on the internet.. I finally came across a json viewer which is supported by Vue3. Now while it is working, there is no need to implement it from scratch

import { defineComponent } from "vue";
import MY_JSON from "../json/data.json";

export default defineComponent({
  data() {
    return {
      fileName: "",
      jsonData: MY_JSON,
    };
  },
  methods: {
    processFile(event: { target: { files: any[] } }) {
      this.fileName = event.target.files[0].name;
      this.jsonData = event.target.files[0];
    },
  },
});
</script>
<style lang=""></style>
