// Mock de base — à remplacer par axios ou fetch vers l'API réelle
import { mockContests } from '@/shared/mockApi'

/**
 * Simule un appel à l'API pour obtenir la liste des concours
 * @returns {Promise<Array>}
 */
export async function fetchAllContests() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockContests])
    }, 300)
  })
}

/**
 * Simule un appel à l'API pour obtenir un concours spécifique
 * @param {number} id - ID du concours
 * @returns {Promise<Object>}
 */
export async function fetchContestById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const contest = mockContests.find((c) => c.id === Number(id))
      if (contest) {
        resolve({ ...contest })
      } else {
        reject(new Error('Concours introuvable'))
      }
    }, 300)
  })
}

export default {
    fetchAllContests,
    fetchContestById
}
