import { paths } from '#root/shared/lib/paths'

interface MenuItem {
  title: string
  to: string
  search?: Record<string, unknown>
  isExternal?: boolean
  actionName?: string
}

export const defineMenuItems = (
  dynamicItems?: { title: string; to: string; search?: Record<string, unknown>; actionName?: string }[],
): MenuItem[] => {
  return [
    ...(dynamicItems ? dynamicItems : []),
    { title: 'About', to: paths.aboutCompany(), actionName: 'About company' },
    { title: 'Faq', to: paths.faq(), actionName: 'FAQ' },
  ]
}
