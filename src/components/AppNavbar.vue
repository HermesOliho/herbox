<template>
  <div class="navbar bg-base-100 shadow-sm">
    <!-- Partie gauche -->
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
    <!-- Partie centrale -->
    <div class="flex-1 flex gap-6 items-center">
      <!-- Logo et nom de l'application -->
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl">
        <AppLogo class="size-10" />
        <AppName />
      </RouterLink>
      <!-- Liens rapides -->
      <div class="flex gap-4">
        <RouterLink to="#" class="link link-hover link-secondary"> Accueil </RouterLink>
        <RouterLink to="#" class="link link-hover link-secondary"> Séries </RouterLink>
        <RouterLink to="#" class="link link-hover link-secondary"> Films </RouterLink>
        <RouterLink to="#" class="link link-hover link-secondary"> Ma liste </RouterLink>
      </div>
    </div>
    <!-- Partie droite -->
    <div class="flex-none flex gap-4 items-center">
      <div class="flex items-center gap-2">
        <button class="btn btn-square btn-ghost">
          <Search :size="20" />
        </button>
        <input
          type="search"
          placeholder="Rechercher..."
          class="input input-sm input-bordered hidden md:inline-block transition-all duration-300 ease-in-out focus:w-64"
        />
      </div>
      <div class="flex">
        <ThemeChanger />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import AppLogo from './ui/AppLogo.vue'
import AppName from './ui/AppName.vue'
import ThemeChanger from './ui/ThemeChanger.vue'
</script>
