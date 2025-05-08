<template>
  
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
