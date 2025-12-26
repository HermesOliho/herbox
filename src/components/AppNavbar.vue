<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
      <!-- Ce bouton sera utilisé pour la barre latérale -->
      <button class="btn btn-square btn-ghost hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl">
        <AppLogo class="size-10" />
        <AppName />
      </RouterLink>
    </div>
    <div class="flex-none">
      <div class="flex">
        <ThemeChanger />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppLogo from './ui/AppLogo.vue'
import AppName from './ui/AppName.vue'
import ThemeChanger from './ui/ThemeChanger.vue'
</script>
