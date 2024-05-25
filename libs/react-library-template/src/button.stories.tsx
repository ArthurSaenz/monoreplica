import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'ui/atoms/button',
  component: Button,
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
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    appearance: 'default',
    icon: 'arrow',
    children: 'סיים',
    fullWidth: false,
    sizes: 'medium',
    className: 'test',
    disabled: false,
  },
}

export const Primary: Story = {
  args: {
    appearance: 'primary',
    icon: 'arrow',
    children: 'סיים',
    fullWidth: false,
    sizes: 'medium',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    icon: 'plus',
    children: 'סיים',
    fullWidth: false,
    sizes: 'medium',
    disabled: false,
  },
}
