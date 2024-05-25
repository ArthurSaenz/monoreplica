import { paths } from '#root/shared/lib/paths'

import { SvgIconHome, SvgIconInfo, SvgIconQuestion } from './icons'
import { MenuItem } from './types'

export const getMenuItems = (
  items?: { title: string; to: string; search?: Record<string, unknown>; eventName: string; icon: string }[] | null,
): MenuItem[] => [
  {
    title: 'Home',
    eventName: 'Home page',
    to: paths.home(),
    icon: <SvgIconHome />,
    isExternal: false,
  },
  ...(items ? items.map((element) => ({ ...element, icon: <img src={element.icon as string} alt="" /> })) : []),
  {
    title: 'About',
    to: paths.aboutCompany(),
    eventName: 'About company',
    icon: <SvgIconInfo />,
    isExternal: false,
  },
  {
    title: 'FAQ',
    to: paths.faq(),
    eventName: 'FAQ',
    icon: <SvgIconQuestion />,
    isExternal: false,
  },
]
