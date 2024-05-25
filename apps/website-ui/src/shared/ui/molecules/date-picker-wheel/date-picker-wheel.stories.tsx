import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'

import { DatePickerWheel } from './date-picker-wheel'

const meta: Meta<typeof DatePickerWheel> = {
  title: 'ui/molecules/date-picker-wheel',
  component: DatePickerWheel,
  argTypes: {
    onClose: { action: 'onClose' },
    onApprove: { action: 'onApprove' },
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: '#EBEFFF' }],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DatePickerWheel>

export const Default: Story = {
  args: {
    activeCategoryColor: '#ff4fb1',
  },
}

export const WithDefaultValues1: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ dateString }, updateArgs] = useArgs()

    return (
      <DatePickerWheel {...args} defaultDate={dateString} onApprove={(value) => updateArgs({ dateString: value })} />
    )
  },
  args: {
    activeCategoryColor: '#ff4fb1',
    defaultDate: '1980-04-03',
  },
}
