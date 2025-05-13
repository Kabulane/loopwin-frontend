import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { fetchMockContestsByCategory } from '../api/contestService.mock.js' // temporaire

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

  function getContestById(id){
    console.log(contestsByCategory.hot.find(c => c.contestId === id))
    return (
      contestsByCategory.hot.find(c => c.contestId === id) ||
      contestsByCategory.hybrid.find(c => c.contestId === id) ||
      contestsByCategory.green.find(c => c.contestId === id) ||
      contestsByCategory.blue.find(c => c.contestId === id)
    )
  }

  return {
    contestsByCategory,
    loadingByCategory,
    loadContestsByCategory,
    getContestById,
    error,
    isLoadingHot: computed(() => loadingByCategory.hot),
    isLoadingHybrid: computed(() => loadingByCategory.hybrid),
    isLoadingGreen: computed(() => loadingByCategory.green),
    isLoadingBlue: computed(() => loadingByCategory.blue)
  }
})
