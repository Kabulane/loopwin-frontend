import { useUserStore } from '../../user/store/userStore'

class BetService {
  static bet(contestId, amount, loopType) {
    const store = useUserStore()

    const spend = isGreen ? store.spendGreenLoops : store.spendBlueLoops

    if (typeof spend !== 'function') {
      console.warn(`[BetService] Méthode de dépense inconnue pour "${loopType}"`)
      return
    }

    console.log(`🎯 Pari de ${amount} ${isGreen ? 'GreenLoop' : 'BlueLoop'} sur concours ${contestId}`)

    // 💡 TODO : vérification de solde à terme ?
    spend(amount)

    // 💡 TODO : appel futur à l'API de participation
    // return api.placeBet({ contestId, amount, loopType })
  }
}

export default BetService
