import { CapacitorConfig } from '@capacitor/cli'

const isAndroid = process.argv.includes('android')

const config: CapacitorConfig = {
  appId: isAndroid ? 'com.devsense.{{projectName}}' : 'com.{{projectName}}.{{projectName}}',
  appName: '{{projectName}}',
  webDir: './dist',
  loggingBehavior: 'production',
  ios: {
    contentInset: 'always',
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen',
      useDialog: true,
    },
  },
}

export default config
