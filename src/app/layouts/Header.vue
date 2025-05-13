<template>
  <div
    class="w-full flex justify-between items-center px-6 py-3
           bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 flex-col md:flex-row"
  >
    <!-- Logo à gauche -->
    <div class="flex items-center space-x-3">
      <router-link to="/" class="flex items-center hover:text-cyan-400 transition">
        <img src="../../shared/assets/icons/logo.png" alt="Logo" class="h-10 w-10" />
        <h1 class="text-xl font-bold tracking-wide">
          <span class="text-green-500">Loop</span><span class="text-blue-400">Win</span>
        </h1>
      </router-link>
    </div>

    
    <div class="flex items-center space-x-6">
      <HeaderAuthButton />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../../features/user/store/userStore'
import HeaderAuthButton from '../../shared/components/HeaderAuthButton.vue';
</script>

<style scoped>
/* Optionnel : pour laisser un peu d’espace sous le header si nécessaire */
body {
  padding-top: 64px;
}
</style>
