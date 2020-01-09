<template>
  <div>
    <div v-if="todos">
      <ul v-if="todos.length > 0">
        <template v-for="(todo, index) in todos">
          <li :key="todo.id" v-if="index !== 5">{{ index + 1 }}: {{ todo.title }}</li>
        </template>
      </ul>
      <p v-else>
        No Data for Todos
      </p>
    </div>
    <div v-else>
      <p>Loading</p>
    </div>

    <Chart />
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  name: "Todos",

  components: {
    Chart
  },

  beforeMount: function() {
    this.getTodos();
  },

  data: () => ({
    todos: null,
    todo: "GG"
  }),

  methods: {
    getTodos() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          this.todos = response.data;
        })
        .catch(() => {
          this.todos = [];
        });
    }
  }
};
</script>

<style lang="sass">
$border-color: #000

ul
  list-style-type: none
  padding: 0
  margin: 0
  
  li
    padding: 10px
    border-top: 1px solid $border-color
    border-left: 1px solid $border-color
    border-right: 1px solid $border-color

  li:last-child
    border-bottom: 1px solid $border-color
</style>
