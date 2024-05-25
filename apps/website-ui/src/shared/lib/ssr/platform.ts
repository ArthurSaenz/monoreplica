import { EDeviceType } from './constants'

export const isSSR = typeof window === 'undefined'

export const isMobileApp = import.meta.env.VITE_MOBILE_APP === 'true'

export const isDevEnv = import.meta.env.VITE_DOMAIN_ENV === 'dev'
export const isStageEnv = import.meta.env.VITE_DOMAIN_ENV === 'stage'

export const detectDevicesType = (): EDeviceType | undefined => {
  if (isMobileApp) return undefined

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return EDeviceType.Mobile
  }
  return EDeviceType.Desktop
}

/**
 * @see This variable is used for mobile only and for local development. For development we use proxy (vite).
 */
export const domainWebsite = import.meta.env.VITE_ORIGIN_DOMAIN || ''

export const isLocalEnv = import.meta.env.MODE === 'development'
