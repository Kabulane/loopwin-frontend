<template>
  <div class="flex flex-col items-center lg:flex-row mt-20 md:mt-10 lg:mt-12 w-full gap-5 ">
    

    <!-- UserSheet -->
    <div class="mx-auto shrink-0 w-full max-w-[430px]">
      <UserSheet />
    </div>

    <!-- MenuDisplay avec cadre -->
    <div
      class="
      mx-auto 
      w-full 
      max-w-[380px] 
      rounded-2xl 
      border 
      border-slate-700 
      bg-gradient-to-br from-[#111827] to-[#1f2937] 
      shadow-lg 
      shadow-blue-500/10 
      p-4
      transition-all duration-500 ease-in-out transform
      hover:shadow-[0_0_5px_#22c55eaa,0_0_5px_#3b82f6aa]
      hover:scale-105
      hover:bg-gradient-to-br hover:from-gray-800 hover:via-gray-900 hover:to-gray-800
      animate-floating"
    >
      <UserMenu />
    </div>

    <!-- ActivityConsole -->
    <div
      class="mx-auto w-full  lg:flex-1 h-[189px] max-h-[189px] min-h-[189px] overflow-auto  "
    >
      <ActivityConsole :events="events" />
    </div>

  </div>
</template>

<script setup>
import UserSheet from './UserSheet.vue'
import UserMenu from './UserMenu.vue'
import { ActivityConsole, useActivityFeed } from '@/features/activityConsole'

const { events } = useActivityFeed()
</script>
