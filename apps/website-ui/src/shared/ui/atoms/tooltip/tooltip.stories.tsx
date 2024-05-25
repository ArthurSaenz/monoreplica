/**
 * INFO: copy paste from TRVL ./libs/ui-kit/src/tooltip
 */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'ui/atoms/tooltip',
  component: Tooltip,
  argTypes: {},
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
      <div style={{ padding: '80px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const DirectionTop: Story = {
  args: {
    children: 'Text',
    title: 'tooltip',
  },
}

export const DirectionBottom: Story = {
  args: {
    children: 'Text',
    direction: 'bottom',
    title: 'tooltip',
  },
}

export const DirectionBottomRight: Story = {
  args: {
    children: 'Text',
    title: 'tooltip wide text',
    direction: 'bottom-right',
  },
}

export const DirectionBottomLeft: Story = {
  args: {
    children: 'Text',
    title: 'tooltip wide text',
    direction: 'bottom-left',
  },
}

export const DirectionBottomRightPrimary: Story = {
  args: {
    children: 'Text',
    title: 'tooltip wide text',
    direction: 'bottom-right',
    theme: 'primary',
  },
}

export const DirectionBottomLeftPrimary: Story = {
  args: {
    children: 'Text',
    title: 'tooltip wide text',
    direction: 'bottom-left',
    theme: 'primary',
  },
}

export const CustomTooltip: Story = {
  args: {
    children: 'Text',
    title: (
      <div>
        <h3>Title</h3>
        <h4>Subtitle</h4>
      </div>
    ),
  },
}

export const ForceTooltip: Story = {
  args: {
    children: 'Text',
    force: true,
    title: (
      <div>
        <h3>Title</h3>
        <h4>Subtitle</h4>
      </div>
    ),
  },
}
