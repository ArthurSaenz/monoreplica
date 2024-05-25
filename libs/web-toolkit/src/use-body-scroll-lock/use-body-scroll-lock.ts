import { MutableRefObject, useEffect } from 'react'
import scrollLock from 'scroll-lock'

interface Options {
  locked?: boolean
  config?: Record<string, unknown>
}

export const useBodyScrollLock = (
  scrollLockTarget: MutableRefObject<HTMLElement | null>,
  options: Options = {},
): void => {
  useEffect(() => {
    if (!scrollLockTarget.current) {
      return (): void => undefined
    }

    const { locked } = options

    if (typeof locked === 'undefined' || locked) {
      scrollLock.disablePageScroll(scrollLockTarget.current)
    } else if (!locked) {
      scrollLock.enablePageScroll(scrollLockTarget.current || undefined)
    }

    return (): void => {
      scrollLock.enablePageScroll(scrollLockTarget.current || undefined)
      scrollLock.clearQueueScrollLocks()
    }
  }, [scrollLockTarget.current, options])
}

export { scrollLock }
