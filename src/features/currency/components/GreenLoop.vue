<template>
  <div
    @click="handleClick"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative rounded-full flex items-center justify-center transition-all duration-200 select-none"
    :class="[
      sizeClass,
      armed ? 'ring-4 ring-green-400/50' : '',
      glowClass,
      borderClass,
      isDisabled ? 'opacity-50 grayscale cursor-not-allowed' : 'cursor-pointer',
      isShaking ? 'shake-hard' : '',
      isFlashing ? 'brightness-125 saturate-200' : ''
    ]"
  >
    <!-- Tooltip désactivé -->
    <div
      v-if="isDisabled && isHovered"
      class="absolute bottom-full mb-1 text-xs bg-gray-800 text-white px-2 py-1 rounded  whitespace-nowrap z-50"
    >
      Pas assez de GreenLoops
    </div>

    <!-- Halo tournant -->
    <div class="absolute inset-0 rounded-full border-2 border-green-400 animate-spin-slow opacity-20"></div>

    <!-- Icône SVG de validation -->
    <Transition name="fade">
      <svg
        v-if="armed"
        class="absolute z-20 w-6 h-6 text-green-300 animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </Transition>

    <!-- Texte central -->
    <span v-if="!armed" class="relative text-white font-bold text-sm z-10">+{{ amount }}</span>

    <!-- Flash lumineux explosif -->
    <Transition name="fade">
      <div
        v-if="isFlashing"
        class="absolute inset-0 rounded-full bg-green-400/60 animate-big-flash ring-8 ring-green-400/50"
      ></div>
    </Transition>

    <!-- Flash SVG radial -->
    <Transition name="fade">
      <svg
        v-if="isFlashing"
        class="absolute inset-0 w-full h-full animate-halo pointer-events-none z-30"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="rgba(34,255,160,0.8)"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
    </Transition>

    <!-- Bulles flottantes -->
    <transition-group name="float-up" tag="div">
      <div
        v-for="item in floatingAmounts"
        :key="item.id"
        class="absolute -top-4 text-green-300 font-bold text-xs animate-float pointer-events-none"
        :style="{
          left: `calc(50% + ${item.offset}%)`,
          transform: `translateX(-50%) scale(${item.scale})`
        }"
      >
        +{{ item.value }}
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useUserStore } from '@/features/user/store/userStore'
import BetService from '@/features/currency/api/BetService.mock.js'

const props = defineProps({
  contestId: { type: Number, required: true },
  amount: { type: Number, required: true },
  rarity: { type: String, default: 'normal' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['confirm'])
const isHovered = ref(false)

const userStore = useUserStore()

const isDisabledByWallet = computed(() => {
  const wallet = userStore.user?.wallet
  return !wallet || wallet.greenLoops < props.amount
})

const isDisabled = computed(() => props.disabled || isDisabledByWallet.value)

const armed = ref(false)
const isShaking = ref(false)
const isFlashing = ref(false)
let unarmTimeout = null

async function handleClick(event) {
  event.stopPropagation()

  if (isDisabled.value) return

  if (!armed.value) {
    armed.value = true
    clearTimeout(unarmTimeout)
    unarmTimeout = setTimeout(() => {
      armed.value = false
    }, 3000)
  } else {
    armed.value = false

    const result = await BetService.bet(props.contestId, props.amount, 'green')

    if (result.success) {
      emit('confirm', props.amount)
      triggerFloat()

      isShaking.value = true
      setTimeout(() => (isShaking.value = false), 400)

      isFlashing.value = true
      setTimeout(() => (isFlashing.value = false), 500)
    } else {
      console.warn(`[GreenLoop] Erreur de mise : ${result.error}`)
    }
  }
}

const floatingAmounts = reactive([])

function triggerFloat() {
  const id = Date.now() + Math.random()
  const offset = Math.floor(Math.random() * 30) - 15
  const scale = 0.9 + Math.random() * 0.3

  floatingAmounts.push({ id, value: props.amount, offset, scale })

  setTimeout(() => {
    const index = floatingAmounts.findIndex(item => item.id === id)
    if (index !== -1) floatingAmounts.splice(index, 1)
  }, 600)
}

const glowClass = computed(() => {
  switch (props.rarity) {
    case 'epic':
      return 'hover:shadow-[0_0_18px_rgba(132,239,130,0.8)]'
    case 'mythic':
      return 'hover:shadow-[0_0_22px_rgba(34,255,160,1)]'
    default:
      if (props.amount >= 50) return 'hover:shadow-[0_0_20px_rgba(34,197,94,0.9)]'
      if (props.amount >= 10) return 'hover:shadow-[0_0_14px_rgba(34,197,94,0.7)]'
      if (props.amount >= 5) return 'hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]'
      return 'hover:shadow-[0_0_8px_rgba(34,197,94,0.4)]'
  }
})

const borderClass = computed(() => {
  if (props.amount >= 50) return 'border-[9px] border-green-500'
  if (props.amount >= 10) return 'border-[6px] border-green-500'
  if (props.amount >= 5) return 'border-[4px] border-green-500'
  return 'border-[3px] border-green-500'
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-10 h-10 text-xs'
    case 'lg': return 'w-16 h-16 text-lg'
    default: return 'w-12 h-12 text-sm'
  }
})
</script>

<style scoped>
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}

@keyframes float-up {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-16px); opacity: 0; }
}
.animate-float {
  animation: float-up 0.6s ease-out forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes shake-hard {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
}
.shake-hard {
  animation: shake-hard 0.4s ease;
}

@keyframes big-flash {
  0% {
    transform: scale(1);
    opacity: 0.9;
    filter: blur(0);
  }
  50% {
    transform: scale(1.8);
    opacity: 0.5;
    filter: blur(4px);
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
    filter: blur(10px);
  }
}
.animate-big-flash {
  animation: big-flash 0.4s ease-out forwards;
}

@keyframes halo {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(3.2);
    opacity: 0;
  }
}
.animate-halo {
  animation: halo 0.6s ease-out forwards;
}
</style>
