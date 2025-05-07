export default class User {
  constructor({
    id,
    username,
    avatar,
    greenLoops = 0,
    blueLoops = 0,
    wins = 0,
    gamesPlayed = 0,
    level = 1,
    clan = null,
    badges = [],
    recentContests = [],
  }) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
    this.greenLoops = greenLoops;
    this.blueLoops = blueLoops;
    this.wins = wins;
    this.gamesPlayed = gamesPlayed;
    this.level = level;
    this.clan = clan;
    this.badges = badges;
    this.recentContests = recentContests;
  }

  get winRate() {
    return this.gamesPlayed > 0 ? (this.wins / this.gamesPlayed) * 100 : 0;
  }

  get loopRatio() {
    return this.greenLoops + this.blueLoops;
  }

  get displayName() {
    return `${this.username} #${this.id.toString().slice(-4)}`;
  }

  addGreenLoops(amount) {
    this.greenLoops += amount;
  }

  addBlueLoops(amount) {
    this.blueLoops += amount;
  }

  addGameResult(won = false) {
    this.gamesPlayed++;
    if (won) this.wins++;
  }
}
