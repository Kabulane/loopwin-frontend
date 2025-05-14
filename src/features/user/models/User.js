import Wallet from './Wallet.js'

export default class User {
  constructor({
    id,
    tag,
    username,
    title,
    avatar,
    wallet = new Wallet(),
    wins = 0,
    gamesPlayed = 0,
    level = 1,
    clan = null,
    badges = [],
    recentContests = [],
  }) {
    this.id = id
    this.tag = tag
    this.username = username
    this.title = title
    this.avatar = avatar
    this.wallet = wallet instanceof Wallet ? wallet : new Wallet(wallet)
    this.wins = wins
    this.gamesPlayed = gamesPlayed
    this.level = level
    this.clan = clan
    this.badges = badges
    this.recentContests = recentContests
  }

  get winRate() {
    return this.gamesPlayed > 0 ? (this.wins / this.gamesPlayed) * 100 : 0
  }

  get loopRatio() {
    return this.wallet.greenLoops + this.wallet.blueLoops
  }

  get displayName() {
    return `${this.username} #${this.id?.toString().slice(-4) ?? '0000'}`
  }

  addGreenLoops(amount) {
    this.wallet.addGreenLoops(amount)
  }

  addBlueLoops(amount) {
    this.wallet.addBlueLoops(amount)
  }

  spendGreenLoops(amount) {
    this.wallet.spendGreenLoops(amount)
  }

  spendBlueLoops(amount) {
    this.wallet.spendBlueLoops(amount)
  }

  addGameResult(won = false) {
    this.gamesPlayed++
    if (won) this.wins++
  }

  toJSON() {
    return {
      id: this.id,
      tag: this.tag,
      username: this.username,
      title: this.title,
      avatar: this.avatar,
      wallet: this.wallet.toJSON(),
      wins: this.wins,
      gamesPlayed: this.gamesPlayed,
      level: this.level,
      clan: this.clan,
      badges: this.badges,
      recentContests: this.recentContests,
    }
  }

  static fromJSON(json) {
    return new User({
      ...json,
      wallet: Wallet.fromJSON(json.wallet),
    })
  }
}
