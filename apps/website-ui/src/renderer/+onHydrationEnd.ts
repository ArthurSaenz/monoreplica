import type { OnHydrationEndAsync } from 'vike/types'

import { isDevEnv, isLocalEnv } from '#root/shared/lib/ssr'

// https://vike.dev/onHydrationEnd
export { onHydrationEnd }

const onHydrationEnd: OnHydrationEndAsync = async (): ReturnType<OnHydrationEndAsync> => {
  if (isDevEnv || isLocalEnv) {
    // eslint-disable-next-line no-console
    console.log('Hydration finished; page is now interactive.')
  }
}
