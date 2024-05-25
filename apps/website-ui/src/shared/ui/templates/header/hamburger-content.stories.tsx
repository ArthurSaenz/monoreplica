import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { HamburgerContent } from './hamburger-content'
import { getMenuItems } from './menu-items'

const meta: Meta<typeof HamburgerContent> = {
  title: 'ui/templates/hamburger-content',
  component: HamburgerContent,
  argTypes: { onClose: { action: 'clickClose' } },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
  decorators: [
    (Story) => (
      // <div style={{ width: '600px', height: '500px' }}>
      <Story />
      // </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof HamburgerContent>

export const Default: Story = {
  args: {
    // linkComp: Comp,
    onClose: () => {},
    menuItems: getMenuItems(null),
    isOpen: true,
    mobileAppVersion: '1.0.0',
  },
}
