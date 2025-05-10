import { ref, onMounted, onUnmounted } from 'vue'

// Simule des noms d'utilisateurs et de contests
const users = ['LoopNinja', 'BettyLoops', 'GreenReaper', 'Tokenator']
const contests = ['PS5 Challenge', 'iPhone Loop', 'RTX Madness', 'Switch Battle']

let intervalId = null

export function useActivityFeed() {
  const events = ref([])

  const generateRandomEvent = () => {
    const type = pickRandom(['new_contest', 'hot_loop', 'user_bet', 'contest_won'])
    const id = crypto.randomUUID()

    switch (type) {
      case 'new_contest':
        return {
          id,
          type,
          name: pickRandom(contests)
        }

      case 'hot_loop':
        return {
          id,
          type,
          name: pickRandom(contests),
          percentage: 90 + Math.floor(Math.random() * 10)
        }

      case 'user_bet': {
        const user = pickRandomUser()
        const contest = pickRandomContest()
        return {
          id,
          type,
          user,
          contest,
          amount: [5, 10, 25, 50][Math.floor(Math.random() * 4)]
        }
      }

      case 'contest_won': {
        const user = pickRandomUser()
        const contest = pickRandomContest()
        return {
          id,
          type,
          user,
          contest,
          amount: 100 + Math.floor(Math.random() * 300)
        }
      }

      default:
        return null
    }
  }

  const startFeed = () => {
    intervalId = setInterval(() => {
      const event = generateRandomEvent()
      if (event) events.value.unshift(event)
      if (events.value.length > 30) events.value.pop() // limite du buffer
    }, randomInt(3000, 6000))
  }

  const stopFeed = () => {
    if (intervalId) clearInterval(intervalId)
  }

  onMounted(startFeed)
  onUnmounted(stopFeed)

  return { events }
}

// Helpers
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function pickRandomUser() {
  const name = pickRandom(users)
  return { id: name.toLowerCase(), name }
}

function pickRandomContest() {
  const name = pickRandom(contests)
  return { id: name.toLowerCase().replace(/\s+/g, '-'), name }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
