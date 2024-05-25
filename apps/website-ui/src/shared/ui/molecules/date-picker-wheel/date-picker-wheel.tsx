import clsx from 'clsx'
import { TrackDetails } from 'keen-slider/react'
import { useCallback, useMemo, useState } from 'react'

import { useMediaQuery } from '@monorepo/web-toolkit'

import { Modal } from '#root/shared/ui/templates/modal'

import styles from './date-picker-wheel.module.scss'
import {
  calculateLengthOfMonth,
  formatDateFromIndexes,
  formatDateMonth,
  formatDateYear,
  formateDateDay,
  parseDateString,
} from './libs'
import { Wheel } from './wheel'

export interface DatePickerWheelProps {
  onApprove: (arg: string | null) => void
  onClose: () => void
  defaultDate?: string
  activeCategoryColor?: string
}

export const DatePickerWheel = (props: DatePickerWheelProps) => {
  const { onClose, onApprove, activeCategoryColor, defaultDate } = props

  const isMobile = useMediaQuery('(max-width: 768px)')
  const [valueDays, setValueDays] = useState<TrackDetails | null>(null)
  const [valueMonths, setValueMonths] = useState<TrackDetails | null>(null)
  const [valueYears, setValueYears] = useState<TrackDetails | null>(null)

  const daysLength = useMemo(() => {
    if (valueMonths?.rel && valueYears?.rel) {
      return calculateLengthOfMonth(valueMonths.rel, valueYears.rel)
    }

    return 30
  }, [valueMonths?.rel, valueYears?.rel])

  const [initDays, initMonths, initYears] = useMemo(() => {
    if (defaultDate) {
      return parseDateString(defaultDate)
    }

    return [undefined, undefined, undefined]
  }, [])

  const onSubmit = () => {
    const dayIndex = valueDays?.rel
    const monthIndex = valueMonths?.rel
    const yearIndex = valueYears?.rel

    if (typeof dayIndex !== 'number' || typeof monthIndex !== 'number' || typeof yearIndex !== 'number') {
      onApprove(null)
      onClose()
      return
    }

    const formattedDate = formatDateFromIndexes(dayIndex, monthIndex, yearIndex)
    onApprove(formattedDate)
    onClose()
  }

  return (
    <Modal onClose={onClose} position={isMobile ? 'bottom' : 'center'} backDrop="default">
      <div className={clsx(styles.root)} style={{ '--active-category-color': activeCategoryColor }}>
        <div className={styles['wrap-button']}>
          <button type="button" className={styles.button} onClick={onClose}>
            {T.cancel}
          </button>

          <button type="button" className={styles.button} onClick={onSubmit}>
            {T.onApprove}
          </button>
        </div>

        <div className={styles['wrap-wheel']}>
          <div style={{ width: 45 }}>
            <Wheel
              loop
              length={daysLength}
              width={30}
              perspective="right"
              setValue={formateDateDay}
              value={valueDays}
              onChange={setValueDays}
              initIdx={initDays}
            />
          </div>
          <div style={{ width: 160 }}>
            <Wheel
              loop
              length={12}
              width={140}
              setValue={formatDateMonth}
              value={valueMonths}
              onChange={setValueMonths}
              initIdx={initMonths}
            />
          </div>
          <div style={{ width: 90 }}>
            <Wheel
              length={100}
              width={70}
              perspective="left"
              setValue={formatDateYear}
              value={valueYears}
              onChange={setValueYears}
              initIdx={initYears || 99}
            />
          </div>
          <span className={styles.panel} />
        </div>
      </div>
    </Modal>
  )
}

const T = {
  cancel: `בטל`,
  onApprove: `בחר`,
}

export interface DatePickerWheelWrapperProps {
  render: (props: { onOpen: () => void }) => React.ReactNode
  defaultDate?: string
  activeCategoryColor?: string
  defaultDateString?: string
  onApprove: (arg: string | null) => void
}

export const DatePickerWheelWrapper = (props: DatePickerWheelWrapperProps) => {
  const { render, ...rest } = props

  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      {render({ onOpen })}
      {isOpen && <DatePickerWheel {...rest} onClose={onClose} />}
    </>
  )
}
