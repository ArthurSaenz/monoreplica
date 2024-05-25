import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/static/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = ['airplane', 'pants', 'tickets'] as const
export type IconName = (typeof iconNames)[number]

export const AirplaneIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="airplane" {...props} />
export const PantsIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="pants" {...props} />
export const TicketsIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="tickets" {...props} />
