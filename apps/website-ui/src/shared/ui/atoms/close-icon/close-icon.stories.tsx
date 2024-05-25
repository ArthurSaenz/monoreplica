import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { CloseIcon } from './close-icon'

const meta: Meta<typeof CloseIcon> = {
  title: 'ui/atoms/close-icon',
  component: CloseIcon,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: '#fafafa' }],
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
type Story = StoryObj<typeof CloseIcon>

export const Default: Story = {
  args: {
    appearance: 'default',
    size: 'medium',
  },
}

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
}
