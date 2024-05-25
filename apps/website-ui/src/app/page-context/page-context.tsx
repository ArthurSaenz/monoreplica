import React, { useContext } from 'react'
import type { PageContext } from 'vike/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Context = React.createContext<PageContext>(undefined as any)

export function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export const usePageContext = () => {
  const pageContext = useContext(Context)

  return pageContext
}
