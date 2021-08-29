<template>
  <div class="main">
    <v-container class="wrapper">
      <video class="video" :src="video" controls />
      <br />
      <button @click="transcode" class="button">
        Start
      </button>
      <h3 class="pt-5 text-center">{{ message }}</h3>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export default defineComponent({
  setup() {
    // app state
    const ffmpeg = createFFmpeg({
      log: true,
    });
    const message = ref("Click Start to Transcode");
    let video = ref(null);
    const file =
      process.env.NODE_ENV === "production"
        ? "/vue-app/flame.avi"
        : "/flame.avi";
    // methods
    async function transcode() {
      message.value = "Loading ffmeg-core.js";
      await ffmpeg.load();
      message.value = "Start transcoding";
      ffmpeg.FS("writeFile", "test.avi", await fetchFile(file));
      await ffmpeg.run("-i", "test.avi", "test.mp4");
      message.value = "Complete transcoding";
      const data = ffmpeg.FS("readFile", "test.mp4");
      video.value = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
    }
    return {
      video,
      message,
      transcode,
    };
  },
});
</script>

// some quick scss skills
<style lang="scss">
.main {
  border-radius: 30% 70% 70% 30% / 30% 58% 42% 70%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 100vh;
  width: 60%;
  max-width: 1200px;
  margin: 0 auto;
  .wrapper {
    padding-top: 200px !important;
    width: 100vh;
    margin: 0 auto;
    .video {
      width: 100%;
    }
    .button {
      margin: 0 auto;
      border-radius: 20px;
      background: black;
      width: 100%;
      padding: 2% 0 2% 0;
      font-weight: bold;
      color: white;
      transition: 2s ease-in-out;
      &:hover {
        border-radius: 30% 70% 70% 30% / 30% 21% 79% 70%;
        background: rgba(34, 1, 110, 0.418);
        transition: 2s ease-in-out;
      }
    }
  }
}
</style>
