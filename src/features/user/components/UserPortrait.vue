<template>
  <div
    class="relative flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-inner w-max text-white border border-gray-600"
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
      <div class="font-bold leading-tight absolute top-2 left-35">
        {{ userStore.user.username }} – <span class="text-gray-300">#{{ userStore.user.tag }}</span>
      </div>
      <div class="text-xs text-gray-300" v-if="userStore.user.title">{{ userStore.user.title }}</div>

      
    <!-- Loops -->
    <div class="flex font-bold">
        <div>
          <span class="inline-block w-6 h-6 align-middle mb-1 ">
            <img src="../../../shared/assets/icons/greenLoop.png" alt="GreenLoop icon" class="w-full h-full object-contain" />
          </span>
          <span class="text-sm text-green-500 ">{{ userStore.user.greenLoops }} greenLoops</span>
        </div>
        <div class="ml-5">
          <span class="inline-block w-6 h-6 align-middle mb-1 ">
            <img src="../../../shared/assets/icons/blueLoop.png" alt="BlueLoop icon" class="w-full h-full object-contain" />
          </span>
          <span class="text-sm text-blue-400 ">{{ userStore.user.blueLoops }} blueLoops</span>
        </div>
      </div>

      <!-- Badges -->
      <!-- <div class="flex mt-1 space-x-1">
        <template v-for="badge in userStore.user.badges" :key="badge">
          <img
            :src="`/assets/badges/${badge}.png`"
            :alt="badge"
            :title="badge"
            class="w-6 h-6 rounded-sm drop-shadow"
          />
        </template>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
</script>
