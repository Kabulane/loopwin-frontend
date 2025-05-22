<template>
      <div class="">
        <nav class="grid grid-cols-3 text-sm gap-3 whitespace-nowrap place-items-center">
          
          <MenuLink to="/contests" icon="🏆" label="Concours" />
          <MenuLink to="/dualContests" icon="" label ="Duels" :disabled="true" title="Bientôt disponible"/>
          <MenuLink v-if="userStore.user !== null" to="/clanContests" icon="" label="Batailles de clans" :disabled="true" title="Bientôt disponible"/> 

          <MenuLink v-if="userStore.user !== null" to="/mySpace" icon="🛡️" label="Mon espace" />
          <MenuLink v-if="userStore.user !== null" to="/history" icon="" label ="Mes participations"/>
          <MenuLink v-if="userStore.user !== null" to="/messages" icon="" label ="Messages" :disabled="true" title="Bientôt disponible"/>

          <MenuLink v-if="userStore.user !== null" to="/settings" icon="⚙️" label="Paramètres" :disabled="true" title="Bientôt disponible"/>
          <MenuLink v-if="userStore.user !== null" to="/shop" icon="💰" label="Boutique" />
          <MenuLink to="/Réglements" icon="" label ="Réglements"/>
        </nav>
      </div>
</template>

<script setup>
import MenuLink from '../../../shared/components/MenuLink.vue'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
</script>

<style scoped>
a:hover {
  text-shadow: 0 0 4px #00f0ff;
}
</style>
