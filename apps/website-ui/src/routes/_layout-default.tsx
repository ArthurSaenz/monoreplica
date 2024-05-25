import { LayoutDefault } from '#root/app/layouts'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-default' as never)({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <LayoutDefault>
      <Outlet />
    </LayoutDefault>
  )
}
