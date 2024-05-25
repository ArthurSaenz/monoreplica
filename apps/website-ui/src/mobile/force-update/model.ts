import { configManifestModel } from '#root/core/general-config'
import { Capacitor } from '@capacitor/core'
// import { Dialog } from '@capacitor/dialog'
import { AppUpdate } from '@capawesome/capacitor-app-update'
import { atom } from 'jotai'
import { atomWithStorage, loadable } from 'jotai/utils'

import { determineUpdateVersionType } from './library'

//#region Declaration of atom stores
/**
 * @description The latest semver version which was showed for update.
 *
 * INFO: This is needed to show the update only once for the same version.
 */
export const $flexiableShowedVersion = atomWithStorage<string>('FLEXIABLE_VERSION_SHOWED', '', undefined, {
  getOnInit: true,
})

export const $versionUpdateTypeModal = atom<null | {
  type: ReturnType<typeof determineUpdateVersionType>
  onApproveCallback: () => void
}>(null)

const $mobileForceUpdateVersionLoadable = loadable(
  atom<Promise<any | null>>(async (get) => {
    const config = await get(configManifestModel.$mobileVersions)

    return config
  }),
)

const $mobileForceUpdateVersionManifest = atom((get) => {
  const payload = get($mobileForceUpdateVersionLoadable)

  return payload.state === 'hasData' ? payload.data : null
})

const $mobileCurrentVersionLoadable = loadable(
  atom<Promise<string>>(async () => {
    let result: any = null
    try {
      result = await AppUpdate.getAppUpdateInfo()
    } catch (error) {
      // await Dialog.alert({
      //   title: 'getAppUpdateInfo error',
      //   message: JSON.stringify(error),
      // })
    }

    return result.currentVersionName //  result.currentVersionCode
  }),
)

const $mobileCurrentVersion = atom((get) => {
  const payload = get($mobileCurrentVersionLoadable)

  return payload.state === 'hasData' ? payload.data : null
})
//#endregion Declaration of atom stores

//#region Computed atom stores
export const $versionUpdateTypeAndPlatform = atom((get) => {
  const flexiableShowedVersion = get($flexiableShowedVersion)
  const currentVersion = get($mobileCurrentVersion)
  const versionsManifest = get($mobileForceUpdateVersionManifest)
  const platform = Capacitor.getPlatform() as 'ios' | 'android'

  if (versionsManifest && currentVersion) {
    const minAvailableVersion = versionsManifest[platform]

    const updateType = determineUpdateVersionType({
      currentVersion,
      minAvailableVersion,
      flexiableShowedVersion,
    })

    return [updateType, platform, minAvailableVersion, currentVersion] as const
  }

  return [null, platform, null, null] as const
})
//#endregion Computed atom stores

//#region Entry point for launch process update
interface LaunchUpdateVersionArgs {
  versionUpdateType: ReturnType<typeof determineUpdateVersionType>
  platform: 'ios' | 'android'
}

export const launchUpdateVersion = atom(null, (_get, set, args: LaunchUpdateVersionArgs) => {
  const { versionUpdateType, platform } = args

  // await Dialog.alert({
  //   title: 'launchUpdateVersion',
  //   message: `versionUpdate: ${versionUpdate}, platform: ${platform}`,
  // })

  if (!versionUpdateType) return

  set($versionUpdateTypeModal, {
    type: versionUpdateType,
    onApproveCallback: () => {
      if (platform === 'android') {
        if (versionUpdateType === 'imediateUpdate') {
          performImmediateUpdate()
        }

        if (versionUpdateType === 'flexibleUpdate') {
          startFlexibleUpdate()
        }
      }

      if (platform === 'ios') {
        openAppStore()
      }
    },
  })
})
//#endregion Entry point for launch process update

//#region Handlers for operate with update
export const openAppStore = async () => {
  await AppUpdate.openAppStore()
}

/**
 * Only available for Android.
 *
 * Example see here:
 * @see https://developer.android.com/guide/playcore/in-app-updates
 *
 * Docs:
 * @see https://github.com/capawesome-team/capacitor-app-update?tab=readme-ov-file#performimmediateupdate
 */
const performImmediateUpdate = async () => {
  // const result = await AppUpdate.getAppUpdateInfo()
  // if (result.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE && result.immediateUpdateAllowed) {
  // await AppUpdate.openAppStore()
  await AppUpdate.performImmediateUpdate()
  // }
}

/**
 * Only available for Android.
 *
 * Example see here:
 * @see https://developer.android.com/guide/playcore/in-app-updates
 *
 * Docs:
 * @see https://github.com/capawesome-team/capacitor-plugins/tree/main/packages/app-update#startflexibleupdate
 */
const startFlexibleUpdate = async () => {
  // const result = await AppUpdate.getAppUpdateInfo()
  // if (result.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE && result.flexibleUpdateAllowed) {
  await AppUpdate.startFlexibleUpdate()
  // }
}
//#endregion Handlers for operate with update

// throw new Error('This is a forced crash for testing Crashlytics');
