import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'

// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      {/* <div style={{ position: 'absolute', left: '10px', bottom: '10px' }}>
        <TanStackRouterDevtools />
      </div> */}
    </>
  ),
})
