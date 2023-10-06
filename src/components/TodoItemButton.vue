<template>
  <button
    @click="handleClick(todo)"
    :class="textClass"
    v-show="!todo.isComplete"
  >
    <slot>Complete</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  handleClick(todo: { id: string; todo: string; isComplete: boolean }): void
  todo: { id: string; todo: string; isComplete: boolean };
  hideOnComplete: boolean;
  textClass: string;
}>()
</script>

<style scoped>

</style>