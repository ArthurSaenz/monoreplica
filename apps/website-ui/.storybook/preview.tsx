import React from 'react'
import { Preview } from '@storybook/react'
// import { withPerformance } from 'storybook-addon-performance'

import '../src/app/globals.css'
import 'keen-slider/keen-slider.min.css'

import { PageContextProvider } from '../src/app/page-context'

const noop = () => {}

const decorators = [
  // withPerformance,
  (Story) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <PageContextProvider pageContext={{ urlParsed: { router: { pathname: '', navigate: noop, search: {} } }}}>
      <Story />
    </PageContextProvider>
  ),
]

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    order: ['Features', 'Shared', 'UI'],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const preview: Preview = {
  parameters,
  decorators,
}

export default preview
