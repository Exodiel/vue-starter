
<template >
  <div>
    {{ sizeTodos }}
    <TodoForm @text-change="addTodo" />
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
import { ref, computed, Ref } from 'vue'
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';
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
const addTodo = ({ inputText }: { inputText: Ref<string> }) => {
  todos.value.push({
    id: crypto.randomUUID(),
    todo: inputText.value
  })
}
const sizeTodos = computed(() => todos.value.length)
</script>