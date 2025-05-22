<!-- src/views/ProfileView.vue -->
<template>
  <div class="min-h-screen text-white p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Mon Profil</h1>

    <!-- GlowPods -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-green-900/20 border border-green-500 p-4 rounded-xl text-center shadow">
        <p class="text-green-300 font-semibold">GreenLoops</p>
        <p class="text-2xl font-bold text-green-400">{{ userStore.user.wallet.greenLoops }}</p>
      </div>
      <div class="bg-blue-900/20 border border-blue-500 p-4 rounded-xl text-center shadow">
        <p class="text-blue-300 font-semibold">BlueLoops</p>
        <p class="text-2xl font-bold text-blue-400">{{ userStore.user.wallet.blueLoops }}</p>
      </div>
    </div>

    <!-- Adresse postale -->
    <div class="bg-gray-800 rounded-2xl p-6 mb-6">
      <h3 class="text-lg font-semibold mb-2">Adresse de livraison</h3>
      <p class="text-sm text-gray-300">
        <span v-if="userStore.user.address">
          {{ userStore.user.address.street }}, {{ userStore.user.address.city }}, {{ userStore.user.address.zip }}, {{ userStore.user.address.country }}
        </span>
        <span v-else>
          Non renseignée
        </span>
      </p>
      <button class="mt-3 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm">Ajouter une adresse</button>
    </div>

    <!-- Participations -->
    <div class="bg-gray-800 rounded-2xl p-6 mb-6">
      <h3 class="text-lg font-semibold mb-4">Mes participations</h3>
      <ul class="space-y-3">
        <li v-for="(participation, index) in userStore.user.participations" :key="index" class="bg-gray-700/60 p-3 rounded-lg flex justify-between items-center">
          <div>
            <p class="font-medium">{{ participation.contestTitle }}</p>
            <p class="text-sm text-gray-400">{{ participation.loopsUsed }} GreenLoops misés</p>
          </div>
          <span
            class="text-xs px-2 py-1 rounded"
            :class="{
              'text-yellow-400 bg-yellow-900/40': participation.status === 'active',
              'text-green-400 bg-green-900/40': participation.status === 'won',
              'text-red-400 bg-red-900/40': participation.status === 'lost'
            }"
          >
            {{ participation.status === 'active' ? 'En cours' : participation.status === 'won' ? 'Gagné !' : 'Perdu' }}
          </span>
        </li>
      </ul>
      <button class="mt-4 text-sm text-blue-400 underline hover:text-blue-300">Voir tout l'historique</button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userStore'
import LoopCircle from '../../../shared/components/LoopCircle.vue'
const userStore = useUserStore()
</script>
