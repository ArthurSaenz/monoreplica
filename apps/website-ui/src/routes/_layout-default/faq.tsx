import { createFileRoute } from '@tanstack/react-router'

import { Page } from '#root/pages/faq/+Page'
import { data } from '#root/pages/faq/+data'

import { paths } from '#root/shared/lib/paths'

export const Route = createFileRoute(('/_layout-default' + paths.faq()) as never)({
  component: Index,
  loader: () => data(),
})

function Index() {
  return <Page route={Route} />
}
