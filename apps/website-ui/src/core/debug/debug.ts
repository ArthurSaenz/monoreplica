import { atom } from 'jotai'

export enum Platform {
  Desktop = 'Desktop',
  MobileWeb = 'Mobile Web',
  AppIos = 'App iOS',
  AppAndroid = 'App Android',
}

export interface IDebugInfo {
  platform: Platform
  osVersion: string
  appVersion: string
}

export const $debugInfo = atom<IDebugInfo>({
  platform: undefined,
  osVersion: '',
  appVersion: '',
} as unknown as IDebugInfo)
