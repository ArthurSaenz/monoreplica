import { atom } from 'jotai'
import { loadable } from 'jotai/utils'

import { isDevEnv, isLocalEnv } from '#root/shared/lib/ssr'

import { getConfigManifest } from './library'
import { EAppConfigFieldType, IAppConfig } from './types'

/**
 * @description For mobile app, when user takes the app to the background and then returns to it.
 */
export const $isActiveStatus = atom(0)

const $config = atom<Promise<IAppConfig | null>>(async (get) => {
  // INFO: only trigger when the app is active
  await get($isActiveStatus)

  const configData = await getConfigManifest()

  return configData
})

//#region Config data - Shows catalog
const $categoriesConfig = atom<Promise<any>>(async (get) => {
  const configManifest = await get($config)

  const categoriesList = configManifest?.[EAppConfigFieldType.Categories]

  if (!Array.isArray(categoriesList) || categoriesList.length === 0) {
    throw new Error(`Config manifest for categories is empty or not array`)
  }

  if (isLocalEnv || isDevEnv) {
    // eslint-disable-next-line no-console
    console.log('Categories config data:', 'payload')
  }

  return {
    categoriesList,
  }
})

const $categoriesConfigLoadable = loadable($categoriesConfig)

/**
 * @description Root entry point for categories data.
 */
export const $categoriesListComputed = atom((get) => {
  const categoriesConfigLoadable = get($categoriesConfigLoadable)

  if (categoriesConfigLoadable.state === 'loading' || categoriesConfigLoadable.state === 'hasError')
    return {
      state: categoriesConfigLoadable.state,
      data: null,
    }

  return {
    state: 'hasData' as const,
    data: 'payload',
  }
})

//#endregion Config data - Shows catalog

//#region Mobile versions
export const $mobileVersions = atom<Promise<any | null>>(async (get) => {
  const configManifest = await get($config)

  return configManifest ? configManifest[EAppConfigFieldType.AppVersion] : null
})
//#endregion Mobile versions
