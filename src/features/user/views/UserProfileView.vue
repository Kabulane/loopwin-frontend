<script setup>
import LoopCircle from '../../../shared/components/LoopCircle.vue';
import GlowPod from '../../currency/components/GlowPod.vue';

const user = {
  id: 'looper#042',
  username: 'CyberShark',
  avatar: '/assets/avatars/cybershark.png',
  greenLoops: 240,
  blueLoops: 75,
  wins: 4,
  gamesPlayed: 32,
  level: 7,
  clan: 'NightLoopers',
  badges: ['first-win', 'top-10', 'early-bird'],
  recentContests: [
    { id: 1, title: 'Razer Kraken V3', status: 'won', loops: 15 },
    { id: 2, title: 'Steam Gift Card', status: 'lost', loops: 5 },
  ],
}
</script>

<template>
  <div class="min-h-screen px-4 py-6 text-white">
    <!-- Header utilisateur -->
    <section class="max-w-3xl mx-auto mb-6 text-center">
        <LoopCircle 
          :image = "user.avatar"
          :greenProgress = "1"
          :blueProgress = "1"
          :mainDivClasses = "['relative', 'w-72', 'h-72']"
          :imageClasses = "['rounded-full', 'w-60', 'h-60', 'object-contain', 'pulse-glow']"
          :ringWidth = "5"
          :innerRingWidth = "3"
        />
        <GlowPod type="GGP" :charge="80" />
        <GlowPod type="BGP" :charge="45" />
      <h1 class="mt-4 text-3xl font-bold tracking-wide text-white">{{ user.username }}</h1>
      <p class="text-sm text-zinc-400">ID : {{ user.id }}</p>
    </section>

    <!-- Solde de Loops -->
    <section class="max-w-3xl mx-auto grid grid-cols-2 gap-4 mb-6">
      <div class="bg-zinc-800 rounded-2xl p-4 shadow-lg text-center">
        <p class="text-green-400 text-sm">GreenLoops</p>
        <p class="text-2xl font-semibold">{{ user.greenLoops }}</p>
      </div>
      <div class="bg-zinc-800 rounded-2xl p-4 shadow-lg text-center">
        <p class="text-blue-400 text-sm">BlueLoops</p>
        <p class="text-2xl font-semibold">{{ user.blueLoops }}</p>
      </div>
    </section>

    <!-- Statistiques -->
    <section class="max-w-3xl mx-auto grid grid-cols-3 gap-4 mb-6 text-center">
      <div class="bg-zinc-800 rounded-2xl p-4 shadow">
        <p class="text-sm text-zinc-400">Concours joués</p>
        <p class="text-xl font-bold text-white">{{ user.gamesPlayed }}</p>
      </div>
      <div class="bg-zinc-800 rounded-2xl p-4 shadow">
        <p class="text-sm text-zinc-400">Gagnés</p>
        <p class="text-xl font-bold text-white">{{ user.wins }}</p>
      </div>
      <div class="bg-zinc-800 rounded-2xl p-4 shadow">
        <p class="text-sm text-zinc-400">Niveau</p>
        <p class="text-xl font-bold text-white">Lv. {{ user.level }}</p>
      </div>
    </section>

    <!-- Historique -->
    <section class="max-w-3xl mx-auto mb-6">
      <h2 class="text-xl font-semibold mb-2 text-white">Derniers concours</h2>
      <div class="space-y-2">
        <div
          v-for="contest in user.recentContests"
          :key="contest.id"
          class="flex justify-between items-center bg-zinc-800 rounded-xl p-3"
        >
          <div>
            <p class="font-semibold">{{ contest.title }}</p>
            <p class="text-sm text-zinc-400">{{ contest.status === 'won' ? '🏆 Gagné' : '❌ Perdu' }}</p>
          </div>
          <div class="text-right">
            <p class="text-sm text-zinc-500">Loops misés :</p>
            <p class="text-white font-semibold">{{ contest.loops }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to actions -->
    <section class="max-w-3xl mx-auto text-center">
      <button class="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-full shadow drop-shadow-[0_0_6px_#22c55e] transition">
        Acheter des Loops
      </button>
    </section>
  </div>
</template>