import '#root/app/globals.css'
import { PageContextProvider } from '#root/app/page-context'
import { getPageTitle } from '#root/app/page-meta'
import { ScriptGtm, usePageView } from '#root/core/analytics'
import { Provider as JotaiProvider, WritableAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import type { PageContext } from 'vike/types'

import { E2EHydrationComp } from '@monorepo/web-toolkit'

import { SemanticVersion } from '#root/shared/lib/semantic-version'
import { isMobileApp } from '#root/shared/lib/ssr'
import { MobileStatusBar } from '#root/shared/ui/atoms/mobile-status-bar'

export interface TPageShellProps {
  pageContext: PageContext
  children: React.ReactNode
  initialStoresValues: Iterable<readonly [WritableAtom<unknown, [any], unknown>, unknown]>
}

export function PageShell(props: TPageShellProps) {
  const { pageContext, children, initialStoresValues } = props

  usePageView({
    pagePath: pageContext.urlOriginal,
    pageTitle: getPageTitle(pageContext),
  })

  return (
    <>
      <PageContextProvider pageContext={pageContext}>
        <JotaiProvider>
          <HydrateAtoms initialValues={initialStoresValues}>
            <MainProvider>{children}</MainProvider>
          </HydrateAtoms>
        </JotaiProvider>
      </PageContextProvider>
    </>
  )
}

/**
 * MainProvider component is a place where third-party scripts are connected.
 * It uses the optimizeModel to initialize Google Optimize and modelFldSiteCode to use FldSiteCode for GTM.
 * It also renders several child components such as E2EHydrationComp, SemanticVersion, GoogleAdsMetaController,
 * ExperimentsScriptVwo and Scripts etc.
 * @param props.children - The child components to be rendered.
 * @returns The rendered child components along with the third-party scripts.
 */
const MainProvider = (props: { children: React.ReactNode }) => {
  const { children } = props

  // INFO: example
  // modelFldSiteCode.useFldSiteCodeForGtm(commonAnalytics)

  return (
    <>
      {isMobileApp && <MobileStatusBar />}
      {children}
      <E2EHydrationComp />
      <SemanticVersion />
      <ScriptGtm />
      {/* INFO: This is a placeholder for the sticky banner */}
      {isMobileApp && <div style={{ height: '50px' }} />}
    </>
  )
}

const HydrateAtoms = (props: { initialValues: TPageShellProps['initialStoresValues']; children: JSX.Element }) => {
  const { initialValues, children } = props

  useHydrateAtoms(new Map(initialValues))

  return children
}
