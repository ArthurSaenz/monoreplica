import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/shows/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = ['clock', 'seating', 'ticket'] as const
export type IconName = (typeof iconNames)[number]

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="clock" {...props} />
export const SeatingIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="seating" {...props} />
export const TicketIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="ticket" {...props} />
