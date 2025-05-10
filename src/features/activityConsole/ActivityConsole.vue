<!-- components/ActivityConsole.vue -->
<template>
    <div class="bg-zinc-900 text-green-400 p-4 rounded-xl font-mono text-sm h-full overflow-y-auto shadow-inner border border-green-700 relative console-container">
      <transition-group name="log" tag="ul" class="space-y-1">
        <li v-for="(event, index) in events" :key="event.id" v-html="renderEvent(event)" class="log-line"></li>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  const props = defineProps({
    events: {
      type: Array,
      required: true,
    }
  })
  
  const renderEvent = (event) => {
    switch (event.type) {
      case 'new_contest':
        return `<span class="text-sky-400">🌀 Nouveau contest</span> <strong>${event.name}</strong> lancé !`
      case 'hot_loop':
        return `<span class="text-amber-400">🔥 HotLoop !</span> ${event.name} atteint <strong>${event.percentage}%</strong> des GreenLoops.`
      case 'user_bet':
        return `<a href="/user/${event.user.id}" class="text-green-300 hover:underline">${event.user.name}</a> a misé <strong>${event.amount} Loops</strong> sur <a href="/contest/${event.contest.id}" class="text-blue-300 hover:underline">${event.contest.name}</a>.`
      case 'contest_won':
        return `🎉 <a href="/user/${event.user.id}" class="text-emerald-400 hover:underline">${event.user.name}</a> remporte <strong>${event.amount} Loops</strong> sur le contest <a href="/contest/${event.contest.id}" class="text-blue-300 hover:underline">${event.contest.name}</a> !`
      default:
        return ''
    }
  }
  </script>
  
  <style scoped>
  /* .console-container {
    background: radial-gradient(ellipse at center, #0f0f0f 0%, #050505 100%);
  } */
  .log-line {
    animation: fadeIn 0.5s ease;
  }
  .log-enter-active, .log-leave-active {
    transition: all 0.3s ease;
  }
  .log-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }
  .log-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>
  