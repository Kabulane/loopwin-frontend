<template>
	<RouterLink
			:to="to"
			class="flex items-center gap-3 text-md text-slate-200 font-bold hover:text-green-400 transition  rounded hover:bg-gray-800"
		>
		<button
    class="relative inline-flex items-center justify-center px-6 py-2
           font-semibold rounded-xl border border-gray-600
           text-white bg-gradient-to-br from-gray-800 to-gray-900
           hover:from-gray-700 hover:to-gray-800
           hover:shadow-[0_0_12px_#22c55e66,0_0_20px_#3b82f666]
           focus:outline-none focus:ring-2 focus:ring-green-500/70
           transition-all duration-300 ease-in-out
           active:scale-95"
  >
			<!-- <span class="text-lg">{{ icon }}</span> -->
			<span>{{ label }}</span>
		</button>
	</RouterLink>
</template>

<script setup>
	defineProps({
		to: String,
		icon: String,
		label: String
	})
</script>
  