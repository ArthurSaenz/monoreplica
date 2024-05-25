import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { MobileUpdateModal } from '#root/shared/ui/organisms/mobile-update-modal'

import * as model from './model'

export const MobileForceUpdate = () => {
  const [versionUpdateType, platform, minAvailableVersion, currentVersion] = useAtomValue(
    model.$versionUpdateTypeAndPlatform,
  )
  const [versionUpdateTypeModal, setVersionUpdateTypeModal] = useAtom(model.$versionUpdateTypeModal)
  const setFlexiableShowedVersion = useSetAtom(model.$flexiableShowedVersion)
  const launchUpdateVersion = useSetAtom(model.launchUpdateVersion)

  useEffect(() => {
    if (versionUpdateType) {
      launchUpdateVersion({
        versionUpdateType,
        platform,
      })

      setFlexiableShowedVersion(minAvailableVersion)
    }
  }, [versionUpdateType, platform, minAvailableVersion])

  useEffect(() => {
    /**
     * @see Version
     * @description Semantic version of application
     */
    window._app = window._app || {}
    window._app.versionApp = currentVersion
  }, [currentVersion])

  return (
    <>
      {versionUpdateTypeModal?.type && (
        <MobileUpdateModal
          activeCategoryColor="#fc64b9" // INFO: hardcoded, cause we don't have access to the css theme here and in reality user can't change home page.
          type={versionUpdateTypeModal.type}
          onApprove={versionUpdateTypeModal.onApproveCallback}
          onClose={() => setVersionUpdateTypeModal(null)}
        />
      )}
    </>
  )
}
