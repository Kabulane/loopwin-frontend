<template>
  <div class="flex flex-col md:flex-row items-start px-4 md:px-8 gap-6">
    <!-- Espace réservé au portrait sur petits écrans -->
    <div class="block md:hidden h-[144px] w-full shrink-0"></div>
    <!-- Bloc de texte -->
    <div
      class="min-h-[144px] w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900
             rounded-xl border border-gray-700 shadow-md relative overflow-hidden p-4
             text-slate-200 text-sm leading-relaxed"
    >
      <div class="absolute inset-0 pointer-events-none opacity-5 bg-[url('/assets/scanlines.svg')]"></div>
      <p class="relative z-10">
        🎯 Bienvenue sur <span class="text-green-400 font-semibold">LoopWin</span> ! Ici, explore les concours actifs,
        mise tes Loops, et tente de décrocher des récompenses tech, gaming et lifestyle !
      </p>
    </div>
  </div>
  <div class="px-4 py-8 text-white">
    <h1 class="text-2xl font-bold mb-6">Concours actifs</h1>

    <div v-if="!contestStore.isLoading && contestStore.allContests.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-500 opacity-100">
      <ContestCard
        v-for="contest in contestStore.allContests"
        :key="contest.id"
        :contest="contest"
      />
    </div>

    <div v-else-if="contestStore.isLoading" class="text-gray-400">
      Chargement des concours...
    </div>

    <div v-else class="text-gray-400">
      Aucun concours disponible.
    </div>

    <div v-if="contestStore.error" class="mt-4 text-red-400">
      Erreur : {{ contestStore.error }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useContestStore } from '@/features/contest/store/contestStore'
import ContestCard from '@/features/contest/components/ContestCard.vue'

const contestStore = useContestStore()

onMounted(async () => {
  await contestStore.loadContests()
  //contestStore.startWebSocketListener()
})

onUnmounted(() => {
  //contestStore.stopWebSocketListener()
})
</script>
