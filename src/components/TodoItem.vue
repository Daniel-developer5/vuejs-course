<template>
  <li class="todo-item">
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        v-on:change="todo.completed = !todo.completed"
        v-bind:checked="todo.completed"
      >
      <strong>{{ index + 1 }}</strong>
      {{ uppercase }}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    uppercase() {
      return this.todo.title.toUpperCase()
    }
  },
}

</script>

<style lang="scss" scoped>
  .todo-item {
    .done {
      text-decoration: line-through;
    }
  }
</style>
