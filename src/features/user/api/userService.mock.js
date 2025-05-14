import User from '../models/User.js'
import Wallet from '../models/Wallet.js'

async function mockLogin(credentials) {
  await new Promise(resolve => setTimeout(resolve, 500)) // latence simulée

  if (credentials.email !== 'demo@loopwin.com' || credentials.password !== 'secret') {
    throw new Error('Identifiants incorrects')
  }

  return new User({
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
    recentContests: [201, 202, 203],
  })
}

export default {
  mockLogin,
}