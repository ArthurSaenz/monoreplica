import { createLazyFileRoute } from '@tanstack/react-router'

import { Page } from '#root/pages/about/+Page'

import { paths } from '#root/shared/lib/paths'

export const Route = createLazyFileRoute(('/_layout-default' + paths.aboutCompany()) as never)({
  component: Index,
})

function Index() {
  return <Page />
}
