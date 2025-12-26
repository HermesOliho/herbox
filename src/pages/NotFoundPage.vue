<script setup lang="ts">
import image404 from '@/assets/images/404-illustration.png'
</script>

<template>
  <section class="flex flex-col items-center justify-center h-screen text-center px-4">
    <img :src="image404" alt="Page not found" class="mb-4 w-96 h-64 object-contain" />
    <!-- <h1 class="text-6xl font-bold mb-4">404</h1> -->
    <p class="text-xl mb-8">Désolé, la page que vous recherchez est introuvable.</p>
    <RouterLink to="/" class="btn btn-primary"> Retour à l'accueil </RouterLink>
  </section>
</template>
<style scoped></style>
