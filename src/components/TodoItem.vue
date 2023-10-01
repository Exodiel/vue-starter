<template>
  <li :id="todo.id">
    {{ todo.todo }}
  </li>
</template>
<script setup lang="ts">
defineProps<{
  todo: { id: string; todo: string }
}>()
</script>