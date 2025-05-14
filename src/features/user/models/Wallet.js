export default class Wallet {
    constructor({ id = null, greenLoops = 0, blueLoops = 0 } = {}) {
      this.id = id
      this.greenLoops = greenLoops
      this.blueLoops = blueLoops
    }
  
    addGreenLoops(amount) {
      this.greenLoops += amount
    }
  
    spendGreenLoops(amount) {
      this.greenLoops = Math.max(0, this.greenLoops - amount)
    }
  
    addBlueLoops(amount) {
      this.blueLoops += amount
    }
  
    spendBlueLoops(amount) {
      this.blueLoops = Math.max(0, this.blueLoops - amount)
    }
  
    toJSON() {
      return {
        id: this.id,
        greenLoops: this.greenLoops,
        blueLoops: this.blueLoops,
      }
    }
  
    static fromJSON(json) {
      return new Wallet(json)
    }
  }
  