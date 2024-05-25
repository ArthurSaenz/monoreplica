// import { init as initFullStory } from '@fullstory/browser'
// import SentryFullStory from '@sentry/fullstory'
import * as Sentry from '@sentry/react'

// import { initPerformanceObserver } from '#root/shared/lib/perf-utils'

const envs = {
  prod: 'production',
  stage: 'staging',
  dev: 'dev',
}

export const initMetric = (context?: Record<string, any>) => {
  // initPerformanceObserver()

  // initFullStory({
  //   orgId: '16DX35',
  //   devMode:
  //     import.meta.env.VITE_DOMAIN_ENV === 'dev' || import.meta.env.VITE_DOMAIN_ENV === 'stage' || import.meta.env.DEV,
  // })

  // const dist = import.meta.env.VITE_PLUGIN_SENTRY_CONFIG.dist
  // const release = import.meta.env.VITE_PLUGIN_SENTRY_CONFIG.release

  Sentry.init({
    dsn: 'https://1c5bd855c360ba8587761a0d05643219@o1379100.ingest.sentry.io/4506025994027008',
    // This enables automatic instrumentation (highly recommended),
    // but is not necessary for purely manual usage
    // If you only want to use custom instrumentation:
    // * Remove the `BrowserTracing` integration
    // * add `Sentry.addTracingExtensions()` above your Sentry.init() call
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
      // new SentryFullStory('gulliver', { client: FullStory }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    tracesSampleRate: 1,

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,

    environment: envs[import.meta.env.VITE_DOMAIN_ENV as keyof typeof envs] || 'local',

    // dist,
    // release,

    initialScope: {
      tags: { ...context },
    },
  })
}

interface TErrorBoundaryProps {
  children: React.ReactNode
}

export const ErrorBoundary = (props: TErrorBoundaryProps) => {
  const { children } = props

  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <>
          <div>You have encountered an error</div>
          <div>{(error as unknown as string).toString()}</div>
          <div>{componentStack}</div>
          <button
            onClick={() => {
              {
                /* When resetError() is called it will remove the Fallback component */
              }
              {
                /* and render the Sentry ErrorBoundary's children in their initial state */
              }
              resetError()
            }}
          >
            Click here to reset!
          </button>
        </>
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}
