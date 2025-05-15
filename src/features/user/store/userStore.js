import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import userServiceMock from '../api/userService.mock.js'
import User from '../models/User.js'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  async function login(credentials) {
    const data = await userServiceMock.mockLogin(credentials)
    initFromApi(data)
    console.log('👤 User connecté :', user.value)
  }

  function initFromApi(data) {
    user.value = data instanceof User ? data : new User(data)
  }

  function resetUser() {
    user.value = null
  }

  function addGreenLoops(amount) {
    user.value?.addGreenLoops(amount)
  }

  function spendGreenLoops(amount) {
    user.value?.spendGreenLoops(amount)
  }

  function addBlueLoops(amount) {
    user.value?.addBlueLoops(amount)
  }

  function spendBlueLoops(amount) {
    user.value?.spendBlueLoops(amount)
  }

  function recordGameResult(won) {
    user.value?.addGameResult(won)
  }

  function hasEnoughLoops(type, amount) {
    const current = type === 'green' ? user.value?.wallet.greenLoops : user.value?.wallet.blueLoops
    return (typeof current === 'object' && 'value' in current ? current.value : current) >= amount
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
    spendGreenLoops,
    addBlueLoops,
    spendBlueLoops,
    recordGameResult,
    hasEnoughLoops,
    winRate,
    displayName,
  }
},
{
  persist: true
})
