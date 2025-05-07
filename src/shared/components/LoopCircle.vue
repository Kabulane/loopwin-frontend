<template>
    <div :class="mainDivClasses" class="relative overflow-visible">
      <!-- Cercle extérieur pour GreenLoops -->
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="-10 -10 120 120">
        <defs>
          <linearGradient id="shine-gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#22c55e">
              <animate attributeName="offset" values="-2;1" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stop-color="#00ffc3" stop-opacity="0.6">
              <animate attributeName="offset" values="-1;2" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stop-color="#22c55e">
              <animate attributeName="offset" values="0;3" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
  
        <circle
          class="text-gray-700"
          cx="50"
          cy="50"
          :r="greenR"
          fill="none"
          stroke="currentColor"
          :stroke-width="ringWidth"
        />
        <circle
          class="text-green-500 "
          cx="50"
          cy="50"
          :r="greenR"
          fill="none"
          stroke="url(#shine-gradient-green)"
          :stroke-width="ringWidth"
          :stroke-dasharray="greenCircumference"
          :stroke-dashoffset="greenCircumference * (1 - greenProgress)"
          stroke-linecap="round"
          transform="rotate(90 50 50)"
        />
      </svg>
  
      <!-- Cercle intérieur pour BlueLoops -->
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="-10 -10 120 120">
        <defs>
          <linearGradient id="shine-gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00BFFF">
              <animate attributeName="offset" values="-2;1" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.6">
              <animate attributeName="offset" values="-1;2" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stop-color="#00BFFF">
              <animate attributeName="offset" values="0;3" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <circle
          class="text-gray-500"
          cx="50"
          cy="50"
          :r="blueR"
          fill="none"
          stroke="currentColor"
          :stroke-width="innerRingWidth"
        />
        <circle
          class="text-blue-400"
          cx="50"
          cy="50"
          :r="blueR"
          fill="none"
          stroke="url(#shine-gradient-blue)"
          :stroke-width="innerRingWidth"
          :stroke-dasharray="blueCircumference"
          :stroke-dashoffset="blueCircumference * (1 - blueProgress)"
          stroke-linecap="round"
          transform="rotate(90 50 50)"
        />
      </svg>
  
      <!-- Image ou nom du lot -->
      <div class="absolute inset-0 flex items-center justify-center z-10">
        <img :src="image" alt="lot" :class="imageClasses" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    image: String,
    greenProgress: Number,
    blueProgress: Number,
    mainDivClasses: Array,
    imageClasses: Array,
    ringWidth: { type: Number, default: 5 },
    innerRingWidth: { type: Number, default: 3 }
  })
  
  const blueR = 50;
  const greenR = 55;

  const greenCircumference = computed(() => 2 * Math.PI * greenR)
  const blueCircumference = computed(() => 2 * Math.PI * blueR)
  </script>
  
  <style scoped>
  circle {
    transition: stroke-dashoffset 0.4s ease;
  }
  </style>
  