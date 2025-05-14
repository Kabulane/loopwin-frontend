import User from '../models/User.js'
import Wallet from '../models/Wallet.js'

const mockUser = new User({
  id: 'user-1234',
  tag: 'LooperX',
  username: 'corentin',
  title: 'Glitch Master',
  avatar: 'default-avatar.png', // à adapter selon ton système d'assets
  wallet: new Wallet({
    id: 'wallet-9876',
    greenLoops: 42,
    blueLoops: 73,
  }),
  wins: 15,
  gamesPlayed: 32,
  level: 5,
  clan: 'AlphaLoop',
  badges: ['earlyBird', 'glowChampion'],
  recentContests: ['contest-001', 'contest-002'],
})

export default mockUser