import { useUserStore } from '@/features/user/store/userStore'
import EventBus from '@/app/events/EventBus.js'

class BetService {
  static async bet(contestId, amount, loopType) {
    const store = useUserStore()

    const isGreen = loopType === 'green'
    const isBlue = loopType === 'blue'

    if (!isGreen && !isBlue) {
      console.log('[BetService] Invalid bet type')
      return { success: false, error: 'type_invalid' }
    }

    const spend = isGreen ? store.spendGreenLoops : store.spendBlueLoops

    if (amount <= 0) return { success: false, error: 'amount_invalid' }
    
    if (!store.hasEnoughLoops(loopType, amount)) {
      return { success: false, error: 'not_enough_loops' }
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        // Mise à jour du solde utilisateur
        spend(amount)

        // 💡 Événement simulé de mise à jour du concours
        EventBus.emit('contest_update', {
          contestId,
          deltaGreen: isGreen ? amount : 0,
          deltaBlue: isBlue ? amount : 0,
          timestamp: Date.now()
        })

        resolve({
          success: true,
          data: {
            contestId,
            loopType,
            amount,
            newBalance: isGreen ? store.greenLoops : store.blueLoops
          }
        })
      }, 300)
    })
  }
}

export default BetService
