import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { MobileUpdateModal } from './mobile-update-modal'

const meta: Meta<typeof MobileUpdateModal> = {
  title: 'ui/organisms/mobile-update-modal',
  component: MobileUpdateModal,
  argTypes: {
    onClose: { action: 'onClose' },
    onApprove: { action: 'onApprove' },
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
      <div style={{ padding: '0px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MobileUpdateModal>

export const ImediateUpdate: Story = {
  args: {
    activeCategoryColor: '#ff4fb1',
    type: 'imediateUpdate',
  },
}

export const FlexibleUpdate: Story = {
  args: {
    activeCategoryColor: '#ff4fb1',
    type: 'flexibleUpdate',
  },
}
