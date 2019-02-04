<template>
  <div class="home">
    <form v-on:submit="addTodo">
      <input type="text" placeholder="Add todo" @change="handleTodo" />
      <input type="button" value="Add Todo" class="btn" v-on:click="addTodo" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo() {
      
    },
    handleTodo(e) {
      console.log(e.target.value)
    }
  }
}
</script>

