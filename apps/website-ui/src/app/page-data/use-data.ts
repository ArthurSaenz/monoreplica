import { isMobileApp } from '#root/shared/lib/ssr'

import { usePageContext } from '../page-context'

interface UseDataArgs<T> {
  route?: {
    useLoaderData: () => T
  }
}

/** https://vike.dev/useData */
export const useData = <Data>(args?: UseDataArgs<Data>) => {
  const { route } = args || {}

  const { data } = usePageContext()

  if (isMobileApp && route) {
    const payload = route.useLoaderData()

    return payload
  }

  return data as Data
}
