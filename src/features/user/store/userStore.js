import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
//import { userApi } from '../api/userApi'
import User from '../models/User'
import mockApi from '../../../shared/mockApi'


export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  async function login(credentials) {
		// TODO : Appel mock
    console.log("oups")
		const data = await mockApi.mockLogin(credentials)
    
		initFromApi(data)
    console.log('👤 User connecté :', user.value)
	}

	function initFromApi(data) {
    console.log("oupss")
		user.value = new User(data)
    console.log("User connected : {}", data)
	}

  function resetUser() {
    user.value = null
  }

  function addGreenLoops(amount) {
    user.value?.addGreenLoops(amount)
  }

  function addBlueLoops(amount) {
    user.value?.addBlueLoops(amount)
  }

  function recordGameResult(won) {
    user.value?.addGameResult(won)
  }

  const winRate = computed(() => {
    const u = user.value
    return u?.gamesPlayed > 0 ? (u.wins / u.gamesPlayed) * 100 : 0
  })

  const displayName = computed(() => {
    const u = user.value
    return u ? `${u.username} #${u.id.toString().slice(-4)}` : ''
  })

  return {
    user,
    login,
    resetUser,
    addGreenLoops,
    addBlueLoops,
    recordGameResult,
    winRate,
    displayName,
  }
}, 
{
  persist: true
})
