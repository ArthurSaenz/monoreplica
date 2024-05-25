import { useEffect } from 'react'

declare global {
  interface Window {
    _e2eData?: Record<string, unknown>
  }
}

export const E2EHydrationComp = () => {
  useEffect(() => {
    /**
     * @see E2E
     * @description e2e data for suites
     */
    window._e2eData = window._e2eData || {}
    window._e2eData.isReadyHydration = true
  }, [])

  return null
}
