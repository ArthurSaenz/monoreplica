import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { ButtonCloseModal } from './button-close-modal'

const meta: Meta<typeof ButtonCloseModal> = {
  title: 'ui/atoms/button-close-modal',
  component: ButtonCloseModal,
  argTypes: {
    onClick: { action: 'onClick' },
  },
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
type Story = StoryObj<typeof ButtonCloseModal>

export const Default: Story = {
  args: {},
}
