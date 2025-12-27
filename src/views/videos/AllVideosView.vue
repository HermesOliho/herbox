<script setup lang="ts">
import AppName from '@/components/ui/AppName.vue'
import VideoCard from '@/components/videos/VideoCard.vue'
import { fetchAllVideos } from '@/services/videoService'
import type { Movie } from '@/types/video'
import { onMounted, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const videos: Ref<Movie[]> = ref([])
const router = useRouter()

const navigateToWatchPage = (slug: string) => {
  router.push({ name: 'watch-movie', params: { slug } })
}

onMounted(async () => {
  try {
    // Récuperer les vidéos depuis l'API en utilisant le service
    videos.value = await fetchAllVideos()
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos :', error)
  }
})
</script>

<template>
  <!-- Hero section -->
  <section class="px-4 py-8 text-center bg-base-200">
    <h1 class="text-3xl text-base-content font-medium mb-4">Bienvenue sur <AppName /></h1>
    <p class="text-base text-secondary max-w-2xl mx-auto">
      La plateforme de streaming qui fait vous fait voyager dans les mondes de vos rêves
    </p>
  </section>
  <!-- La grille des vidéos -->
  <section class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <VideoCard
        v-for="video in videos"
        :key="video.id"
        :video="video"
        @watch-video="navigateToWatchPage"
      />
    </div>
  </section>
</template>
