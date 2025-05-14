import User from '../models/User.js'
import Wallet from '../models/Wallet.js'

const user = new User({
  id: 42,
  tag: 39877,
  username: 'SharkyX',
  title: 'NewLooper',
  avatar: '/assets/avatars/cybershark.png',
  wallet: new Wallet({
    id: 'wallet-42',
    greenLoops: 40,
    blueLoops: 120,
  }),
  wins: 21,
  gamesPlayed: 33,
  level: 8,
  clan: 'AquaClan',
  badges: ['firstLoopGG'],
  recentContests: [201, 202, 203]
})

export default user