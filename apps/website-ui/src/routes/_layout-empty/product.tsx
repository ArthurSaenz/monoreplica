import { createFileRoute } from '@tanstack/react-router'

import { Page } from '#root/pages/product/+Page'

import { paths } from '#root/shared/lib/paths'

export const Route = createFileRoute(('/_layout-empty' + paths.home()) as never)({
  component: Index,
})

function Index() {
  return <Page />
}
