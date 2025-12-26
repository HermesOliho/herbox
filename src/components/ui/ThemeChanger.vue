<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'

const isDarkMode: Ref<boolean> = ref(false)

const changeDocumentTheme = () => {
  localStorage.setItem('appTheme', isDarkMode.value ? 'dark' : 'light')
  document.documentElement.classList.remove(isDarkMode.value ? 'light' : 'dark')
  document.documentElement.classList.add(isDarkMode.value ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
}

const switchDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  changeDocumentTheme()
}

onMounted(() => {
  const currentTheme = localStorage.getItem('appTheme')
  if (currentTheme === 'dark') {
    isDarkMode.value = true
    changeDocumentTheme()
  } else {
    isDarkMode.value = false
    changeDocumentTheme()
  }
})
</script>

<template>
  <input
    type="checkbox"
    value="synthwave"
    class="toggle theme-controller"
    @change="switchDarkMode"
  />
</template>
