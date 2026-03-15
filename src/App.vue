<script setup lang="ts">
const title = 'Palm Island'
const subtitle = 'Vue 3 + TypeScript + Vite starter'
</script>

<template>
  <main class="container">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </main>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

p {
  margin-top: 0.75rem;
  color: #4a5568;
}
</style>
