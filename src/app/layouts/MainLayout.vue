<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      
      <header class="w-full px-4 py-2 flex justify-between items-center bg-gray-900 shadow-md  top-0 z-50">
        <Header>
        </Header>
      </header>
      
      <div class="flex flex-col md:flex-row p-4">
        <transition name="fade-slide" mode="out-in">
          <UserBoard :user="userStore.user" class=" md:top-3" />
        </transition>
        
      </div>

      

      <main class="pt-2">
        <router-view  v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </router-view>
      </main>
  
      <footer class="p-4 text-sm text-gray-400 text-center border-t border-gray-700">
        © {{ new Date().getFullYear() }} <span class="text-green-500">Loop</span><span class="text-blue-400">Win</span> • Tous droits réservés
      </footer>
    </div>
</template>
  
  <script setup>
  import Header from './Header.vue'
  import { useUserStore } from '../../features/user/store/userStore'
  import UserBoard from '../../features/user/components/UserBoard.vue';

  const userStore = useUserStore()
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.4s ease;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-slide-enter-to,
  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  </style>