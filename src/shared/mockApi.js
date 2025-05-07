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

// Exemple de mock de concours
export const mockContests = [
  {
    contestId: 1,
    title: 'iPhone 15 Pro Max',
    description : 'Gagne ton iPhone !!!!!',
    image: '/assets/prizes/iphone15.png',
    value: 1399,
    loopsNeeded: 5389,
    greenLoops: 4335,
    blueLoops: 5700,
    endOfContest: '2025-05-30T23:59:59Z'
  },
  {
    contestId: 2,
    title: 'PS5 Slim Edition',
    description : 'La plus belle de toutes les PS !',
    image: '/assets/prizes/ps5.png',
    value: 499,
    loopsNeeded: 843,
    greenLoops: 124,
    blueLoops: 352,
    endOfContest: '2025-05-30T23:59:59Z'
  },
  {
    contestId: 3,
    title: 'AirPods Pro 2',
    description : 'La musique comme vous ne l\'avez jamais entendue.',
    image: '/assets/prizes/airpods.png',
    value: 149,
    loopsNeeded: 367,
    greenLoops: 97,
    blueLoops: 112,
    endOfContest: '2025-05-30T23:59:59Z'
  }
]

export default {
  mockLogin, mockContests
}