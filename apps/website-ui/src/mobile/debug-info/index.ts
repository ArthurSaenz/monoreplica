import { IDebugInfo, Platform } from '#root/core/debug'
import { App } from '@capacitor/app'
import { Device } from '@capacitor/device'
import { atom } from 'jotai'

export const getDebugInfo = async (): Promise<IDebugInfo> => {
  try {
    const deviceInfo = await Device.getInfo()
    const appInfo = await App.getInfo()

    const initDebugInfo = {
      platform: PLATFORM_MAP[deviceInfo.platform],
      osVersion: deviceInfo.osVersion,
      appVersion: appInfo.version,
    } as IDebugInfo

    return initDebugInfo
  } catch (error) {
    console.error('Error getting debug info', error)

    const initDebugInfo = {
      platform: '',
      osVersion: '',
      appVersion: '',
    } as unknown as IDebugInfo

    return initDebugInfo
  }
}

export const $debugInfo = atom(async () => {
  const payload = await getDebugInfo()

  return payload
})

const PLATFORM_MAP = {
  ios: Platform.AppIos,
  android: Platform.AppAndroid,
  web: 'none',
} as const
