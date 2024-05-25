import { SafeArea } from 'capacitor-plugin-safe-area'

import { MobileAdb } from './admob'
import { MobileBackgroundActiveController } from './background-active'
import { MobileInternalBrowser } from './browser'
import { MobileForceUpdate } from './force-update'
import { MobileNotifications } from './notifications'

SafeArea.getSafeAreaInsets().then(({ insets }) => {
  console.log(insets)
})

SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
  console.log(statusBarHeight, 'statusbarHeight')
})

/**
 * @see Entry point for mobile application initialization
 */
export const MobileApplicationInit = () => {
  return (
    <>
      <MobileForceUpdate />
      <MobileNotifications />
      <MobileInternalBrowser />
      <MobileBackgroundActiveController />
      <MobileAdb />
    </>
  )
}
