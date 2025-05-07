<template>
	<div class="min-h-screen flex items-center justify-center">
		<h1>Bienvenue sur LoopWin</h1>
		<div v-if="userStore.user">
		<p>👋 Bonjour {{ userStore.user.username }} !</p>
		<p>GreenLoops : {{ userStore.user.greenLoops }}</p>
		<p>BlueLoops : {{ userStore.user.blueLoops }}</p>
		</div>
		<div v-else>
		<p>Veuillez vous connecter.</p>
		</div>
	</div>
</template>
  
<script setup>
import GlitchBackground from '../../shared/components/GlitchBackground.vue';
import { useUserStore } from '../../features/user/store/userStore';

const userStore = useUserStore()

</script>
  
<style scoped>
</style>