// src/features/contest/api/mockContests.js

import { Contest } from '../models/Contest.js'

const now = new Date()
const in1h = new Date(now.getTime() + 1 * 60 * 60 * 1000)
const in6h = new Date(now.getTime() + 6 * 60 * 60 * 1000)
const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000)
const in3d = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)

export const mockContests = {
  hot: [
    new Contest({
      contestId: 1,
      type: 'hybrid',
      title: 'PlayStation 5 Silver',
      description: 'Concours en cours, participe vite !',
      image: 'assets/prizes/ps5.png',
      price: 499,
      loopsNeeded: 100,
      greenLoops: 112,
      blueLoops: 15,
      endOfContest: in1h
    }),
    new Contest({
      contestId: 2,
      type: 'hybrid',
      title: 'iPhone 15 Pro',
      description: 'Concours explosif, timer déclenché !',
      image: '/assets/prizes/iphone15.png',
      price: 1200,
      loopsNeeded: 150,
      greenLoops: 160,
      blueLoops: 30,
      endOfContest: in6h
    })
  ],

  hybrid: [
    new Contest({
			contestId: 1,
			type: 'hybrid',
			title: 'PlayStation 5 Silver',
			description: 'Concours en cours, participe vite !',
			image: 'assets/prizes/ps5.png',
			price: 499,
			loopsNeeded: 100,
			greenLoops: 85,
			blueLoops: 15,
			endOfContest: in1h
		}),
		new Contest({
			contestId: 3,
			type: 'hybrid',
			title: 'AirPods',
			description: 'Pour un maximum de confort auditif !',
			image: 'assets/prizes/airpods.png',
			price: 135,
			loopsNeeded: 350,
			greenLoops: 160,
			blueLoops: 30,
			endOfContest: null
		}),
		new Contest({
			contestId: 2,
			type: 'hybrid',
			title: 'iPhone 15 Pro',
			description: 'Concours explosif, timer déclenché !',
			image: 'assets/prizes/iphone15.png',
			price: 1200,
			loopsNeeded: 150,
			greenLoops: 160,
			blueLoops: 30,
			endOfContest: in6h
		}),
    new Contest({
      contestId: 5,
      type: 'hybrid',
      title: 'Mini projecteur LED',
      description: 'Pour des soirées ciné LoopWin',
      image: 'assets/prizes/projector.png',
      price: 80,
      loopsNeeded: 75,
      greenLoops: 35,
      blueLoops: 40,
      endOfContest: null
    }),
    new Contest({
      contestId: 6,
      type: 'hybrid',
      title: 'Enceinte Bluetooth JBL',
      description: 'Un son de qualité en Loops mixés',
      image: 'assets/prizes/speaker.png',
      price: 70,
      loopsNeeded: 60,
      greenLoops: 25,
      blueLoops: 35,
      endOfContest: null
    }),
    new Contest({
      contestId: 7,
      type: 'hybrid',
      title: 'Caméra de streaming HD',
      description: 'Idéal pour streamer ton talent',
      image: 'assets/prizes/camera.png',
      price: 110,
      loopsNeeded: 90,
      greenLoops: 45,
      blueLoops: 50,
      endOfContest: null
    }),
    new Contest({
      contestId: 8,
      type: 'hybrid',
      title: 'Réveil connecté gaming',
      description: 'Wake up Looper !',
      image: 'assets/prizes/alarm.png',
      price: 45,
      loopsNeeded: 50,
      greenLoops: 20,
      blueLoops: 30,
      endOfContest: null
    })
  ],

  green: [
    new Contest({
      contestId: 9,
      type: 'green',
      title: 'MacBook Air M2',
      description: 'Concours 100% GreenLoops',
      image: 'assets/prizes/macbook.png',
      price: 1200,
      loopsNeeded: 200,
      greenLoops: 90,
      blueLoops: 0,
      endOfContest: null
    }),
    new Contest({
      contestId: 10,
      type: 'green',
      title: 'Écran ultra-wide 34"',
      description: 'Pour une immersion totale',
      image: 'assets/prizes/monitor.png',
      price: 400,
      loopsNeeded: 150,
      greenLoops: 60,
      blueLoops: 0,
      endOfContest: null
    }),
    new Contest({
      contestId: 11,
      type: 'green',
      title: 'Chaise gamer ergonomique',
      description: 'Confort + GreenLoops',
      image: 'assets/prizes/chair.png',
      price: 300,
      loopsNeeded: 100,
      greenLoops: 75,
      blueLoops: 0,
      endOfContest: null
    })
  ],

  blue: [
    new Contest({
      contestId: 12,
      type: 'blue',
      title: '🎁 Goodies LoopWin',
      description: 'BlueLoops only, tente ta chance !',
      image: 'assets/prizes/goodies.png',
      price: 25,
      loopsNeeded: 50,
      greenLoops: 0,
      blueLoops: 45,
      endOfContest: null
    }),
    new Contest({
      contestId: 13,
      type: 'blue',
      title: '🃏 Booster Pokémon Écarlate',
      description: 'Concours BlueLoop only',
      image: 'assets/prizes/pokemon.png',
      price: 12,
      loopsNeeded: 30,
      greenLoops: 0,
      blueLoops: 30,
      endOfContest: null
    }),
    new Contest({
      contestId: 14,
      type: 'blue',
      title: '🍿 Carte ciné 2 places',
      description: 'BlueLoop + Popcorn 🍿',
      image: 'assets/prizes/cinema.png',
      price: 20,
      loopsNeeded: 40,
      greenLoops: 0,
      blueLoops: 35,
      endOfContest: null
    }),
    new Contest({
      contestId: 16,
      type: 'blue',
      title: 'Pack de chaussettes du looper',
      description: 'Oui, des chaussettes. Stylées.',
      image: 'assets/prizes/socks.png',
      price: 15,
      loopsNeeded: 20,
      greenLoops: 0,
      blueLoops: 20,
      endOfContest: null
    }),
    new Contest({
      contestId: 18,
      type: 'blue',
      title: '🧃 Gourde isotherme LoopWin',
      description: 'Reste frais avec tes BlueLoops',
      image: 'assets/prizes/bottle.png',
      price: 22,
      loopsNeeded: 35,
      greenLoops: 0,
      blueLoops: 30,
      endOfContest: null
    })
  ]
}
