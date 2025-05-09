<template>
    
  <transition name="fade">
    <div
      v-if="message"
      v-html="message"
      class="text-sm sm:text-base text-center w-full mx-auto ml-5 mt-5 md:mt-0 px-4 py-2 rounded-lg
             bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 
             text-white shadow-md border border-gray-600
             animate-fade-in ring-1 ring-gray-600/30"
    ></div>
  </transition>
  </template>

  
  <script setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useI18n } from 'vue-i18n'

    const route = useRoute()
    const { t } = useI18n()

    // Associe les routes aux clés de traduction
    const pathKey = computed(() => {
      switch (route.path) {
        case '/': return 'contextual.home'
        case '/contests': return 'contextual.contests'
        case '/profile': return 'contextual.profile'
        case '/shop': return 'contextual.shop'
        default: return null
      }
    })

    // Récupère le message traduit
    const message = computed(() => (pathKey.value ? t(pathKey.value) : null))
  </script>

  
  <style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  </style>
  