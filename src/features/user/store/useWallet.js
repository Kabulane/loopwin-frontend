import { computed } from 'vue'
import { useUserStore } from './useUserStore'

export default function useWallet() {
  const { user } = useUserStore()

  const greenLoops = computed(() => user.value?.wallet?.greenLoops || 0)
  const blueLoops = computed(() => user.value?.wallet?.blueLoops || 0)

  const spendGreenLoops = (amount) => {
    if (user.value && user.value.wallet) {
      user.value.wallet.greenLoops = Math.max(0, user.value.wallet.greenLoops - amount)
    }
  }
  const spendBlueLoops = (amount) => {
    if (user.value && user.value.wallet) {
      user.value.wallet.blueLoops = Math.max(0, user.value.wallet.greenLoops - amount)
    }
  }

  const addGreenLoops = (amount) => {
    if (user.value && user.value.wallet) {
      user.value.wallet.greenLoops += amount
    }
  }

  const addBlueLoops = (amount) => {
    if (user.value && user.value.wallet) {
      user.value.wallet.blueLoops += amount
    }
  }

  return {
    greenLoops,
    blueLoops,
    spendGreenLoops,
    addGreenLoops,
    addBlueLoops,
  }
}