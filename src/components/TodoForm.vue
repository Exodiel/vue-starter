<template>
  <div>
    <input type="text" v-model="inputText" @keyup.enter="addTodo">
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const emit = defineEmits(['textChange'])

  const inputText = ref("")
  const addTodo = () => {
    emit('textChange', inputText.value)
    inputText.value = ""
  }
</script>

<style scoped>

</style>