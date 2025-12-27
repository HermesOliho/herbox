<script setup lang="ts">
import AppName from '@/components/ui/AppName.vue'
</script>

<template>
  <section
    class="flex items-center justify-center bg-base-200"
    style="min-height: calc(100dvh - 4rem)"
  >
    <div class="card w-full max-w-md shadow-lg bg-base-100">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">Créer un compte sur <AppName /></h2>
        <form class="flex flex-col gap-4">
          <fieldset class="fieldset">
            <legend class="fieldset-legend" for="username">Nom d'utilisateur</legend>
            <input type="text" id="username" name="username" class="input w-full" required />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend" for="email">Email</legend>
            <input type="email" id="email" name="email" class="input w-full" required />
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend" for="password">Mot de passe</legend>
            <input type="password" id="password" name="password" class="input w-full" required />
          </fieldset>
          <button class="btn btn-primary mt-3" type="submit">S'inscrire</button>
        </form>
        <p class="mt-4 text-center">
          Déjà un compte ?
          <RouterLink to="/login" class="link link-hover">Connectez-vous ici</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>
