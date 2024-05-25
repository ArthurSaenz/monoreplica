import { useEffect } from 'react'

import { gtm } from './push-event'
import { EAnalyticsCategory } from './types'

interface UsePageViewArgs {
  pagePath: string
  pageTitle: string
}

export const usePageView = (arg0: UsePageViewArgs) => {
  const { pagePath, pageTitle } = arg0

  useEffect(() => {
    gtm.pushEvent({
      event: 'Pageview',
      pagePath,
      pageTitle,
    })
  }, [pagePath, pageTitle])

  useEffect(() => {
    window.addEventListener('beforeunload', tabClosedEvent)

    setTimeout(() => {
      gtm.pushEvent({
        event: 'sendTags',
      })
    }, 3000)

    return () => {
      window.removeEventListener('beforeunload', tabClosedEvent)
    }
  }, [])
}

export const tabClosedEvent = () => {
  gtm.pushEvent({
    event: 'interaction',
    category: EAnalyticsCategory.Other,
    action: 'Tab closed OR Switched to another tab',
  })
}
