import { navigate } from '#root/core/navigation'
import { Capacitor } from '@capacitor/core'
import { InAppBrowser } from '@capgo/inappbrowser'
import { useEffect } from 'react'

const initInternalBrowser = () => {
  if (Capacitor.getPlatform() === 'web') {
    return null
  }

  if (Capacitor.isNativePlatform()) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.open = async (url) => InAppBrowser.openWebView({ url })
    // ios
    InAppBrowser.addListener('urlChangeEvent', (state: any) => {
      const urlParts = state.url.match(/^http(s?):\/\/(.*).{{projectName}}\/(.*)/)
      if (!urlParts?.length) {
        return
      }

      InAppBrowser.close()
      const paymentUrl = `/${urlParts[urlParts.length - 1]}`

      // TODO: probably need to parse in future
      navigate({ to: paymentUrl })
    })
  }

  return null
}

export const MobileInternalBrowser = () => {
  useEffect(() => {
    initInternalBrowser()
    // Some general BL
  }, [])

  return null
}
