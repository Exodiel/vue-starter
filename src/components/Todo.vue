
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
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';
import useTodoStore from '../store/useTodoStore'

const {
  todos,
  sizeTodos,
  completeTodo,
  addTodo
} = useTodoStore()
</script>