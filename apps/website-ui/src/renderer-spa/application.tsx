import { LayoutEmpty } from '#root/app/layouts'
import { modelDebug } from '#root/core/debug'
import { $debugInfo, MobileApplicationInit } from '#root/mobile'
import { Root } from '#root/renderer/root'
import { RouterProvider } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { Suspense } from 'react'
import type { PageContext } from 'vike/types'

import { ErrorBoundary, initMetric } from '../renderer/monitoring'
import { router } from './router'

const Page = () => <></>

initMetric()

export interface ApplicationViewProps {
  initDebugInfo: any
}

const ApplicationView = (props: ApplicationViewProps) => {
  const { initDebugInfo } = props

  // INFO: not used, remove from here and types
  const debugInfo = {
    version: '',
  }
  const config = {
    Layout: LayoutEmpty,
  }

  const data = {
    pageProps: {},
  }

  return (
    <ErrorBoundary>
      <Root
        pageContext={{ config, Page, debugInfo, data } as unknown as PageContext}
        initialStoresValues={[[modelDebug.$debugInfo, initDebugInfo]]}
      >
        <RouterProvider router={router} />
      </Root>

      <MobileApplicationInit />
    </ErrorBoundary>
  )
}

export const Application = () => {
  const initDebugInfo = useAtomValue($debugInfo)

  return (
    <Suspense>
      <ApplicationView initDebugInfo={initDebugInfo} />
    </Suspense>
  )
}
