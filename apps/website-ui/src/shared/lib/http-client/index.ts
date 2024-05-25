import fetch from 'cross-fetch'

import { HttpClient } from '@monorepo/web-toolkit'

export const httpClient = new HttpClient('', fetch)
