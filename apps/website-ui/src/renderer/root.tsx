import { LayoutDefault } from '#root/app/layouts'
import { WritableAtom } from 'jotai'
import type { PageContext } from 'vike/types'

import { PageShell } from './page-shell'

interface RootProps {
  pageContext: PageContext
  children: React.ReactNode
  initialStoresValues: Iterable<readonly [WritableAtom<unknown, [any], unknown>, unknown]>
}

export const Root = (props: RootProps) => {
  const { children, pageContext, initialStoresValues } = props

  const Layout = pageContext.config.Layout || LayoutDefault

  return (
    <PageShell pageContext={pageContext} initialStoresValues={initialStoresValues}>
      <Layout>{children}</Layout>
    </PageShell>
  )
}
