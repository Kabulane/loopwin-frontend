// src/mocks/mockApi.js
export async function mockLogin(credentials) {
  await new Promise(resolve => setTimeout(resolve, 500)) // latence simulée

  if (credentials.email !== 'demo@loopwin.com' || credentials.password !== 'secret') {
    throw new Error('Identifiants incorrects')
  }

  return {
    id: 42,
    username: 'SharkyX',
    avatar: '/assets/avatars/cybershark.png',
    greenLoops: 40,
    blueLoops: 120,
    wins: 21,
    gamesPlayed: 33,
    level: 8,
    clan: 'AquaClan',
    badges: ['championS1', 'earlyBird'],
    recentContests: [201, 202, 203],
  }
}

export default {
  mockLogin
}