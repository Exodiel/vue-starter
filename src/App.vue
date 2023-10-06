<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const goToURL = (url: string) => {
    router.push(url)
  }
</script>

<template>
  <div class="card">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="flex space-evenly">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to Login</router-link>
    <router-link to="/about">Go to About</router-link>
    <button @click="goToURL('/users/jipson')">Go to User</button>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
