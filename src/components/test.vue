<template lang="">
  <div>
    <button type="button" @click="add">Add Component</button>
    <component
      v-for="(component, index) in components"
      :key="index"
      :is="component"
    />
  </div>
</template>
<script>
import { shallowRef, ref, computed, defineComponent } from "vue";
const Comp = () => <h1>Hello world</h1>;

export default defineComponent({
  data() {
    return {
      components: [Comp],
    };
  },

  methods: {
    add() {
      this.components.push(Comp);
      console.log("wfff");
    },
  },
});
</script>
<style lang="scss">
.color {
  color: red;
}
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>
