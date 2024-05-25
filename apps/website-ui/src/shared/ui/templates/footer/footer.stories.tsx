import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  title: 'ui/templates/footer',
  component: Footer,
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
type Story = StoryObj<typeof Footer>

const menuItems: { title: string; to: string; isExternal?: boolean; actionName: string }[] = [
  { title: 'Home', to: '/', actionName: 'Home page' },
]

export const Default: Story = {
  args: {
    options: menuItems,
  },
}
