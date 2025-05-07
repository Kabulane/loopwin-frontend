// Bet.js — représente la participation d'un utilisateur à un concours

export class Bet {
  constructor({ userId, contestId, greenLoops = 0, blueLoops = 0 }) {
    this.userId = userId
    this.contestId = contestId
    this.greenLoops = greenLoops
    this.blueLoops = blueLoops
  }

  get totalLoops() {
    return this.greenLoops + this.blueLoops
  }

  get display() {
    return `${this.totalLoops} Loops (${this.greenLoops} GreenLoops, ${this.blueLoops} BlueLoops)`
  }

  getChancesRelativeTo(contest) {
    if (contest.totalLoops === 0) return '0%'
    const ratio = (this.totalLoops / contest.totalLoops) * 100
    return `${ratio.toFixed(1)}%`
  }

  get hasParticipated() {
    return this.totalLoops > 0
  }
}

export default Bet;