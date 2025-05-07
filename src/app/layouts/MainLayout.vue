<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header>
        <UserMenu />
      </Header>

      <div  v-if="userStore.user" class="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
        <User-portrait :user="userStore.user" />
      </div>

      <main class="pt-24">
        <Transition name="fade" mode="out-in">
          <router-view />
        </Transition>
      </main>
  
      <footer class="p-4 text-sm text-gray-400 text-center border-t border-gray-700">
        © {{ new Date().getFullYear() }} <span class="text-green-500">Loop</span><span class="text-blue-400">Win</span> • Tous droits réservés
      </footer>
    </div>
</template>
  
  <script setup>
  import Header from './Header.vue'
  import UserMenu from '../../features/user/components/UserMenu.vue'
  import { useUserStore } from '../../features/user/store/userStore'
  import UserPortrait from '../../features/user/components/UserPortrait.vue';

  const userStore = useUserStore()
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>