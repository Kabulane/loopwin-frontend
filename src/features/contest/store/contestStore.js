import { defineStore } from 'pinia'
import { ref, computed, onUnmounted } from 'vue'
import { fetchAllContests, fetchContestById } from '@/features/contest/api/contestApi'
import { useMockWebSocket } from '@/features/contest/utils/mockWebSocket' // à créer
import { Contest } from '@/features/contest/models/Contest'

export const useContestStore = defineStore('contest', () => {
  // État
  const contests = ref([])
  const selectedContest = ref(null)
  const loading = ref(false)
  const error = ref(null)

  let unsubscribeWebSocket = null

  // Getters
  const allContests = computed(() => contests.value)
  const currentContest = computed(() => selectedContest.value)
  const isLoading = computed(() => loading.value)

  // Actions
  async function loadContests() {
    loading.value = true
    error.value = null
    try {
      const data = await fetchAllContests()
			console.log(data)
    	contests.value = data.map(obj => new Contest(obj))
			console.log(contests.value)
    } catch (err) {
      console.error('Erreur chargement concours :', err)
      error.value = err.message || 'Erreur inconnue'
    } finally {
      loading.value = false
    }
  }

  async function selectContest(id) {
    loading.value = true
    error.value = null
    try {
      selectedContest.value = new Contest(await fetchContestById(id))
    } catch (err) {
      console.error('Erreur sélection concours :', err)
      error.value = err.message || 'Erreur inconnue'
    } finally {
      loading.value = false
    }
  }

  function updateContestInStore(updated) {
    const index = contests.value.findIndex(c => c.id === updated.id)
    if (index !== -1) {
      contests.value[index] = { ...contests.value[index], ...updated }
    } else {
      contests.value.push(updated)
    }
  }

  function startWebSocketListener() {
    if (unsubscribeWebSocket) return
    unsubscribeWebSocket = useMockWebSocket(updateContestInStore)
  }

  function stopWebSocketListener() {
    if (unsubscribeWebSocket) {
      unsubscribeWebSocket()
      unsubscribeWebSocket = null
    }
  }

  // Nettoyage auto si utilisé dans un composant
  onUnmounted(() => {
    stopWebSocketListener()
  })

  return {
    // state
    contests,
    selectedContest,
    loading,
    error,

    // getters
    allContests,
    currentContest,
    isLoading,

    // actions
    loadContests,
    selectContest,
    updateContestInStore,
    startWebSocketListener,
    stopWebSocketListener,
  }
})
