import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { HeaderView } from './header-view'

const meta: Meta<typeof HeaderView> = {
  title: 'ui/templates/header-view',
  component: HeaderView,
  argTypes: {
    onClickMenu: { action: 'onClickMenu' },
    onClickAccount: { action: 'onClickAccount' },
    onClickSearch: { action: 'onClickSearch' },
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
type Story = StoryObj<typeof HeaderView>

export const Default: Story = {
  args: {
    appearance: 'default',
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
}

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
}
