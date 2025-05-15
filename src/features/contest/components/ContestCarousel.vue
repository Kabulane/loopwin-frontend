<template>
    <section class="mb-12 min-h-[340px] relative">
      <h2 class="text-xl font-semibold mb-6 px-2">{{ title }}</h2>
  
      <!-- Carrousel + flèches dans conteneur relatif -->
      <div class="relative ">
        <!-- Flèche gauche -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20
                 bg-black/60 hover:bg-black/80 text-white rounded-full p-2
                 shadow-md backdrop-blur-md transition"
          aria-label="Scroll left"
        >
          ◀
        </button>
  
        <!-- Carrousel -->
        <div
          ref="carouselRef"
          class="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory
                 px-8 pb-2 hide-scrollbar bg-gray-800"
        >
          <div
            v-for="contest in contests"
            :key="contest.id"
            @click="$emit('select', contest)"
            class="snap-start shrink-0 w-[90%] sm:w-[48%] md:w-[32%] lg:w-[30%] xl:w-[30%] cursor-pointer
                    rounded-xl shadow-lg hover:scale-[1.02] transition p-3"
          >
            <ContestCard :contest="contest" />
          </div>
        </div>
  
        <!-- Flèche droite -->
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20
                 bg-black/60 hover:bg-black/80 text-white rounded-full p-2
                 shadow-md backdrop-blur-md transition"
          aria-label="Scroll right"
        >
          ▶
        </button>
      </div>
  
      <!-- Chargement -->
      <div v-if="loading" class="mt-2 text-gray-400">Chargement...</div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ContestCard from './ContestCard.vue'
  
  const props = defineProps({
    title: String,
    contests: Array,
    loading: Boolean
  })
  
  defineEmits(['select'])
  
  const carouselRef = ref(null)
  
  function scrollLeft() {
    carouselRef.value?.scrollBy({ left: -carouselRef.value.offsetWidth, behavior: 'smooth' })
  }
  function scrollRight() {
    carouselRef.value?.scrollBy({ left: carouselRef.value.offsetWidth, behavior: 'smooth' })
  }
  </script>
  
  <style scoped>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  