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
      <div class="hidden lg:flex gap-4">
        <RouterLink :to="{ name: 'home' }" class="link link-hover link-secondary">
          Accueil
        </RouterLink>
        <RouterLink to="#" class="link link-hover link-secondary"> Séries </RouterLink>
        <RouterLink to="#" class="link link-hover link-secondary"> Films </RouterLink>
        <RouterLink to="#" class="link link-hover link-secondary"> Ma liste </RouterLink>
      </div>
    </div>
    <!-- Partie droite -->
    <div class="flex-none flex gap-4 items-center">
      <div class="hidden lg:flex items-center gap-2">
        <button class="btn btn-square btn-ghost">
          <Search :size="20" />
        </button>
        <input
          type="search"
          placeholder="Rechercher..."
          class="input input-sm input-bordered hidden md:inline-block transition-all duration-300 ease-in-out focus:w-64"
        />
      </div>
      <!-- Lien de connexion & inscription -->
      <div v-if="!authStore.isAuthenticated()" class="hidden lg:flex gap-2">
        <RouterLink to="/login" class="btn btn-ghost btn-sm">Connexion</RouterLink>
        <RouterLink to="/register" class="btn btn-primary btn-sm">Inscription</RouterLink>
      </div>
      <!-- Affichage du nom de l'utilisateur connecté -->
      <div v-else class="hidden lg:flex items-center gap-2">
        <span class="font-medium">Bonjour, {{ authStore.user?.name }}</span>
        <RouterLink to="/logout" class="btn btn-ghost btn-sm">Déconnexion</RouterLink>
      </div>
      <!-- Changement de thème -->
      <div class="hidden lg:flex">
        <ThemeChanger />
      </div>
      <!-- Menu de l'utilisateur -->
      <button
        class="btn btn-ghost btn-circle"
        popovertarget="userMenu"
        style="anchor-name: userMenuAnchor"
        v-if="authStore.isAuthenticated()"
      >
        <User :size="24" />
      </button>
      <ul
        class="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm"
        popover
        id="userMenu"
        style="position-anchor: userMenuAnchor"
        v-if="authStore.isAuthenticated()"
      >
        <li><RouterLink to="#">Profil</RouterLink></li>
        <li><RouterLink to="#">Paramètres</RouterLink></li>
        <div class="divider"></div>
        <li><RouterLink to="/logout" class="text-error">Déconnexion</RouterLink></li>
      </ul>
      <!-- Navigation sur petits & moyens écrans -->
      <button
        class="btn btn-square lg:hidden btn-ghost"
        popovertarget="smScreensMenu"
        style="anchor-name: smScreensMenuAnchor"
      >
        <MenuIcon :size="24" />
      </button>
      <ul
        class="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm lg:hidden"
        popover
        id="smScreensMenu"
        style="position-anchor: smScreensMenuAnchor"
      >
        <li><RouterLink :to="{ name: 'home' }">Accueil</RouterLink></li>
        <li><RouterLink to="#">Séries</RouterLink></li>
        <li><RouterLink to="#">Films</RouterLink></li>
        <li><RouterLink to="#">Ma liste</RouterLink></li>
        <div class="divider"></div>
        <li v-if="!authStore.isAuthenticated()">
          <RouterLink to="/login">Connexion</RouterLink>
        </li>
        <li v-if="!authStore.isAuthenticated()">
          <RouterLink to="/register">Inscription</RouterLink>
        </li>
        <li v-else>
          <RouterLink to="/logout">Déconnexion</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Menu, MenuIcon, Search, User } from 'lucide-vue-next'
import AppLogo from './ui/AppLogo.vue'
import AppName from './ui/AppName.vue'
import ThemeChanger from './ui/ThemeChanger.vue'
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
  console.log(authStore.isAuthenticated())
})
</script>
