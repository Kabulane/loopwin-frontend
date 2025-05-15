<template>
    <Transition name="fade-slide">
      <div
        v-if="visible"
         class="fixed top-26 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white px-6 py-2 rounded-2xl shadow-lg
             flex items-center gap-6 backdrop-blur-md z-50 text-base scale-125"
      >
        <GlowPod type="green" :amount="userStore.user.wallet.greenLoops" />
        <GlowPod type="blue" :amount="userStore.user.wallet.blueLoops" />
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { useUserStore } from '@/features/user/store/userStore'
  import GlowPod from '../../features/glowPod/components/GlowPod.vue'

  const visible = ref(false)
  const userStore = useUserStore()
  
  const greenLoops = computed(() => userStore.user?.wallet?.greenLoops ?? 0)
  const blueLoops = computed(() => userStore.user?.wallet?.blueLoops ?? 0)
  
  let observer = null
  
  onMounted(() => {
    const el = document.getElementById('user-board-observe')
    console.log('[Observer] Élément ciblé :', el)
  
    if (el) {
      observer = new IntersectionObserver(
        ([entry]) => {
          console.log('[Observer] Intersection:', entry.isIntersecting)
          visible.value = !entry.isIntersecting
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
    }
  })
  
  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
  </script>
  
  <style scoped>
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  