import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/filters/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = [
  'calendar',
  'category',
  'clock',
  'dollar-sign',
  'luggage',
  'map-pin',
  'search',
  'shekel',
] as const
export type IconName = (typeof iconNames)[number]

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="calendar" {...props} />
export const CategoryIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="category" {...props} />
export const ClockIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="clock" {...props} />
export const DollarSignIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="dollar-sign" {...props} />
export const LuggageIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="luggage" {...props} />
export const MapPinIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="map-pin" {...props} />
export const SearchIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="search" {...props} />
export const ShekelIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="shekel" {...props} />
