<script setup lang="ts">
import { ref } from 'vue'
import Todo from './Todo.vue';

defineProps<{
  msg: string
}>()
const descriptions = ref('')
const isVisible = ref(true)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="isVisible = !isVisible">Toggle</button>
    <input type="text" v-model="descriptions">
    <p v-show="isVisible">
      {{ descriptions }}
    </p>
    <Todo />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
