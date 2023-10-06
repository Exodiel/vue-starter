
<template >
  <div>
    {{ sizeTodos }}
    <TodoForm @text-change="addTodo" />
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :complete-todo="completeTodo"
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
    todo: 'Todo 1',
    isComplete: false
  },
  {
    id: crypto.randomUUID(),
    todo: 'Todo 2',
    isComplete: false
  },
  {
    id: crypto.randomUUID(),
    todo: 'Todo 3',
    isComplete: false
  },
  {
    id: crypto.randomUUID(),
    todo: 'Todo 4',
    isComplete: false
  },
])
const addTodo = ({ inputText }: { inputText: Ref<string> }) => {
  todos.value.push({
    id: crypto.randomUUID(),
    todo: inputText.value,
    isComplete: false
  })
}
const sizeTodos = computed(() => todos.value.length)
const completeTodo = (todo: { id: string; todo: string; isComplete: boolean }) => {
  todo.isComplete = !todo.isComplete
}
</script>