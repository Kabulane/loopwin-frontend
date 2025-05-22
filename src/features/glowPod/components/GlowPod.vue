<template>
    
    <div
      class="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner transition-all duration-300 cursor-pointer group"
      :class="[type === 'green' ? 'text-green-400' : 'text-blue-400',
        {
        'impact-glow-green': isPulsing && type === 'green',
        'impact-glow-blue': isPulsing && type === 'blue',
      }
      ]"
    >
    <div
      v-if="showShockwave"
      class="shockwave-ring"
      :class="type === 'green' ? 'bg-green-400/10' : 'bg-blue-400/10'"
    />
      <img
        :src="podImage"
        alt="GlowPod"
        class="w-7 h-7 transition-all duration-300
          group-hover:scale-110
          group-hover:-translate-y-0.5
          animate-glow-idle
          group-hover:animate-glow-hover"
      />
      <span class="font-semibold text-sm
          transition-all duration-300
          group-hover:scale-110
          group-hover:-translate-y-0.5
          animate-glow-idle
          group-hover:animate-glow-hover">{{ amount }}</span>
    </div> 
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue'
  
  const props = defineProps({
    type: { type: String, required: true }, // 'green' | 'blue'
    amount: { type: Number, required: true }
  })
  
  const podImage = computed(() =>
    props.type === 'green'
      ? '/assets/icons/greenGlowPod.png'
      : '/assets//icons/blueGlowPod.png'
  )

  const isPulsing = ref(false)
  const showShockwave = ref(false)
  watch(
    () => props.amount,
    () => {
      isPulsing.value = true
      showShockwave.value = true
      setTimeout(() => {
        isPulsing.value = false
      }, 600)
      setTimeout(() => {
        showShockwave.value = false
      }, 400)
    }
  )
  </script>
  
  <style scoped>
  @keyframes glow-idle-green {
    0%, 100% { filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.5)); }
    50%      { filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.9)); }
  }
  
  @keyframes glow-idle-blue {
    0%, 100% { filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.5)); }
    50%      { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.9)); }
  }
  
  @keyframes glow-hover-green {
    0%   { filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.7)); }
    100% { filter: drop-shadow(0 0 12px rgba(34, 197, 94, 1)); }
  }
  
  @keyframes glow-hover-blue {
    0%   { filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.7)); }
    100% { filter: drop-shadow(0 0 12px rgba(59, 130, 246, 1)); }
  }
  
  .animate-glow-idle {
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  .text-green-400 .animate-glow-idle {
    animation-name: glow-idle-green;
  }
  
  .text-blue-400 .animate-glow-idle {
    animation-name: glow-idle-blue;
  }
  
  .animate-glow-hover {
    animation-name: none !important; /* Cancel idle during hover */
  }
  
  .group-hover .text-green-400 .animate-glow-hover {
    animation: glow-hover-green 0.4s forwards;
  }
  
  .group-hover .text-blue-400 .animate-glow-hover {
    animation: glow-hover-blue 0.4s forwards;
  }
  </style>
  