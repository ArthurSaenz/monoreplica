/* eslint-disable import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import { share } from '#mobile/share'
import * as Sentry from '@sentry/react'

export const webShare = async (args: { title: string; text: string; url: string }) => {
  const { title, text, url } = args

  try {
    Sentry.addBreadcrumb({
      category: 'webShareFn',
      message: 'Web share API',
      data: {
        title,
        text,
        url,
      },
      level: 'info',
    })

    await share({
      title,
      text,
      url,
    })
  } catch (error) {
    console.error('Sharing failed:', error)

    Sentry.captureException(error, {
      tags: {
        section: `webShareFn`,
      },
    })
  }
}
