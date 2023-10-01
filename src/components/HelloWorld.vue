<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()
const descriptions = ref('')
const isVisible = ref(true)
const todos = [
  {
    id: '12387h-qweq',
    todo: 'Todo 1'
  },
  {
    id: '1qw3287h-qweq',
    todo: 'Todo 2'
  },
  {
    id: '12ssfq-2342a',
    todo: 'Todo 3'
  },
  {
    id: 'ppajih211-32adu23',
    todo: 'Todo 4'
  },
]
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="isVisible = !isVisible">Toggle</button>
    <input type="text" v-model="descriptions">
    <p v-show="isVisible">
      {{ descriptions }}
    </p>
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
