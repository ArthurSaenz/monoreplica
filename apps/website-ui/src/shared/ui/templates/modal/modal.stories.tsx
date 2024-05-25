import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './modal'

const meta: Meta<typeof Modal> = {
  title: 'ui/templates/modal',
  component: Modal,

  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '200px', backgroundColor: '#1ea7fd' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
}
