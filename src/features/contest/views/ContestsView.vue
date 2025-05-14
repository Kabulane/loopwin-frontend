<template>
  <div class="px-4 py-8 text-white">
    <h1 class="text-2xl font-bold mb-6">Concours actifs </h1>

    <!-- Bloc Hot -->
    <section v-if="contestStore.contestsByCategory.hot.length || contestStore.loadingByCategory.hot" class="mb-10">
      <h2 class="text-xl font-semibold mb-4">🔥 Concours en cours</h2>
      <div v-if="contestStore.loadingByCategory.hot" class="text-gray-400">Chargement...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <ContestCard
          v-for="contest in contestStore.contestsByCategory.hot"
          :key="contest.contestId"
          :contest="contest"
          class="cursor-pointer"
          @click="selectContest(contest)"
        />
      </div>
    </section>

    <!-- Bloc Hybrid -->
    <section v-if="contestStore.contestsByCategory.hybrid.length || contestStore.loadingByCategory.hybrid" class="mb-10">
      <h2 class="text-xl font-semibold mb-4">🔄 Concours hybrides</h2>
      <div v-if="contestStore.loadingByCategory.hybrid" class="text-gray-400">Chargement...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <ContestCard
          v-for="contest in contestStore.contestsByCategory.hybrid"
          :key="contest.contestId"
          :contest="contest"
          @click="selectContest(contest)"
          class="cursor-pointer"
        />
      </div>
    </section>

    <!-- Bloc Green -->
    <section v-if="contestStore.contestsByCategory.green.length || contestStore.loadingByCategory.green" class="mb-10">
      <h2 class="text-xl font-semibold mb-4">💚 Concours GreenLoops</h2>
      <div v-if="contestStore.loadingByCategory.green" class="text-gray-400">Chargement...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <ContestCard
          v-for="contest in contestStore.contestsByCategory.green"
          :key="contest.contestId"
          :contest="contest"
          @click="selectContest(contest)"
          
          class="cursor-pointer"
        />
      </div>
    </section>

    <!-- Bloc Blue -->
    <section v-if="contestStore.contestsByCategory.blue.length || contestStore.loadingByCategory.blue" class="mb-10">
      <h2 class="text-xl font-semibold mb-4">💙 Concours BlueLoops</h2>
      <div v-if="contestStore.loadingByCategory.blue" class="text-gray-400">Chargement...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <ContestCard
          v-for="contest in contestStore.contestsByCategory.blue"
          :key="contest.contestId"
          :contest="contest"
          @click="selectContest(contest)"
          class="cursor-pointer"
        />
      </div>
    </section>

    <!-- Erreur -->
    <div v-if="contestStore.error" class="mt-4 text-red-400">
      Erreur : {{ contestStore.error }}
    </div>

    <!-- Popup ContestDetail -->
    <BaseModal :show="!!selectedContestId"  @close="resetSelectedContest">
      <ContestDetail :contestId="selectedContestId" />
    </BaseModal>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useContestStore } from '@/features/contest/store/contestStore'
import ContestCard from '@/features/contest/components/ContestCard.vue'
import ContestDetail from '@/features/contest/components/ContestDetail.vue'
import BaseModal from '@/shared/components/BaseModal.vue'

const contestStore = useContestStore()
const selectedContestId = ref(null)

function selectContest(contest) {
  selectedContestId.value = contest.contestId
}

function resetSelectedContest() {
  selectedContestId.value = null
}

onMounted(async () => {
  await Promise.all([
    contestStore.loadContestsByCategory('hot'),
    contestStore.loadContestsByCategory('hybrid'),
    contestStore.loadContestsByCategory('green'),
    contestStore.loadContestsByCategory('blue')
  ])
})

onUnmounted(() => {
  // WebSocket stop possible plus tard
})
</script>
