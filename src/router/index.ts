import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // La page d'accueil
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    // La page pour visionner une vidéo
    {
      path: '/movies/:slug',
      name: 'watch-movie',
      component: () => import('@/pages/WatchMoviePage.vue'),
    },
    // ----- Authentication -----
    // La page de connexion
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/LoginPage.vue'),
    },
    // La page d'inscription
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/auth/RegisterPage.vue'),
    },
    // ----- User Profile -----
    // La page de profil utilisateur
    // ######### A IMPLEMENTER #########
    // ----- Error Pages -----
    // La page d'erreur 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
})

export default router
