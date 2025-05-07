<template>
    <div class="flex items-center justify-between px-4 py-2 bg-gray-900 text-white border-b border-gray-700">
        <div class="flex items-center space-x-3">
            <slot />
            <router-link to="/" class="flex items-center  hover:text-cyan-400 transition logo-header">
                <img src="../../shared/assets/icons/logo.png" alt="Logo" class="h-10 w-10" />
                <h1 class="text-xl font-bold tracking-wide "><span class="text-green-500">Loop</span><span class="text-blue-400">Win</span></h1>
            </router-link>
        </div>
    </div>
</template>
  
  <script setup>
    import { useUserStore } from '../../features/user/store/userStore'
    import UserPortrait from '../../features/user/components/UserPortrait.vue'

    const userStore = useUserStore()
    async function login(credentials) {
        const response = await fetch('api/login')
    }
  </script>
  
  <style scoped>

  </style>