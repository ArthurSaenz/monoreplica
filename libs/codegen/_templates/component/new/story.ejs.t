---
to: <%= pathname %>/<%= h.changeCase.param(name) %>.stories.tsx
---
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { <%= name %> } from './<%= h.changeCase.param(name) %>'

export default {
  title: '<%= prefixTitleStory %>/<%= h.changeCase.param(name) %>',
  component: <%= name %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'Clicked' },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      // defaultViewport: 'iphone13',
    },
  },
} as ComponentMeta<typeof <%= name %>>

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />

export const Desktop = Template.bind({})
Desktop.args = {}

export const Mobile = Template.bind({})
Mobile.args = {}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone13',
  },
}