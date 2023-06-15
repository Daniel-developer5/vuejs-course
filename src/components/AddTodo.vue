<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" type="text" placeholder="Enter todo..." />
    <button>Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    },
  },
}
</script>