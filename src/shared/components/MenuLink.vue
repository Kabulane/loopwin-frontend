<template>
	<component
    :is="disabled ? 'div' : RouterLink"
    :to="!disabled ? to : undefined"
    class="flex items-center gap-3 text-slate-200 font-bold transition rounded hover:bg-gray-800"
  >
	  <button
		:class="['relative inline-flex items-center justify-center py-2 min-w-[115px] font-semibold rounded-xl', 
				'border border-gray-600 text-white bg-gradient-to-br from-gray-800 to-gray-900', 
				'hover:from-gray-700 hover:to-gray-800',
				'hover:shadow-[0_0_12px_#22c55e66,0_0_20px_#3b82f666]',
				'focus:outline-none focus:ring-2 focus:ring-green-500/70',
				'focus:from-gray-700 focus:to-gray-800 focus:shadow-[0_0_12px_#22c55e66,0_0_20px_#3b82f666]',
				'transition-all duration-300 ease-in-out',
				'active:scale-95',
				'text-xs',
				disabled
				? 'text-gray-500 cursor-not-allowed opacity-40'
				: 'hover:bg-white/10 cursor-pointer'
			   ]"
	  >
		<span>{{ label }}</span>
	  </button>
	</component>
  </template>
  
  <script setup>
	import { RouterLink } from 'vue-router'
	
  defineProps({
	to: String,
	icon: String,
	label: String,
	disabled: {type: Boolean, default: false}
  })
  </script>
  