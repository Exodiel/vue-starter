<template>
  <div>
    <h1>About</h1>
  </div>
</template>
<script setup lang="ts">
  import { onBeforeRouteLeave } from 'vue-router'

  onBeforeRouteLeave(() => {
    console.log('Leaving path about')
  })
</script>