
import { mockContests } from './mockContests.js'

/**
 * Simule un appel backend pour obtenir les concours d'une catégorie donnée
 * @param {string} category - 'hot' | 'hybrid' | 'green' | 'blue'
 * @returns {Promise<Array>} liste de concours filtrés
 */
export async function fetchMockContestsByCategory(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contests = mockContests[category] || []
      resolve([...contests]) // copie défensive
    }, 300) // délai simulé (ms)
  })
}
