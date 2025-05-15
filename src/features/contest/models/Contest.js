// Contest.js — représente un jeu concours

export class Contest {
  constructor({
    id,
    type,
    title,
    description,
    image,
    price,
    loopsNeeded,
    greenLoops = 0,
    blueLoops = 0,
    endOfContest
  }) {
    this.id = id
    this.type = type
    this.title = title
    this.description = description
    this.image = image
    this.price = price
    this.loopsNeeded = loopsNeeded
    this.greenLoops = greenLoops
    this.blueLoops = blueLoops
    this.endOfContest = null != endOfContest ? new Date(endOfContest) : null
  }

  get totalLoops() {
    return this.greenLoops + this.blueLoops
  }

  get hasStarted() {
    return this.greenLoops >= this.loopsNeeded
  }

  get isFinished() {
    return new Date() >= this.endOfContest
  }

  get loopsRemaining() {
    return Math.max(this.loopsNeeded - this.greenLoops, 0)
  }

  get timeLeft() {
    const now = new Date()
    const diff = this.endOfContest - now
    if (diff <= 0) return '00:00:00'

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0')
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0')
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  // Affichage du timer ou des tokens restants
  get displayTime() {
    return this.hasStarted
      ? `<span class="text-lg">⏱ Fin dans : <span class="pulse-glow text-red-500 font-bold">${this.timeLeft}</span></span>`
      : `Encore <span class="pulse-glow text-green-500 font-bold">${this.loopsRemaining} GreenLoops</span> nécessaires pour activer le tirage`
  }

  get greenProgress() {
    return Math.min(this.greenLoops / this.loopsNeeded, 1)
  }

  get blueProgress() {
    return Math.min(this.blueLoops / this.loopsNeeded, 1)
  }
}

export default Contest;