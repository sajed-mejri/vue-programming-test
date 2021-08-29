<template
  ><v-container
    ><table class="table">
      <tr>
        <th class="text-left">
          /
        </th>
        <th class="text-left">
          A
        </th>
        <th class="text-left">
          B
        </th>
        <component v-for="(col, index) in cols" :key="index" :is="col" />
      </tr>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.id }}</td>
        <td><input type="text" :value="item.name" /></td>
        <td>
          <input type="text" :value="item.calories" />
        </td>
        <component
          v-for="(row, index) in rows"
          :key="index"
          :is="row"
          v-on:keydown.tab="tabClicked($event.target)"
          @keydown.enter="enterClicked($event.target)"
        />
      </tr></table></v-container
></template>
<script>
// I tried to make this on TS but couldn't.. I need some time to figure out how Vuejs is behaving with TS dynamic templates, it seems that it's still not 100% supported

import { defineComponent } from "vue";
// const Comp = defineComponent({ template: `<td>Hello</td>` });
const Comp = () => (
  <td>
    <input type="text" />
  </td>
);
const Comp2 = (e) => <th>+</th>;

export default defineComponent({
  name: "Spreadsheet",
  components: {},
  created() {
    this.desserts.forEach(() => {
      this.counter++;
    });
    console.log(this.desserts);
  },
  data() {
    return {
      counter: 1,
      rows: [Comp],
      cols: [Comp2],
      desserts: [
        {
          id: 1,
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          id: 2,
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          id: 3,
          name: "Eclair",
          calories: 262,
        },
      ],
    };
  },
  methods: {
    tabClicked(elem) {
      this.rows.push(Comp);
      this.cols.push(Comp2);
      console.log("tab clicked");
      elem.focus();
    },
    enterClicked(elem) {
      this.desserts.push({ id: this.counter, name: "", calories: "" });
      console.log("enter clicked");
      this.counter++;
      elem.focus();
    },
  },
});
</script>
<style lang="scss">
.table {
  background: rgb(228, 228, 228);
  padding: 20px;
}
th {
  padding: 20px;
  background: rgb(190, 190, 190);
}
td {
  padding: 20px;
  background: rgb(245, 245, 245);
  input {
    &:focus {
      background: white;
      border: whitesmoke 1px solid;
      outline: none;
      transition: 0.8s ease;
    }
  }
}
</style>
