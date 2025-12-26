<script setup lang="ts">
import '@/assets/css/index.css'
import ThemeChanger from './components/ui/ThemeChanger.vue'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <div id="app" class="min-h-screen w-full overflow-x-hidden bg-base-200 text-base-content">
    <AppNavbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
