// Liste des types d'événements gérés par la console d'activité
export const ACTIVITY_EVENT_TYPES = {
    NEW_CONTEST: 'new_contest',
    HOT_LOOP: 'hot_loop',
    USER_BET: 'user_bet',
    CONTEST_WON: 'contest_won'
  }
  
  // Interface d'un événement d'activité (documentée en JS)
  export function createActivityEvent({
    id,
    type,
    user = null,
    contest = null,
    amount = null,
    percentage = null,
    name = null,
    timestamp = new Date()
  }) {
    return {
      id,
      type,
      user,       // { id: string, name: string }
      contest,    // { id: string, name: string }
      amount,     // nombre de loops misés ou remportés
      percentage, // pourcentage (pour HotLoop)
      name,       // nom du contest (cas "new_contest" ou "hot_loop")
      timestamp   // Date de l'événement
    }
  }
  