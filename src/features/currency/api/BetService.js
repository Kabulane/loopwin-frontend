import { useUserStore } from '@/features/user/store/userStore'

export default class BetService {
  static async bet(contestId, amount, loopType) {
    const store = useUserStore()

    const isGreen = loopType === 'green'
    const isBlue = loopType === 'blue'
    if (!isGreen && !isBlue) {
      console.log('[BetService] Invalid bet type')
      return { success : false, error: 'type_invalid'}
    }
    const spend = isGreen ? store.spendGreenLoops : store.spendBlueLoops
    const balance = isGreen ? store.greenLoops : store.blueLoops

    if (amount <= 0) return { success: false, error: 'amount_invalid' }
    if (balance < amount) return { success: false, error: 'not_enough_loops' }

    // TODO : Appel API et handle response ! 
    // try {
    //   const response = await api.placeBet({ contestId, amount, loopType })
    //   if (response.success) {
    //     spend(amount)
    //     return { success: true, data: response.data }
    //   } else {
    //     return { success: false, error: response.error }
    //   }
    // } catch (err) {
    //   return { success: false, error: 'network_error' }
    // }
  }
}