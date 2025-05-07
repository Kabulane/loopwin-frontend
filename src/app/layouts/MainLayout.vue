<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header>
        <UserMenu />
      </Header>
  
      <main class="flex-1 px-4 pb-10">
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
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>