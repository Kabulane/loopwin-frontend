import { defineStore } from 'pinia'
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'
import { fetchMockContestsByCategory } from '../api/contestService.mock.js'
import EventBus from '../../../app/events/EventBus.js'

export const useContestStore = defineStore('contest', () => {
  const error = ref(null)

  const contestsByCategory = reactive({
    hot: [],
    hybrid: [],
    green: [],
    blue: []
  })

  const loadingByCategory = reactive({
    hot: false,
    hybrid: false,
    green: false,
    blue: false
  })

  async function loadContestsByCategory(category) {
    if (!(category in contestsByCategory)) return
    loadingByCategory[category] = true
    error.value = null
    try {
      const contests = await fetchMockContestsByCategory(category)
      contestsByCategory[category] = contests
    } catch (e) {
      error.value = `Erreur lors du chargement des concours (${category})`
    } finally {
      loadingByCategory[category] = false
    }
  }

  function getContestById(id) {
    return (
      contestsByCategory.hot.find(c => c.id === id) ||
      contestsByCategory.hybrid.find(c => c.id === id) ||
      contestsByCategory.green.find(c => c.id === id) ||
      contestsByCategory.blue.find(c => c.id === id)
    )
  }

  function getAllContestRefsById(id) {
    const results = []
  
    for (const category in contestsByCategory) {
      const match = contestsByCategory[category].find(c => c.id === id)
      if (match) results.push(match)
    }
  
    return results
  }

  function handleContestUpdate({ contestId, deltaGreen, deltaBlue }) {
    const contests = getAllContestRefsById(contestId)
  
    if (contests.length === 0) return
  
    for (const contest of contests) {
      if (typeof deltaGreen === 'number') {
        contest.greenLoops = (contest.greenLoops || 0) + deltaGreen
      }
      if (typeof deltaBlue === 'number') {
        contest.blueLoops = (contest.blueLoops || 0) + deltaBlue
      }
    }
  
    console.log(`[ContestStore] 🎯 Mise à jour de ${contests.length} occurrences du concours ${contestId}`)
  }
  

  function initListeners() {
    EventBus.on('contest_update', handleContestUpdate)
  }

  onUnmounted(() => {
    EventBus.off('contest_update', handleContestUpdate)
  })

  return {
    contestsByCategory,
    loadingByCategory,
    loadContestsByCategory,
    getAllContestRefsById,
    getContestById,
    initListeners,
    error,
    isLoadingHot: computed(() => loadingByCategory.hot),
    isLoadingHybrid: computed(() => loadingByCategory.hybrid),
    isLoadingGreen: computed(() => loadingByCategory.green),
    isLoadingBlue: computed(() => loadingByCategory.blue)
  }
})
