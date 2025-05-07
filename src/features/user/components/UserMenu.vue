<template>
  <Menu as="div" class="relative inline-block text-left z-50">
    <div>
      <MenuButton class="inline-flex justify-center w-10 h-10 items-center bg-gray-800 text-white rounded-full hover:ring-2 hover:ring-blue-400 transition-all">
        <Bars3Icon class="w-6 h-6" />
      </MenuButton>
    </div>

    <TransitionRoot
      enter="transition ease-out duration-200"
      enter-from="opacity-0 scale-95"
      enter-to="opacity-100 scale-100"
      leave="transition ease-in duration-150"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-95"
    >
      <MenuItems class="absolute left-0 mt-2 w-56 origin-top-left rounded-xl bg-gray-900 shadow-xl ring-1 ring-black/30 focus:outline-none">
        <div class="py-2 text-sm text-gray-200">
          <MenuItem v-slot="{ active }">
            <router-link :class="menuClass(active)" :to="{ name: 'Home' }">🏠 Accueil</router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link :class="menuClass(active)" :to="{ name: 'Contests' }">🎁 Jeux concours</router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link :class="menuClass(active)" :to="{ name: 'Participations' }">🧾 Mes participations</router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link :class="menuClass(active)" :to="{ name: 'Profile' }">👤 Mon profil</router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link :class="menuClass(active)" :to="{ name: 'Detail' }">Test</router-link>
          </MenuItem>
          <div class="border-t border-gray-700 my-1" />
          <MenuItem v-slot="{ active }">
            <template v-if="userStore.user">
              <a :class="menuClass(active) + ' text-red-400'" href="#" @click="logout">🚪 Déconnexion</a>
            </template>
            <template v-else>
              <router-link :class="menuClass(active) + ' text-green-400'" :to="{ name: 'Login' }">🔐 Connexion</router-link>
            </template>
          </MenuItem>
        </div>
      </MenuItems>
    </TransitionRoot>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router'
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
