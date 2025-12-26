import type { Video } from '@/types/video'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const usePlayerStore = defineStore(
  'player',
  () => {
    // States
    const currentVideo: Ref<Video | null> = ref(null)
    const isPlaying: Ref<boolean> = ref(false)
    const currentTime: Ref<number> = ref(0)
    const isMiniPlayer: Ref<boolean> = ref(false)
    const queue: Ref<Video[]> = ref([])

    // Actions
    const playVideo = (video: Video) => {
      currentVideo.value = video
      isPlaying.value = true
    }
    const togglePlay = () => {
      isPlaying.value = !isPlaying.value
    }
    const updateProgress = (time: number) => {
      currentTime.value = time
    }

    return {
      currentVideo,
      isPlaying,
      currentTime,
      isMiniPlayer,
      queue,
      playVideo,
      togglePlay,
      updateProgress,
    }
  },
  { persist: true },
)
