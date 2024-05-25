import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { MobileStatusBar } from './mobile-status-bar'

const meta: Meta<typeof MobileStatusBar> = {
  title: 'ui/atoms/mobile-status-bar',
  component: MobileStatusBar,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: 'blue' }],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', top: '300px', height: '200px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MobileStatusBar>

export const Default: Story = {
  args: {},
}
