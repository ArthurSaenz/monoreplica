import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'ui/atoms/switch',
  component: Switch,
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
  parameters: {
    backgrounds: {
      default: 'darkblue',
      values: [{ name: 'darkblue', value: '#606581' }],
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
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}
