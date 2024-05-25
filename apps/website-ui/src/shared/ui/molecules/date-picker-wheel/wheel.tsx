/* eslint-disable react/no-array-index-key */
import clsx from 'clsx'
import { TrackDetails, useKeenSlider } from 'keen-slider/react'
import { useEffect, useRef, useState } from 'react'

import styles from './wheel.module.scss'

export interface WheelProps {
  initIdx?: number
  label?: string
  length: number
  loop?: boolean
  perspective?: 'left' | 'right'
  setValue?: (relative: number, absolute: number) => string
  width: number
  onChange: (arg: TrackDetails) => void
  value: TrackDetails | null
}

const wheelSize = 16
const slideDegree = 360 / wheelSize

export const Wheel = (props: WheelProps) => {
  const { perspective, length, loop, initIdx, setValue, label, width, onChange, value } = props

  const slides = length
  const slidesPerView = loop ? 9 : 1

  const size = useRef(0)

  // const [sliderState, setSliderState] = useState<TrackDetails | null>(null)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      number: slides,
      origin: loop ? 'center' : 'auto',
      perView: slidesPerView,
    },
    vertical: true,
    initial: initIdx || 0,
    loop,
    dragSpeed: (value) => {
      const height = size.current
      return value * (height / ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) / slidesPerView)
    },
    created: (s) => {
      size.current = s.size
    },
    updated: (s) => {
      size.current = s.size
    },
    detailsChanged: (s) => {
      onChange(s.track.details)
    },
    rubberband: !loop,
    mode: 'free-snap',
  })

  const [radius, setRadius] = useState(0)

  useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2)
  }, [slider])

  const slideValues = () => {
    if (!value) return []
    const offset = loop ? 1 / 2 - 1 / slidesPerView / 2 : 0

    const values = []
    for (let i = 0; i < slides; i++) {
      const distance = value.slides[i]?.distance ? ((value.slides[i]?.distance || 0) - offset) * slidesPerView : 0
      const rotate = Math.abs(distance) > wheelSize / 2 ? 180 : distance * (360 / wheelSize) * -1
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      }
      const valueLabel = setValue ? setValue(i, value.abs + Math.round(distance)) : i
      values.push({ style, value: valueLabel })
    }
    return values
  }

  return (
    <div className={clsx(styles.wheel, perspective && styles[`wheel--perspective-${perspective}`])} ref={sliderRef}>
      <div
        className={styles['wheel__shadow-top']}
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
      <div className={styles.wheel__inner}>
        <div className={styles.wheel__slides} style={{ width: width + 'px' }}>
          {slideValues().map(({ style, value }, idx) => (
            <div
              className={clsx(styles.wheel__slide, perspective && styles[`wheel__slide--${perspective}`])}
              style={style}
              key={idx}
            >
              <span>{value}</span>
            </div>
          ))}
        </div>
        {label && (
          <div
            className={styles.wheel__label}
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {label}
          </div>
        )}
      </div>
      <div
        className={styles['wheel__shadow-bottom']}
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </div>
  )
}
