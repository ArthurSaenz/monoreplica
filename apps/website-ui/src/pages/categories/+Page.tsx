import { LayoutPrimary } from '#root/app/layouts'
import { useData } from '#root/app/page-data'

import { CategoriesFiltersController } from '#root/features/categories-filters'
import { CategoriesListController } from '#root/features/categories-list'
import { ProductListController } from '#root/features/product-list'

import type { Data } from './+data'

interface PageProps<T> {
  route?: {
    useLoaderData: () => T
  }
}

export const Page = (props: PageProps<Data>) => {
  const { route } = props

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = useData<Data>({ route })

  return (
    <>
      <LayoutPrimary onBack={() => {}}>
        <CategoriesFiltersController />
        <CategoriesListController />
        <ProductListController />
      </LayoutPrimary>
    </>
  )
}
