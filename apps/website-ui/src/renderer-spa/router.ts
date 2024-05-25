import { createRouter } from '@tanstack/react-router'
import queryString from 'query-string'

// Import the generated route tree
import { routeTree } from '../routeTree.gen'

// For example, we use `query-string` to render arrays in bracket notation:
// output: ?key[]=value1&key[]=value2

function customStringifier(searchObject: Record<string, any>) {
  return Object.keys(searchObject || {}).length > 0
    ? '?' + queryString.stringify(searchObject, { encode: false, arrayFormat: 'bracket-separator' })
    : ''
}

function customParser(searchString: any) {
  return queryString.parse(searchString, { arrayFormat: 'bracket-separator' })
}

// Create a new router instance
export const router = createRouter({
  routeTree,
  stringifySearch: customStringifier,
  parseSearch: customParser,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  interface Register {
    router: typeof router
  }
}
