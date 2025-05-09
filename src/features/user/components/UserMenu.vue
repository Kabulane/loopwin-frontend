<template>
  <!-- <div
      class="text-sm sm:text-base text-center w-full h-full ml-5 mt-5 md:mt-0 px-4 py-2 rounded-lg
            bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 
            text-white shadow-md border border-gray-600
            animate-fade-in ring-1 ring-gray-600/30"
      > -->
      <div class="">
        <nav class="w-full flex flex-row gap-2">
          <MenuLink to="/profile" icon="👤" label="Mon profil" />
          <MenuLink to="/contests" icon="🏆" label="Concours" />
          <MenuLink to="/shop" icon="💰" label="Boutique" />
          <MenuLink to="/clan" icon="🛡️" label="Mon clan" />
          <MenuLink to="/settings" icon="⚙️" label="Paramètres" />
          <button class="mt-4 text-left text-sm text-red-400 hover:text-red-300 transition">🚪 Déconnexion</button>
        </nav>
      </div>
    <!-- </div> -->
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router'
import MenuLink from '../../../shared/components/MenuLink.vue'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()

function menuClass(active) {
  return [
    'block w-full px-4 py-2 text-left transition duration-150',
    active ? 'bg-gray-700 text-white' : 'hover:bg-gray-800',
  ].join(' ')
}

function logout() {
  userStore.resetUser()
  router.push({ name: 'Home' }) // ou autre redirection
}
</script>

<style scoped>
a:hover {
  text-shadow: 0 0 4px #00f0ff;
}
</style>
