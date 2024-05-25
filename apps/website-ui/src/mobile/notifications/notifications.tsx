// import { useEffect } from 'react';
// import { useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Capacitor } from '@capacitor/core'
import { PushNotifications } from '@capacitor/push-notifications'
import { useEffect } from 'react'

const addListeners = async () => {
  await PushNotifications.addListener('registration', (token) => {
    console.info('Registration token:', token.value)
  })

  await PushNotifications.addListener('registrationError', (error) => {
    console.error('Registration error:', error.error)
  })

  await PushNotifications.addListener('pushNotificationReceived', (notification) => {
    // console.log('Push notification received:', notification);
    // eslint-disable-next-line no-console
    console.log(notification)
  })

  // await PushNotifications.addListener('pushNotificationActionPerformed', res => {
  // console.log('Push notification action performed', notification.actionId, notification.inputValue);
  // });

  return null
}

const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions()

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions()
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!')
  }

  await PushNotifications.register()
}

// const getDeliveredNotifications = async () => {
//   const notificationList = await PushNotifications.getDeliveredNotifications()
//   console.log('delivered notifications', notificationList, JSON.stringify(notificationList))
// }

const initNotifications = () => {
  if (Capacitor.getPlatform() === 'web') {
    return null
  }

  // PushNotifications.removeAllDeliveredNotifications()

  //   const isRouterContext = useInRouterContext();
  //   console.log('isRouterContext', isRouterContext);

  // const navigate = useNavigate()
  //   console.log('navigate', navigate)
  // const redirectFromNotification = useCallback((params: string) => {
  //   console.log('inside redirectFromNotification');
  //   navigate(params);
  // }, [navigate])

  addListeners()
  registerNotifications()
  // getDeliveredNotifications();

  PushNotifications.addListener('pushNotificationActionPerformed', (res) => {
    let url = res.notification.data?.url
    if (!url?.length) {
      window.location.assign('/')
      return
    }

    if (url.startsWith('https://www.{{projectName}}/')) {
      url = url.slice(27)
      window.location.assign(url)
      return
    }

    if (url.startsWith('https://{{projectName}}/')) {
      url = url.slice(23)
      window.location.assign(url)
      return
    }

    window.open(url)

    //   navigate(url);
    //     const paramsString = 'directFlightsOnly=false&fromDate=2022-09-05&toDate=2022-09-08&from=TLV&to=LON&adults=2&infants=0&children=0&seniors=0'
    //     const params = JSON.parse('{"' + decodeURI(paramsString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    //     console.log('params', params)
    //     const testUrlString = '/packagesResults?fromDate=2022-08-22&toDate=2022-08-26&from=TLV&to=TLV&adults=2&infants=0&children=0'
    //     redirectFromNotification(testUrlString);
    //     console.log('after test');
  })
  return null
}

export const MobileNotifications = () => {
  useEffect(() => {
    initNotifications()
    // Some general BL
  }, [])

  return null
}
