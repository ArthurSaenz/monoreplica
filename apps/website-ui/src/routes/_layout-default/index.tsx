import { createFileRoute } from '@tanstack/react-router'

import { Page } from '#root/pages/home/+Page'

import { paths } from '#root/shared/lib/paths'

export const Route = createFileRoute(('/_layout-default' + paths.home()) as never)({
  component: Index,
})

function Index() {
  return <Page />
}
