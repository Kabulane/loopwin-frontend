<template>
    <div class="relative w-24 h-48 flex flex-col items-center justify-center">
      <!-- SVG Capsule Shape -->
      <svg viewBox="0 0 100 200" class="absolute w-full h-full z-10">
        <defs>
          <linearGradient :id="gradientId" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" :stop-color="primaryColor" stop-opacity="0.2" />
            <stop offset="100%" :stop-color="primaryColor" stop-opacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="10" y="10" width="80" height="180" rx="40" ry="40"
          :fill="'url(#' + gradientId + ')'" stroke="white" stroke-width="2" filter="url(#glow)" />
      </svg>
  
      <!-- Dynamic Charge Fill -->
      <div class="absolute bottom-0 w-[80%] z-0 overflow-hidden rounded-full"
           :style="{
             height: charge + '%',
             background: `linear-gradient(to top, ${primaryColor}66, ${primaryColor})`,
             filter: `drop-shadow(0 0 6px ${primaryColor})`
           }">
      </div>
  
      <!-- Label -->
      <div class="relative z-20 mt-2 text-center text-xs font-semibold tracking-wide uppercase"
           :class="labelColor">
        {{ label }}
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    type: { type: String, required: true }, // 'GGP' or 'BGP'
    charge: { type: Number, default: 100 } // %
  })
  
  const labelMap = {
    GGP: 'Green GlowPod',
    BGP: 'Blue GlowPod'
  }
  const colorMap = {
    GGP: '#22c55e', // Tailwind green-500
    BGP: '#3b82f6'  // Tailwind blue-500
  }
  const textMap = {
    GGP: 'text-green-400',
    BGP: 'text-blue-400'
  }
  
  const label = labelMap[props.type] || 'GlowPod'
  const primaryColor = colorMap[props.type] || '#999'
  const labelColor = textMap[props.type] || 'text-gray-400'
  const gradientId = `capsule-gradient-${props.type}`
  </script>
  
  <style scoped>
  </style>
  