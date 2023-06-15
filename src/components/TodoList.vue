<template>
  <div>
    <ul class="todo-list">
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-bind:key="todo.id"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>

import TodoItem from '@/components/TodoItem.vue'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    },
  }
}

</script>

<style lang="scss" scoped>
  .todo-list {
    margin: 0;
    padding: 16px;
    display: grid;
    gap: 12px;
    list-style: none;
  }
</style>
