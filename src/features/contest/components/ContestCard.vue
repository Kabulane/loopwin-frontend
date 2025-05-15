<template>
  <div
    class="relative z-0 hover:z-49 transform hover:scale-[1.01] flex flex-col sm:flex-row items-center gap-4 bg-gray-900 text-white rounded-xl p-4 shadow-md hover:shadow-lg hover:ring-1 hover:ring-cyan-500 transition w-full"
    :class="{ 'pulse-glow-red': contest.hasStarted }"
  >
    <GlitchBackground v-if="contest.hasStarted" />
    
    <!-- Cercle Loop -->
    <LoopCircle 
      :image="contest.image"
      :contestType="contest.type"
      :greenProgress="contest.greenProgress"
      :blueProgress="contest.blueProgress"
      :mainDivClasses="['relative', 'w-32', 'h-32', 'shrink-0']"
      :imageClasses="['w-24', 'h-24', 'object-contain', 'pulse-glow']"
      :ringWidth="5"
      :innerRingWidth="3"
    />

    <!-- Infos -->
    <div class="flex-1 flex flex-col justify-between h-full text-sm sm:text-base">
      <h2 class="font-bold text-white text-lg mb-1 h-[54px] overflow-hidden">{{ contest.title }}</h2>
      <p class="text-gray-400 mb-2 line-clamp-2 text-sm">{{ contest.description }}</p>
      <div class="flex flex-col gap-1 text-xs ">
        <div class="flex font-bold">
          <div>
            <span class="inline-block w-6 h-6 align-middle mb-1 pulse-glow">
              <img src="../../../shared/assets/icons/greenLoop.png" alt="GreenLoop icon" class="w-full h-full object-contain" />
            </span>
            <span class="text-sm text-green-500 pulse-glow">{{ contest.greenLoops }}</span>
          </div>
          <div class="ml-5">
            <span class="inline-block w-6 h-6 align-middle mb-1 pulse-glow">
              <img src="../../../shared/assets/icons/blueLoop.png" alt="BlueLoop icon" class="w-full h-full object-contain" />
            </span>
            <span class="text-sm text-blue-400 pulse-glow">{{ contest.blueLoops }}</span>
          </div>
        </div>
        <p class="text-white" v-html="contest.displayTime"></p>
      </div>
    </div>

    <!-- Mise directe -->
    <div class="mt-4 flex flex-col gap-3 justify-end items-center">
      <div class="flex">
        <GreenLoop :amount="1" :contestId="contest.id"/>
        <GreenLoop :amount="5" :contestId="contest.id"/>
      </div>
      <div class="flex">
        <BlueLoop :amount="1"  :contestId="contest.id"/>
        <BlueLoop :amount="5"  :contestId="contest.id"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoopCircle from '../../../shared/components/LoopCircle.vue'
import GlitchBackground from '../../../shared/components/GlitchBackground.vue'
import GreenLoop from '../../currency/components/GreenLoop.vue'
import BlueLoop from '../../currency/components/BlueLoop.vue'
import Contest from '../models/Contest.js'

const { contest, onQuickBet } = defineProps({
  contest: Contest
})
</script>
