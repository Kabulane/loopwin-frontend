<template>
    <Teleport to="body">
      <TransitionRoot :show="show" as="template">
        <Dialog as="div" class="relative z-50" @close="$emit('close')">
          <!-- Overlay -->
          <TransitionChild
            as="template"
            enter="transition-opacity duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </TransitionChild>
  
          <!-- Contenu -->
          <div class="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="transition duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="transition duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="relative bg-white/5 backdrop-blur-md border border-white/10 text-gray-200 rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl flex flex-col items-center text-center space-y-4"
              >
                <!-- Close Button -->
                <button @click="$emit('close')" class="absolute top-3 right-3 group transition" aria-label="Fermer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white group-hover:text-cyan-400 animate-glow transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10" stroke-opacity="0.5" />
                    <path d="M15 9l-6 6M9 9l6 6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
  
                <slot />
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </Teleport>
  </template>
  
  <script setup>
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
  
  defineProps({ show: Boolean })
  defineEmits(['close'])
  </script>
  
  <style scoped>
  @keyframes glowPulse {
    0%, 100% {
      filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.4));
    }
    50% {
      filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));
    }
  }
  
  .animate-glow {
    animation: glowPulse 2s infinite ease-in-out;
  }
  </style>