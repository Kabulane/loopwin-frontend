<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header>
        <UserMenu />
      </Header>

      <transition name="fade-slide" mode="out-in">
        <UserPortrait :user="userStore.user" v-if="!route.path.startsWith('/profil')" class="fixed top-6 right-4 z-50" />
      </transition>

      

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
  import { useRoute } from 'vue-router'
  const route = useRoute()

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