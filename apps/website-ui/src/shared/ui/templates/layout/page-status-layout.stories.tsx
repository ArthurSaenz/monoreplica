import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { PageStatusLayout } from './page-status-layout'

const meta: Meta<typeof PageStatusLayout> = {
  title: 'ui/templates/page-status-layout',
  component: PageStatusLayout,
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
      <div style={{ padding: '0px', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PageStatusLayout>

export const Default: Story = {
  args: {
    headerView: <div>Header</div>,
    children: (
      <>
        <div style={{ height: '100px', backgroundColor: 'yellow' }}>1</div>
      </>
    ),
  },
}

export const Primary: Story = {
  args: {
    theme: 'primary',
    headerView: <div>Header</div>,
    children: (
      <>
        <div style={{ height: '100px', backgroundColor: 'yellow' }}>2</div>
      </>
    ),
  },
}
