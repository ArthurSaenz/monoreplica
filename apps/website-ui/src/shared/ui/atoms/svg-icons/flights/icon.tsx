import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/flights/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = ['luggage', 'panel-left-close', 'panel-left-open', 'plane-landing', 'plane-takeoff'] as const
export type IconName = (typeof iconNames)[number]

export const LuggageIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="luggage" {...props} />
export const PanelLeftCloseIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="panel-left-close" {...props} />
export const PanelLeftOpenIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="panel-left-open" {...props} />
export const PlaneLandingIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="plane-landing" {...props} />
export const PlaneTakeoffIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="plane-takeoff" {...props} />
