import {
  AdMob,
  AdOptions,
  AdmobConsentStatus,
  BannerAdOptions,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob'
import { Capacitor } from '@capacitor/core'
import { useEffect } from 'react'

// import { ls } from '@monorepo/web-toolkit'

// const AD_MOB_LS_NAME = '__ad_mob'

const INTERSITIAL_ANDROID_ID = '/136431902,22500763949/{{projectName}}/Android/Android_interstitial'
const INTERSITIAL_IOS_ID = '/136431902,22500763949/{{projectName}}/IOS/iOS_interstitial'

const STICKY_BANNER_ANDROID_ID = '/136431902,22500763949/{{projectName}}/Android/Android_Sticky_Banner'
const STICKY_BANNER_IOS_ID = '/136431902,22500763949/{{projectName}}/IOS/iOS_sticky_banner'

const INVERSTIAIAL_AD_UNIT_ID_BY_PLATFORM = {
  android: INTERSITIAL_ANDROID_ID,
  ios: INTERSITIAL_IOS_ID,
} as const

const STICKY_BANNER_AD_UNIT_ID_BY_PLATFORM = {
  android: STICKY_BANNER_ANDROID_ID,
  ios: STICKY_BANNER_IOS_ID,
} as const

async function initAdMob(): Promise<void> {
  await AdMob.initialize()

  const [trackingInfo, consentInfo] = await Promise.all([
    AdMob.trackingAuthorizationStatus(),
    AdMob.requestConsentInfo(),
  ])

  if (trackingInfo.status === 'notDetermined') {
    /**
     * If you want to explain TrackingAuthorization before showing the iOS dialog,
     * you can show the modal here.
     * ex)
     * const modal = await this.modalCtrl.create({
     *   component: RequestTrackingPage,
     * });
     * await modal.present();
     * await modal.onDidDismiss();  // Wait for close modal
     **/

    await AdMob.requestTrackingAuthorization()
  }

  const authorizationStatus = await AdMob.trackingAuthorizationStatus()
  if (
    authorizationStatus.status === 'authorized' &&
    consentInfo.isConsentFormAvailable &&
    consentInfo.status === AdmobConsentStatus.REQUIRED
  ) {
    await AdMob.showConsentForm()
  }

  // Mute sound in the ads
  AdMob.setApplicationMuted({ muted: true })
  AdMob.setApplicationVolume({ volume: 0 })

  const platform = Capacitor.getPlatform() as 'android' | 'ios'

  //#region AdMob intersitial ad
  // const isAdMobShowed = ls.get(AD_MOB_LS_NAME)
  const isAdMobShowed = false

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!isAdMobShowed) {
    // ls.set(AD_MOB_LS_NAME, true, 3600)

    const adUnitId = INVERSTIAIAL_AD_UNIT_ID_BY_PLATFORM[platform]

    const options: AdOptions = {
      adId: adUnitId,
      // adId: 'ca-app-pub-3940256099942544/1033173712', // for testing
      // isTesting: true,
    }
    await AdMob.prepareInterstitial(options)
    await AdMob.showInterstitial()
  }

  //#endregion AdMob intersitial ad

  //#region AdMob banner ad
  const bannerAdUnitId = STICKY_BANNER_AD_UNIT_ID_BY_PLATFORM[platform]

  const bannerOptions: BannerAdOptions = {
    adId: bannerAdUnitId,
    adSize: BannerAdSize.BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
    // isTesting: true
    // npa: true
  }

  AdMob.showBanner(bannerOptions)
  //#endregion AdMob banner ad
}

export const MobileAdb = () => {
  useEffect(() => {
    // Show ad on mobiles
    initAdMob()
  }, [])

  return null
}
