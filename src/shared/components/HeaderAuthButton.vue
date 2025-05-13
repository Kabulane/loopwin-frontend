<template>
    <button
      v-if="isAuthenticated"
      @click="logout"
      class="flex items-center gap-2 px-4 py-2 rounded-xl
             text-sm sm:text-base font-semibold
             text-red-400 border border-red-500/40
             bg-gradient-to-br from-[#1f1f1f] to-[#2a0000]
             shadow-[inset_0_0_4px_#7f1d1d]
             hover:shadow-[0_0_6px_#dc2626,0_0_12px_#dc2626aa]
             hover:text-red-300
             transition-all duration-200
             active:scale-95"
    >
      <span>Se déconnecter</span>
    </button>
  
    <RouterLink
      v-else
      :to="{ name: 'Login' }"
      class="flex items-center gap-2 px-4 py-2 rounded-xl
             text-sm sm:text-base font-semibold
             text-blue-400 border border-blue-500/40
             bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]
             shadow-[inset_0_0_4px_#1e40af]
             hover:shadow-[0_0_6px_#3b82f6,0_0_12px_#3b82f6aa]
             hover:text-blue-300
             transition-all duration-200
             active:scale-95"
    >
      <span>Se connecter</span>
    </RouterLink>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useUserStore } from '@/features/user/store/userStore'
  import { useRouter, RouterLink } from 'vue-router'
  
  const userStore = useUserStore()
  const router = useRouter()
  
  const isAuthenticated = computed(() => !!userStore.user)
  
  function logout() {
    userStore.resetUser()
    router.push({ name: 'Home' })
  }
  </script>
  