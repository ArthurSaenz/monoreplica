import { createFileRoute } from '@tanstack/react-router'

import { Page } from '#root/pages/categories/+Page'
import { data } from '#root/pages/categories/+data'

import { paths } from '#root/shared/lib/paths'

export const Route = createFileRoute(('/_layout-default' + paths.categoriesItem()) as never)({
  component: Index,
  loader: () => data(),
})

function Index() {
  return <Page route={Route} />
}
