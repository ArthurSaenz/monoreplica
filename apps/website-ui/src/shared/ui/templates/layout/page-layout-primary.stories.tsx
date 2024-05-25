import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { PageLayoutPrimary } from './page-layout-primary'

const meta: Meta<typeof PageLayoutPrimary> = {
  title: 'ui/templates/page-layout-primary',
  component: PageLayoutPrimary,
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
type Story = StoryObj<typeof PageLayoutPrimary>

export const Default: Story = {
  args: {
    header: <div style={{ height: '100px', backgroundColor: 'red' }} />,
    main: (
      <>
        <div style={{ height: '300px', backgroundColor: 'lightgrey' }} />
        <div style={{ height: '300px', backgroundColor: 'lightgrey' }} />
        <div style={{ height: '300px', backgroundColor: 'lightgrey' }} />
      </>
    ),
    sidebar: (
      <>
        <div style={{ height: '100px', backgroundColor: 'yellow' }} />
      </>
    ),
  },
}
