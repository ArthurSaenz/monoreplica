import { atom } from 'jotai'

/**
 * Use after apply filters on packages and flights results
 */
export const scrollToTop = atom(null, () => {
  const isMobile = window.matchMedia('(max-width: 930px)').matches

  if (isMobile) {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    })
  }
})
