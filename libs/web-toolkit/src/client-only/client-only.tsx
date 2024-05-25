import { lazy, startTransition, useEffect, useState } from 'react'

/**
 * @see https://vike.dev/ClientOnly
 */
export const ClientOnly = <T,>(props: {
  load: () => Promise<{ default: React.ComponentType<T> } | React.ComponentType<T>>
  children: (Component: React.ComponentType<T>) => React.ReactNode
  fallback: React.ReactNode
  deps?: Parameters<typeof useEffect>[1]
}) => {
  const { load, children, fallback, deps = [] } = props

  const [Component, setComponent] = useState<React.ComponentType<unknown> | null>(null)

  useEffect(() => {
    const loadComponent = () => {
      const Component = lazy(() =>
        load()
          .then((LoadedComponent) => {
            return {
              default: () => children('default' in LoadedComponent ? LoadedComponent.default : LoadedComponent),
            }
          })
          .catch((error) => {
            console.error('Component loading failed:', error)
            return { default: () => <p>Error loading component.</p> }
          }),
      )
      setComponent(Component)
    }

    startTransition(() => {
      loadComponent()
    })
  }, deps)

  return Component ? <Component /> : fallback
}
