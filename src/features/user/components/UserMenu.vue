<template>
      <div class="">
        <nav class="grid grid-cols-3 text-sm gap-3 whitespace-nowrap place-items-center">
          
          <MenuLink to="/contests" icon="🏆" label="Concours" />
          <MenuLink to="/dualContests" icon="" label ="Duels" :disabled="true" title="Bientôt disponible"/>
          <MenuLink to="/clanContests" icon="" label="Batailles de clans" :disabled="true" title="Bientôt disponible"/> 

          <MenuLink to="/profile" icon="🛡️" label="Mon profil" />
          <MenuLink to="/history" icon="" label ="Mes participations"/>
          <MenuLink to="/messages" icon="" label ="Messages" :disabled="true" title="Bientôt disponible"/>

          <MenuLink to="/settings" icon="⚙️" label="Paramètres" :disabled="true" title="Bientôt disponible"/>
          <MenuLink to="/shop" icon="💰" label="Boutique" />
          <MenuLink to="/Réglements" icon="" label ="Réglements"/>
        </nav>
      </div>
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
