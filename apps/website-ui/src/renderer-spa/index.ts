import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

import { Application } from './application'

const container = document.querySelector('#page-view')

const root = createRoot(container as Element | DocumentFragment)
root.render(createElement(Application))
