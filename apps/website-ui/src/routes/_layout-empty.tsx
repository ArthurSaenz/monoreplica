import { LayoutEmpty } from '#root/app/layouts'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-empty' as never)({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <LayoutEmpty>
      <Outlet />
    </LayoutEmpty>
  )
}
