import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'

import { YoutubeEmbed } from './youtube-embed'

const meta: Meta<typeof YoutubeEmbed> = {
  title: 'ui/molecules/youtube-embed',
  component: YoutubeEmbed,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: '#EBEFFF' }],
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
type Story = StoryObj<typeof YoutubeEmbed>

export const Default: Story = {
  args: {
    youtubeVideoId: 'ogfYd705cRs',
    playLabel: 'Play',
  },
}
