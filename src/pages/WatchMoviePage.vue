<script setup lang="ts">
import { fetchVideoBySlug } from '@/services/videoService'
import type { Movie } from '@/types/video'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieSlug = route.params.slug as string
const movie: Ref<Movie | null> = ref(null)

onMounted(async () => {
  // Simuler une requête API pour récupérer les détails du film
  // Remplacez cette partie par une vraie requête API
  try {
    movie.value = await fetchVideoBySlug(movieSlug)
  } catch (error) {
    console.error('Erreur lors de la récupération du film :', error)
  }
})
</script>

<template>
  <!-- Le lecteur vidéo -->
  <section v-if="movie" class="w-full bg-black flex items-center justify-center">
    <div class="container max-w-4xl aspect-video">
      <video
        :src="movie.videoUrl"
        :poster="movie.posterUrl"
        controls
        autoplay
        class="w-full h-full object-contain"
      ></video>
    </div>
  </section>
  <section v-else class="w-full h-screen flex items-center justify-center">
    <p class="text-base-content">Chargement du film...</p>
  </section>
  <!-- Les infos et actions sur le film -->
  <section v-if="movie" class="p-4 bg-base-200">
    <div class="container max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold uppercase mb-2">{{ movie.title }}</h1>
      <p class="text-secondary mb-4">{{ movie.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in movie.tags"
          :key="tag"
          class="bg-primary text-primary-content px-2 py-1 rounded-full text-xs"
        >
          {{ tag }}
        </span>
      </div>
      <div class="flex gap-4">
        <button class="btn btn-primary">Ajouter à ma liste</button>
        <button class="btn btn-outlinebtn-secondary">Partager</button>
        <button class="btn btn-outlinebtn-secondary">Aimer</button>
      </div>
    </div>
  </section>
</template>
