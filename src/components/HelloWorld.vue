<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()
const descriptions = ref('')
const isVisible = ref(true)
const newTask = ref('')
const todos = ref([
  {
    id: crypto.randomUUID(),
    todo: 'Todo 1'
  },
  {
    id: crypto.randomUUID(),
    todo: 'Todo 2'
  },
  {
    id: crypto.randomUUID(),
    todo: 'Todo 3'
  },
  {
    id: crypto.randomUUID(),
    todo: 'Todo 4'
  },
])
const addTodo = () => {
  todos.value.push({
    id: crypto.randomUUID(),
    todo: newTask.value
  })
  newTask.value = ''
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="isVisible = !isVisible">Toggle</button>
    <input type="text" v-model="descriptions">
    <p v-show="isVisible">
      {{ descriptions }}
    </p>
    <input type="text" v-model="newTask" @keyup.enter="addTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.todo }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
