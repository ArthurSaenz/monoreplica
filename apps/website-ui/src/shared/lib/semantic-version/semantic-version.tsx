import { useEffect } from 'react'

declare global {
  interface Window {
    _app?: Record<string, unknown>
  }
}

export const SemanticVersion = () => {
  useEffect(() => {
    /**
     * @see Version
     * @description Semantic version of application
     */
    window._app = window._app || {}
    window._app.version = window._app.VITE_APP_VERSION
    window._app.env = import.meta.env.VITE_DOMAIN_ENV
  }, [])

  return null
}
