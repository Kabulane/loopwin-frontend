<template>
    <div class="min-h-screen flex items-center justify-center">
      <form @submit.prevent="handleLogin" class="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm space-y-4">
        <h2 class="text-xl font-semibold text-center">Connexion</h2>
  
        <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 bg-gray-700 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  
        <input v-model="password" type="password" placeholder="Mot de passe" class="w-full px-4 py-2 bg-gray-700 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded transition">Se connecter</button>
  
        <p v-if="error" class="text-sm text-red-400 text-center">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../../user/store/userStore'
  
  const email = ref('')
  const password = ref('')
  const error = ref(null)
  
  const userStore = useUserStore()
  const router = useRouter()
  
  async function handleLogin() {
    error.value = null
    console.log("ici")
    try {
      await userStore.login({ email: email.value, password: password.value })
      router.push({ name: 'Home' })
    } catch (err) {
      error.value = err.message
    }
  }
  </script>
  
  <style scoped>
  input:focus {
    box-shadow: 0 0 0 2px #3b82f6;
  }
  </style>
  