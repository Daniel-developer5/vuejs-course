<template>
  <AddTodo @add-todo="addTodo" />
  <select v-model='filter'>
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="active">Active</option>
  </select>
  <Loader v-if="loading" />
  <TodoList
    v-else-if="filteredTodos.length"
    v-bind:todos="filteredTodos"
    @remove-todo="removeTodo"
  />
  <p v-else>No todos.</p>
  <router-link to='/'>Home</router-link>
</template>

<script>

import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all',
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json
        this.loading = false
      })
  },
  // watch: {
  //   filter(value) {

  //   },
  // },
  computed: {
    filteredTodos() {
      if (this.filter !== 'all') {
        return this.todos.filter(({ completed }) => this.filter === 'completed' ? completed : !completed)
      }

      return this.todos
    }
  },
  methods: {
    removeTodo(todoId) {
      this.todos = this.todos.filter(({ id }) => todoId !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
  },
  components: {
    AddTodo,
    TodoList,
    Loader
  },
}
</script>

