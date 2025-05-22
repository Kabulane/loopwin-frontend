<template>
  <div class="flex flex-col items-center lg:flex-row mt-20 md:mt-10 lg:mt-12 w-full gap-5 ">
    

    <!-- UserSheet -->
    <div id="user-board-observe" v-if="userStore.user !== null" class="mx-auto shrink-0 w-full max-w-[430px]">
      <UserSheet />
    </div>
    <LoopBalanceSticky v-if="userStore.user" />

    <!-- MenuDisplay avec cadre -->
    <div
      class=" 
      mx-auto 
      w-full 
      max-w-[380px] 
      basic-content-card"
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
import { useUserStore } from '../store/userStore'
import LoopBalanceSticky from '../../../shared/components/LoopBalanceSticky.vue'

const userStore = useUserStore();
const { events } = useActivityFeed()
</script>
