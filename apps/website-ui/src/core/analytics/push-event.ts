/* eslint-disable import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import { mobilePushEvent } from '#mobile/mobile-analytics'

const isMobileApp = import.meta.env.VITE_MOBILE_APP === 'true'

export const pushEvent = async (event: Record<string, string>) => {
  if (isMobileApp) {
    try {
      mobilePushEvent(event)
    } catch (error) {
      console.error('mobilePushEvent - error', error)
    }
  }

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  } else {
    console.warn('Analytics (GTM) events should not be called in server!')
    console.warn(event)
  }
}

export const gtm = { pushEvent }
