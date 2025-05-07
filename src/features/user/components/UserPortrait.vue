<template>
  <div class="flex items-center bg-gray-700 rounded-full px-4 py-2 shadow-inner w-max text-white">
    <!-- Avatar -->
    <div class="relative">
      <img
        :src="user.avatar"
        alt="Looper Avatar"
        class="w-16 h-16 rounded-full border-4 border-gray-800 object-cover"
      />
      <div class="absolute -bottom-1 -left-1 bg-gray-200 text-gray-800 text-xs px-1 rounded shadow">
        Lvl.{{ level }}
      </div>
    </div>

    <!-- Infos -->
    <div class="ml-4 flex flex-col justify-center text-sm">
      <div class="font-semibold leading-tight">
        {{ username }} – <span class="text-gray-300">#{{ tag }}</span>
      </div>
      <div class="text-xs text-gray-300" v-if="title">{{ title }}</div>

      <!-- Loops -->
      <div class="flex items-center gap-3 mt-1">
        <div class="flex items-center gap-1 text-blue-400">
          <span class="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
          {{ blueLoops }} <span class="text-xs text-gray-300 ml-1">BlueLoops</span>
        </div>
        <div class="flex items-center gap-1 text-green-400">
          <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          {{ greenLoops }} <span class="text-xs text-gray-300 ml-1">GreenLoops</span>
        </div>
      </div>

      <!-- Étoiles -->
      <div class="flex mt-1">
        <template v-for="i in 5" :key="i">
          <svg
            :class="i <= stars ? 'text-yellow-400' : 'text-gray-400'"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import User from '../models/User'

defineProps({
  user : User
})
</script>
