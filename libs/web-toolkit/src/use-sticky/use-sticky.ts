import throttle from 'lodash/throttle'
import { RefObject, useEffect, useRef, useState } from 'react'

interface UseStickyProps {
  defaultSticky?: boolean
}

export const HEADER_STICKY_HEIGHT = 50

// let lastScrollTop = 0

/**
 * This is a custom hook for sticky component.
 *
 * @example
 *     const [ref, isSticky, isScrolledTop] = useSticky({ defaultSticky: false })
 *
 */
export const useSticky = (props: UseStickyProps): [RefObject<HTMLDivElement>, boolean, boolean] => {
  const { defaultSticky } = props

  const [isSticky, setIsSticky] = useState(defaultSticky || false)
  const [isScrolledTop, setScrolledTop] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const st = window.scrollY

        setScrolledTop(st > HEADER_STICKY_HEIGHT)

        // const isScrollDown = st > lastScrollTop
        // lastScrollTop = st <= 0 ? 0 : st

        // const isShowSticky =
        //   window.scrollY > HEADER_STICKY_HEIGHT
        //     ? ref.current.getBoundingClientRect().bottom <= 0 && isScrollDown
        //     : false

        const isShowSticky = st > ref.current.getBoundingClientRect().height + ref.current.getBoundingClientRect().top

        setIsSticky(isShowSticky)
      }
    }

    const throttledFn = throttle(handleScroll, 100)

    window.addEventListener('scroll', throttledFn)

    return () => {
      window.removeEventListener('scroll', throttledFn)
    }
  }, [])

  return [ref, isSticky, isScrolledTop]
}
