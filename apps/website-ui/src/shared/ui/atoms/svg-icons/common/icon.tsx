import { type SVGProps } from 'react'

export const href = '/assets/images/svg-sprites/common/icon.svg'

export default function Icon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}

export const iconNames = ['accessibility', 'close-fill', 'info-question', 'sliders-horizontal'] as const
export type IconName = (typeof iconNames)[number]

export const AccessibilityIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="accessibility" {...props} />
export const CloseFillIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="close-fill" {...props} />
export const InfoQuestionIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="info-question" {...props} />
export const SlidersHorizontalIcon = (props: SVGProps<SVGSVGElement>) => <Icon icon="sliders-horizontal" {...props} />
