<template>
  <div
    class="relative flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-inner w-md text-white border border-gray-600 "
  >
    <!-- Avatar -->
    <div class="relative">
      <img
        :src="userStore.user.avatar"
        alt="Looper Avatar"
        class="w-32 h-32 rounded-full border-4 border-gray-900 object-cover"
      />
      <div
        class="absolute -bottom-1 -left-1 bg-gray-300 text-gray-900 text-md px-1 rounded shadow font-bold"
      >

        <span class="text-xs ">Lvl.</span>{{ userStore.user.level }}
      </div>
    </div>

    <!-- Infos -->
    <div class="ml-4 flex flex-col justify-center text-sm">
      <div class="font-bold leading-tight ">
        {{ userStore.user.username }} – <span class="text-gray-300">#{{ userStore.user.tag }}</span>
      </div>

      <div class="flex flex-col gap-0 p-3 bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-xl shadow-lg border border-gray-700">
        <!-- Titre -->
        <div v-if="userStore.user.title" class="text-yellow-400 text-md font-bold flex items-center gap-2">
          <svg class="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
          </svg>
          {{ userStore.user.title }}
        </div>

        <!-- Clan -->
        <div class="text-slate-300 text-sm">
          <span class="text-slate-400">Clan :</span>
          <span class="text-green-400 font-medium">{{ userStore.user.clan }}</span>
        </div>

        <!-- Parties jouées -->
        <div class="text-slate-300 text-sm">
          <span class="text-slate-400">Parties jouées :</span>
          <span class="text-blue-400 font-medium">{{ userStore.user.gamesPlayed }}</span>
        </div>

        <!-- Win/Lose -->
        <div class="text-slate-300 text-sm">
          <span class="text-slate-400">Win/Lose :</span>
          <span class="text-emerald-400 font-semibold">{{ userStore.user.wins }}</span>
          <span class="text-slate-500">/</span>
          <span class="text-rose-400 font-semibold">{{ userStore.user.gamesPlayed - userStore.user.wins }}</span>
        </div>
      </div>

      <!-- Badges -->
      <div class="flex mt-1 mb-2 space-x-1 absolute right-5 glow-pulse">
        <template v-for="badge in userStore.user.badges" :key="badge">
          <img
            :src="`/assets/badges/${badge}.png`"
            :alt="badge"
            :title="badge"
            class="w-32 h-32 rounded-sm drop-shadow"
          />
        </template>
      </div>
      
    <!-- Loops -->
    <div class="flex font-bold justify-center mt-2">
      <div>
        <span class="inline-block w-8 h-8 align-middle mb-1 ">
          <img src="../../../shared/assets/icons/greenLoop.png" alt="GreenLoop icon" class="w-full h-full object-contain" />
        </span>
        <span class="text-xl text-green-500 ">{{ userStore.user.greenLoops }} </span> <!-- <span class="text-xs text-green-500 ">greenLoops</span> -->
      </div>
      <div class="ml-3">
        <span class="inline-block w-8 h-8 align-middle mb-1 ">
          <img src="../../../shared/assets/icons/blueLoop.png" alt="BlueLoop icon" class="w-full h-full object-contain" />
        </span>
        <span class="text-xl text-blue-400 ">{{ userStore.user.blueLoops }} </span> <!-- <span class="text-xs text-blue-400 ">blueLoops</span>-->
      </div>
    </div>

      
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
</script>
