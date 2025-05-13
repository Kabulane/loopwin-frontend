import { computed, isRef } from 'vue'

const allowedGreenTypes = ['none', 'green', 'hybrid']
const allowedBlueTypes = ['none', 'blue', 'hybrid']

export function getContestTypeFlags(contestType) {
    return {
      isGreenType: contestType === 'green' || contestType === 'hybrid' || contestType === 'none',
      isBlueType:  contestType === 'blue'  || contestType === 'hybrid' || contestType === 'none',
      isHybridType: contestType === 'hybrid',
      isNoneType: contestType === 'none',
    }
  }