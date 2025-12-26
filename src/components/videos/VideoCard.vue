<template>
  <div class="card bg-base-100 w-full shadow-sm">
    <figure>
      <img :src="video.posterUrl" :alt="video.title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <RouterLink :to="`/videos/${video.slug}`">{{ video.title }}</RouterLink>
      </h2>
      <p class="line-clamp-3 text-sm text-secondary-content mb-4">{{ video.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in video.tags"
          :key="tag"
          class="bg-primary text-primary-content px-2 py-1 rounded-full text-xs"
        >
          {{ tag }}
        </span>
      </div>
      <div class="card-actions justify-end">
        <div class="tooltip" data-tip="Ajouter à la liste de lecture">
          <button class="btn btn-sm btn-secondary">
            <PlusCircle :size="16" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '@/types/video'
import { PlusCircle } from 'lucide-vue-next'

defineProps<{
  video: Video
}>()
</script>
