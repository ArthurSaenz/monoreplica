import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/hotels/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = ['description', 'facilities', 'geo', 'meal'] as const
export type IconName = (typeof iconNames)[number]

export const DescriptionIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="description" {...props} />
export const FacilitiesIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="facilities" {...props} />
export const GeoIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="geo" {...props} />
export const MealIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="meal" {...props} />
