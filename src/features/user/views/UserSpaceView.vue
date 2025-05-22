<template>
  <div class="min-h-screen text-white p-4 lg:p-8">
    <h1 class="text-2xl lg:text-3xl font-bold mb-6 text-center">Mon Espace</h1>

    <!-- Grade et progression -->
    <section class="basic-content-card mb-4 lg:mb-6 max-w-3xl mx-auto">
      <div class="flex items-center gap-4">
        <div class="flex-1 text-nowrap">
          <p class="text-md text-gray-300">Niveau <span class="text-xl font-bold text-green-400">{{ userStore.user.level }}</span></p>
        </div>
        <div class="w-full bg-gray-700/50 rounded-full h-3">
          <div class="bg-green-500 h-3 rounded-full" style="width: 75%"></div>
        </div>
      </div>
    </section>

    <!-- Personnalisation UserSheet -->
    <section class="basic-content-card mb-4 lg:mb-6 max-w-3xl mx-auto">
      <h2 class="text-lg font-semibold mb-3">🧑 Personnalisation</h2>
      <div class=" items-center grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div class="flex items-center">

          <!-- Personnalisation avatar -->
          <img
            :src="userStore.user.avatar"
            alt="Avatar"
            class="w-32 h-32 rounded-full border-2 border-green-400 shadow-md cursor-pointer hover:scale-105 transition"
            @click="showAvatarModal = true"
          />

          <div class="ml-2">
            <p class="text-lg font-bold text-gray-300">{{ userStore.user.username }}</p>
            <!-- Personnalisation Titre-->
            <div
              class="flex items-center gap-2 text-yellow-400 font-bold cursor-pointer hover:text-yellow-300 hover:scale-105 transition"
              @click="showTitleModal = true"
            >
              <svg class="w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
              </svg>
              {{ userStore.user.title }}
            </div>
            
          </div>
        </div>
        <!-- Personnalisation Trophée -->
        <div class="flex gap-4 items-center">
          <img
            :src="`/assets/badges/${userStore.user.badges}.png`"
            alt="Badge"
            class="w-32 h-32 rounded drop-shadow cursor-pointer hover:scale-105 transition"
            @click="showBadgeModal = true"
          />
          <div class="flex flex-col gap-2 text-gray-300">
            <p class="text-lg font-bold">Trophée actif</p>
            <p class="text-sm text-gray-500">Clique sur le badge pour changer</p>
          </div>
        </div>
      </div>

      <!-- Modales -->
      <BaseModal :show="showAvatarModal" @close="showAvatarModal = false">
        <ModalEditAvatar @close="showAvatarModal = false" />
      </BaseModal>

      <BaseModal :show="showTitleModal" @close="showTitleModal = false">
        <ModalEditTitle @close="showTitleModal = false" />
      </BaseModal>

      <BaseModal :show="showBadgeModal" @close="showBadgeModal = false">
        <ModalEditBadge @close="showBadgeModal = false" />
      </BaseModal>
    </section>

    <!-- Mon clan -->
    <section class="basic-content-card mb-4 lg:mb-6 max-w-3xl mx-auto">
      <h2 class="text-lg font-semibold mb-3">🛡️ Mon clan</h2>
      <div class="flex items-center justify-between text-sm text-gray-300">
        <div>
          <p>Clan actuel : <span class="font-medium text-white">Les LoopMasters</span></p>
          <p class="text-xs text-gray-400">Membres : 12 / Victoires collectives : 38</p>
        </div>
        <button class="text-sm text-blue-400 underline">Voir le clan</button>
      </div>
    </section>

    <!-- Mes récompenses -->
    <section class="basic-content-card mb-4 lg:mb-6 max-w-3xl mx-auto">
      <h2 class="text-lg font-semibold mb-3">🏆 Mes récompenses</h2>
      <ul class="space-y-2">
        <li class="bg-gray-700/60 px-3 py-2 rounded-md flex justify-between items-center text-sm">
          <span>Clavier Razer BlackWidow</span>
          <span class="text-green-400">Livré</span>
        </li>
        <li class="bg-gray-700/60 px-3 py-2 rounded-md flex justify-between items-center text-sm">
          <span>Casque Logitech Pro X</span>
          <button class="text-blue-400 underline">Réclamer</button>
        </li>
      </ul>
    </section>

    <!-- Historique d'activité -->
    <section class="basic-content-card mb-4 lg:mb-6 max-w-3xl mx-auto">
      <h2 class="text-lg font-semibold mb-3">🎮 Historique d'activité</h2>
      <div class="grid grid-cols-2 gap-2 text-sm text-gray-300">
        <p>Parties jouées : <span class="font-medium text-white">42</span></p>
        <p>Victoires : <span class="font-medium text-white">7</span></p>
        <p>XP : <span class="font-medium text-white">1 500 / 2 000</span></p>
        <p>Ratio : <span class="font-medium text-white">16.7%</span></p>
      </div>
    </section>

    <!-- Préférences (placeholder) -->
    <section class="basic-content-card max-w-3xl mx-auto">
      <h2 class="text-lg font-semibold mb-3">⚙️ Préférences</h2>
      <p class="text-sm text-gray-400 italic">Options de personnalisation à venir : sons, langue, thème...</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/userStore'
import BaseModal from '../../../shared/components/BaseModal.vue'
import ModalEditAvatar from '../components/modals/ModalEditAvatar.vue'
import ModalEditTitle from '../components/modals/ModalEditTitle.vue'
import ModalEditBadge from '../components/modals/ModalEditBadge.vue'

const showAvatarModal = ref(false)
const showTitleModal = ref(false)
const showBadgeModal = ref(false)

const userStore = useUserStore()
</script>