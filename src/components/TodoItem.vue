<template>
  <li class="flex space-between gap-2 mb-2" :class="{ done: todo.isComplete }" :id="todo.id">
    <span>{{ todo.todo }}</span>
    <div>
      <!-- <button @click="completeTodo(todo)">Complete</button> -->
      <TodoItemButton
        text-class="complete"
        :todo="todo"
        :handle-click="completeTodo"
        :hide-on-complete="true"
      >
        Complete Task
      </TodoItemButton>
    </div>
  </li>
</template>
<script setup lang="ts">
import TodoItemButton from './TodoItemButton.vue';

defineProps<{
  todo: { id: string; todo: string; isComplete: boolean };
  completeTodo(todo: { id: string; todo: string; isComplete: boolean }): void
}>()
</script>