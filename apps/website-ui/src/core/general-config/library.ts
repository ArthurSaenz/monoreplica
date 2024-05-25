import * as Sentry from '@sentry/react'

import { idb } from '@monorepo/web-toolkit'

import { httpClient } from '#root/shared/lib/http-client'
import { domainWebsite, isDevEnv, isLocalEnv, isMobileApp, isSSR } from '#root/shared/lib/ssr'

import { IAppConfig } from './types'

// const MANIFEST_FILE_URL = domainWebsite + '/catalog/config-manifest.json'
const MANIFEST_FILE_URL = domainWebsite + '/dynamic/client/config-manifest.json'

const THROTTLE_TIME_IN_SECONDS = 60 * 60 * 24 * 7 // 7 days

export const getConfigManifest = async (): Promise<IAppConfig | null> => {
  if (isSSR) return Promise.resolve(null)

  try {
    Sentry.addBreadcrumb({
      category: 'getConfigManifest',
      message: 'fetching the main manifest file',
      data: {
        url: MANIFEST_FILE_URL,
      },
      level: 'info',
    })

    const payload = await httpClient.fetch<IAppConfig>(MANIFEST_FILE_URL, {
      method: 'GET',
    })

    if (isMobileApp) {
      // eslint-disable-next-line no-console
      console.log('App manifest config:', MANIFEST_FILE_URL, payload.body)
    }

    return payload.body
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        section: `getConfigManifest`,
      },
    })

    return null
  }
}

/**
 * Retrieves configuration data from a specified URL. Generic function.
 * Used for config-manifest and other config files (mobile-versions in force-update, etc.)
 *
 * @param key - The key used to identify the configuration data.
 * @param url - The URL from which to fetch the configuration data.
 * @returns A promise that resolves to the fetched configuration data.
 * @throws An error if the URL is undefined or if there is an error during the fetch operation.
 */
export const getConfigData = async <T>(key: string, url?: string): Promise<T> => {
  try {
    const dataCacheKey = `${key}.data`
    const etagCacheKey = `${key}.etag`

    const currentEtag = await idb.get<string>(etagCacheKey)

    Sentry.addBreadcrumb({
      category: 'getConfigData',
      message: 'fetching the one config file',
      data: {
        currentEtag,
        key,
        url,
      },
      level: 'info',
    })

    if (!url) {
      throw new Error(`Config manifest url of ${key} is undefined`)
    }

    // const uri = domainWebsite + url
    const uri = url

    const response = await httpClient.fetch<T>(uri, {
      method: 'GET',
      headers: currentEtag
        ? {
            'If-None-Match': currentEtag,
          }
        : undefined,
    })

    if (response.status === 304) {
      const payload = (await idb.get<T>(dataCacheKey)) as T

      return payload
    }

    if (isLocalEnv || isDevEnv) {
      // eslint-disable-next-line no-console
      console.log('App config:', key, response.headers)
    }

    await idb.set(etagCacheKey, response.headers?.etag, THROTTLE_TIME_IN_SECONDS)
    await idb.set(dataCacheKey, response.body, THROTTLE_TIME_IN_SECONDS)

    return response.body
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        section: `getConfigData`,
        key,
        url,
      },
    })

    throw error
  }
}
