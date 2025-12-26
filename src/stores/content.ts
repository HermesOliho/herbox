import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const search: Ref<string | null> = ref(null)

  const getSearch = () => search.value
  const clearSearch = () => {
    search.value = null
  }

  return { search, getSearch, clearSearch }
})
