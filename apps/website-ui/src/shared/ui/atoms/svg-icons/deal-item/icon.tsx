import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/deal-item/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = ['door-in', 'door-out', 'luggage', 'plane-landing', 'plane-takeoff'] as const
export type IconName = (typeof iconNames)[number]

export const DoorInIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="door-in" {...props} />
export const DoorOutIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="door-out" {...props} />
export const LuggageIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="luggage" {...props} />
export const PlaneLandingIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="plane-landing" {...props} />
export const PlaneTakeoffIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="plane-takeoff" {...props} />
