// Simule un flux de mise à jour WebSocket avec setInterval
export function useMockWebSocket(onMessage) {
    const interval = setInterval(() => {
      const fakeUpdate = generateRandomContestUpdate()
      console.log('[MockWS] Contest update:', fakeUpdate)
      onMessage(fakeUpdate)
    }, 5000)
  
    // Fonction de nettoyage
    return () => {
      clearInterval(interval)
    }
  }
  
  function generateRandomContestUpdate() {
    const id = Math.floor(Math.random() * 3) + 1
    return {
      id,
      progress: Math.floor(Math.random() * 100),
      participants: Math.floor(Math.random() * 500),
      updatedAt: new Date().toISOString()
    }
  }

  export default {
    useMockWebSocket,
    generateRandomContestUpdate
  }
  