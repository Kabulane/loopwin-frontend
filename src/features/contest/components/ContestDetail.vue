
<template>
  <div class="relative">
    <div class="w-full max-w-md mx-auto px-4 py-6 flex flex-col items-center text-gray-200 space-y-6">
      <!-- Bloc Titre -->
      <div class="text-center space-y-1">
        <h1 class="text-white text-xl font-bold leading-tight">{{ contest.title }}</h1>
        <p class="text-sm text-gray-400">{{ contest.description }}</p>
      </div>

      <!-- Bloc Loop -->
      <div class="flex justify-center items-center">
        <LoopCircle 
          :image = "contest.image"
          :greenProgress = "contest.greenProgress"
          :blueProgress = "contest.blueProgress"
          :mainDivClasses = "['relative', 'w-72', 'h-72']"
          :imageClasses = "['w-60', 'h-60', 'object-contain', 'pulse-glow']"
          :ringWidth = "5"
          :innerRingWidth = "3"
        />
      </div>

      <!-- Bloc infos + stats -->
      <div class="space-y-2 text-sm text-center">
        <p class="text-gray-400">
          Concours n°{{ contest.contestId }} — Valeur : 
          <span class="text-slate-200 font-medium">{{ contest.value }}€</span>
        </p>

        <p class="text-lg font-semibold text-white" v-html="contest.displayTime" />

        <p class="text-gray-400">
          Total Loops misés : <span class="text-blue-400">{{ contest.totalLoops }}</span><br />
          Vous : <span class="text-green-400">{{ bet.totalLoops }}</span> 
          (<span class="text-green-400">{{ bet.getChancesRelativeTo(contest) }}</span> de chances)
        </p>
      </div>

      <!-- Zone de mise GreenLoops -->
      <div class="flex gap-2 justify-center mt-4">
        <GreenLoop :amount="1" @click="greenBet(1)" />
        <GreenLoop :amount="5" @click="greenBet(5)" />
        <GreenLoop :amount="10" @click="greenBet(10)" />
        <GreenLoop :amount="50" @click="greenBet(50)" />
      </div>

      <!-- Zone de mise BlueLoops -->
      <div class="flex gap-2 justify-center mt-2">
        <BlueLoop :amount="1" @click="blueBet(1)" />
        <BlueLoop :amount="5" @click="blueBet(5)" />
        <BlueLoop :amount="10" @click="blueBet(10)" />
        <BlueLoop :amount="50" @click="blueBet(50)" />
      </div>

        <!-- Bloc CTA -->
        <div class="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow w-full sm:w-auto">
            💰 Acheter des tokens
          </button>
          <button class="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg w-full sm:w-auto">
            📜 Voir les règles
          </button>
        </div>
      
    </div>
  </div>
</template>
  
<script setup>
import LoopCircle from '../../../shared/components/LoopCircle.vue'
import { Contest } from '../models/Contest.js'
import { Bet } from '../../currency/models/Bet.js'
import GreenLoop from '../../currency/components/GreenLoop.vue'
import BlueLoop from '../../currency/components/BlueLoop.vue'

function greenBet(amount) {
  console.log(`GreenLoop misé : ${amount}`)
}
function blueBet(amount) {
  console.log(`BlueLoop misé : ${amount}`)
}

const contest = new Contest({
  contestId: 1,
  title: 'iPhone 15 Pro à gagner',
  description: 'Participez pour tenter de remporter un iPhone 15 Pro flambant neuf !',
  image: '/assets/prizes/iphone15.png',
  value: 1199,
  loopsNeeded: 1199,
  greenLoops: 1174,
  blueLoops: 319,
  endOfContest: '2025-04-18T18:00:00'
})

const bet = new Bet({
  userId : 42,
  contestId : 1,
  greenLoops : 54,
  blueLoops : 3
})
</script>
  
<style scoped>


.scale-on-click:active {
  transform: scale(0.95);
}

.glow-on-hover:hover {
  box-shadow: 0 0 10px rgba(0, 255, 150, 0.6);
}

.fire-glow {
  background-color: #ff5722;
  color: white;
}

.pulse-burst {
  animation: pulseGlow 1.8s infinite ease-in-out;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 8px rgba(255, 100, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 60, 0, 0.9), 0 0 40px rgba(255, 30, 0, 0.5);
  }
}
</style>
  