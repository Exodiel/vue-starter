
<template >
  <div>
    {{ sizeTodos }}
    <input type="text" v-model="newTask" @keyup.enter="addTodo">
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import TodoItem from './TodoItem.vue';
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
const sizeTodos = computed(() => todos.value.length)
</script>