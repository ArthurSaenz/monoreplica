import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics'

const mapEventParams = (eventObject) => {
  const newObject = {}

  for (const key in eventObject) {
    if (key !== 'event') {
      const eventName = 'event_' + key
      newObject[eventName] = eventObject[key]
    }
  }

  return newObject
}

export const mobilePushEvent = (eventObject) => {
  FirebaseAnalytics.enable()

  let screenName = ''
  if (eventObject.category) {
    screenName = eventObject.category
  }

  /**
   * Platform: Android/iOS
   * Sets the current screen name, which specifies the current visual context in your app.
   * @param screenName - name of the current screen to track
   *        nameOverride - name of the screen class to override
   * @returns instanceId - individual instance id value
   * https://firebase.google.com/docs/analytics/screenviews
   */
  FirebaseAnalytics.setScreenName({
    screenName,
    nameOverride: screenName,
  })

  let eventName = ''
  if (eventObject.action) {
    eventName = eventObject.action
    eventName = eventName.replace(/\s+/g, '_')
  }

  const params = mapEventParams(eventObject)

  /**µ]
   * Platform: Web/Android/iOS
   * Logs an app event.
   * @param name - name of the event to log
   *        params - key/value pairs of properties (25 maximum per event)
   * @returns void
   */
  FirebaseAnalytics.logEvent({
    name: eventName,
    params,
  })
}
