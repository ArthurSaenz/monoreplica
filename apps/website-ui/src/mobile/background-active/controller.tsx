import { configManifestModel } from '#root/core/general-config'
import { App } from '@capacitor/app'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { ls } from '@monorepo/web-toolkit'

const LS_EXPIRE_TIME = 60 * 10 // 10 minutes
const LS_BACKGROUND_ACTIVE = 'LS_BACKGROUND_ACTIVE'

export const MobileBackgroundActiveController = () => {
  const setStatusActive = useSetAtom(configManifestModel.$isActiveStatus)

  useEffect(() => {
    ls.set(LS_BACKGROUND_ACTIVE, 'REFRESHED', LS_EXPIRE_TIME)

    App.addListener('appStateChange', async () => {
      await new Promise((r) => setTimeout(r, 50))

      const statusLs = ls.get(LS_BACKGROUND_ACTIVE)

      if (statusLs !== 'REFRESHED') {
        setStatusActive((prev) => prev + 1)

        ls.set(LS_BACKGROUND_ACTIVE, 'REFRESHED', LS_EXPIRE_TIME)
      }
    })
  }, [])

  return null
}
