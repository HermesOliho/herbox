<script setup lang="ts"></script>

<template>
  <section
    class="bg-base-300 grid grid-cols-1 lg:grid-cols-2 p-4"
    style="min-height: calc(100dvh - 4rem)"
  >
    <!-- Image à gauche -->
    <div class="hidden lg:flex items-center justify-center">
      <!-- Une image illustrant le suivi d'un film au cinéma -->
      <img
        src="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Connexion"
      />
    </div>
    <!-- Formulaire à droite -->
    <div class="flex items-center justify-center flex-col gap-4">
      <h2 class="text-3xl text-center text-secondary font-medium mb-4">Connexion à votre compte</h2>
      <p class="max-w-md mx-auto text-center opacity-70">
        Connectez-vous pour accéder à votre liste de films, séries et recommandations
        personnalisées.
      </p>
      <form
        class="bg-base-100 w-full max-w-md mx-auto rounded-sm shadow-md p-3 lg:p-6 flex flex-col gap-4"
      >
        <fieldset class="fieldset">
          <legend class="fieldset-legend" for="email">Email</legend>
          <input type="email" id="email" name="email" class="input w-full" required />
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend" for="password">Mot de passe</legend>
          <input type="password" id="password" name="password" class="input w-full" required />
        </fieldset>
        <button class="btn btn-primary mt-3" type="submit">Se connecter</button>
      </form>
      <p class="max-w-md mx-auto text-center mt-4">
        Pas encore de compte ?
        <RouterLink to="/register" class="link link-hover">Inscrivez-vous ici</RouterLink>
      </p>
    </div>
  </section>
</template>
