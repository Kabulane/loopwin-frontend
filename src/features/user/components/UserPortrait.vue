<template>
  <RouterLink
    :to="`/profile`"
    class=""
  >
    <div
      class="relative flex items-center px-6 w-md mx-auto
          rounded-full text-white border border-gray-700
          bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800
          shadow-[0_0_12px_#22c55e33,0_0_24px_#3b82f633]
          transition-all duration-500 ease-in-out transform
          hover:shadow-[0_0_5px_#22c55eaa,0_0_5px_#3b82f6aa]
          hover:scale-105
          hover:bg-gradient-to-br hover:from-gray-800 hover:via-gray-900 hover:to-gray-800
          animate-floating"
    >
      <!-- Avatar -->
      <div class="relative">
        <LoopCircle 
            :image = "userStore.user.avatar"
            :greenProgress = "1"
            :blueProgress = "1"
            :mainDivClasses = "['relative', 'w-32', 'h-32']"
            :imageClasses = "['rounded-full', 'w-26', 'h-26', 'object-contain', 'pulse-glow']"
            :ringWidth = "5"
            :innerRingWidth = "3"
          />
        <div
          class="absolute -bottom-1  bg-gray-300 text-gray-900 text-md px-1 rounded shadow font-bold"
        >
          <span class="text-xs ">Lvl.</span>{{ userStore.user.level }}
        </div>
      </div>

      <!-- Infos -->
      <div class="ml-4 flex flex-col justify-center text-md">
        <div class="flex flex-row w-full items-center">
          <!-- Username à gauche -->
          <div class="flex-1 text-left font-bold text-white">
            {{ userStore.user.username }}
          </div>

          <!-- Élément centré (vide ou à compléter) -->
          <div class="flex-1 flex justify-center">
            <div class="text-gray-400">–</div>
          </div>

          <!-- Tag à droite -->
          <div class="flex-1 text-right text-gray-300 hover:text-blue-300 hover:scale-105" @click.stop="$router.push('/parrainage')">
            #{{ userStore.user.tag }}
          </div>
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
          <div class="flex flex-row text-slate-300 ">
            <div class="text-slate-400 text-sm"><span>Clan : </span></div>
            <div class="hover:scale-105 text-green-400 text-sm font-bold hover:text-green-500 ml-1"><span class="" @click.stop="$router.push(`/clan/${userStore.user.clan}`)"> {{ userStore.user.clan }}</span></div>
          </div>

          <!-- Parties jouées -->
          <div class="text-slate-300 text-sm">
            <span class="text-slate-400">Parties jouées : </span>
            <span class="text-blue-400 font-medium">{{ userStore.user.gamesPlayed }}</span>
          </div>

          <!-- Win/Lose -->
          <div class="text-slate-300 text-sm">
            <span class="text-slate-400">Win/Lose : </span>
            <span class="text-emerald-400 font-semibold">{{ userStore.user.wins }}</span>
            <span class="text-slate-500">/</span>
            <span class="text-rose-400 font-semibold">{{ userStore.user.gamesPlayed - userStore.user.wins }}</span>
          </div>
        </div>

        <!-- Badges -->
        <div class="flex mt-1 mb-2 space-x-1 absolute right-3 glow-pulse">
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
  </RouterLink>
</template>

<script setup>
import LoopCircle from '../../../shared/components/LoopCircle.vue'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
</script>
