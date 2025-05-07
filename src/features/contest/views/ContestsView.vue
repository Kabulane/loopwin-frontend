<template>
    <div class="px-4 py-6 max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-white mb-4">🎁 Jeux concours en cours</h2>
  
      <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr h-full">
        <ContestCard
          v-for="contest in contests"
          :key="contest.contestId"
          :contest="contest"
          @click="openModal(contest)"
        />
      </div>

      <BaseModal 
        @close="closeModal"
        :show="selectedContest !== null"
      >
        <ContestDetail :contest="selectedContest" />
      </BaseModal>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue'
  import Contest from '../models/Contest'
  import ContestCard from '../components/ContestCard.vue'
  import ContestDetail from '../components/ContestDetail.vue'
  import BaseModal from '../../../shared/components/BaseModal.vue'

  // Logique baseModal
  const selectedContest = ref(null);
  const openModal = (contest) => {
    selectedContest.value = contest;
  }

  const closeModal = () => {
    selectedContest.value = null;
  }
  // //
  const contests = [
    new Contest({
      contestId: 1,
      title: 'iPhone 15 Pro à gagner',
      description: 'Tente ta chance pour un iPhone flambant neuf !',
      image: '/assets/prizes/iphone15.png',
      value: 1199,
      loopsNeeded: 1200,
      greenLoops: 1274,
      blueLoops: 312,
      endOfContest: new Date(Date.now() + 1000 * 60 * 60 * 3)
    }),
    new Contest({
      contestId: 2,
      title: 'PlayStation 5 édition digitale',
      description: 'La PS5 ultime t’attend. Loops rapides, gain assuré !',
      image: '/assets/prizes/ps5.png',
      value: 549,
      loopsNeeded: 550,
      greenLoops: 478,
      blueLoops: 96,
      endOfContest: new Date(Date.now() + 1000 * 60 * 45)
    }),
    new Contest({
      contestId: 3,
      title: 'AirPods Pro',
      description: 'Gagne des écouteurs Apple dernière génération !',
      image: '/assets/prizes/airpods.png',
      value: 279,
      loopsNeeded: 280,
      greenLoops: 123,
      blueLoops: 88,
      endOfContest: new Date(Date.now() + 1000 * 60 * 120)
    })
  ]

  
</script>
  