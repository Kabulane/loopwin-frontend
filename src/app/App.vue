<script setup>
  import MainLayout from './layouts/MainLayout.vue';
  import { onMounted } from 'vue'
  import { useUserStore } from '@/features/user/store/userStore'
  import { useContestStore } from '@/features/contest/store/contestStore'
  import User from '@/features/user/models/User'

  const contestStore = useContestStore()
  contestStore.initListeners()

  onMounted(() => {
    const store = useUserStore()
    if (store.user && !(store.user instanceof User)) {
      console.log('[App.vue] 🔄 Réhydratation de l’utilisateur depuis JSON')
      store.user = User.fromJSON(store.user)
    }
  })
</script>

<template>
  <MainLayout />
</template>

<style scoped>
</style>
