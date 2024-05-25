import type { Config } from 'vike/types'

// See https://vike.dev/data-fetching
export default {
  passToClient: ['debugInfo'],
  clientRouting: true,
  hydrationCanBeAborted: true,
  prefetchStaticAssets: 'viewport', // TODO: think if need it
  // extends: vikeReact
  meta: {
    title: {
      // Make the value of `title` available on both the server and client-side
      env: { server: true, client: true },
    },
    description: {
      // Make the value of `description` available on both the server and client-side
      env: { server: true, client: true },
    },
    Layout: {
      // Load the value of /pages/**/+Layout.tsx on both the server and client
      env: { server: true, client: true },
    },
  },
} satisfies Config

// INFO: maybe we don't need it
// INFO: copied from https://github.com/vikejs/vike-react/blob/main/packages/vike-react/src/types/Config.ts
// https://vike.dev/meta#typescript
// declare global {
//   // As a Vike user, use Vike.Config instead of VikePackages.ConfigVikeReact (see https://vike.dev/meta#typescript)
//   namespace VikePackages {
//     interface ConfigVikeReact {
//       /** The page's root React component */
//       Page?: () => React.ReactNode
//       /** A component, usually common to several pages, that wraps the root component `Page` */
//       Layout?: (props: { children: React.ReactNode }) => JSX.Element
//     }
//   }
// }
