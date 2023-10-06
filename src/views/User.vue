<template>
  <h1>
    User {{ route.params }} {{ route.query }}
  </h1>
  <router-link to="/users/jipson/profile">Go to profile</router-link>
  <br>
  <router-link to="/users/jipson/configuration">Go to configurations</router-link>
  <router-view />
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>

<style scoped>

</style>