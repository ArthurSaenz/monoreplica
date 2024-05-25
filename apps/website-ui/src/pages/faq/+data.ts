import { testDataQuestions } from './content'

export const data = async () => {
  return {
    pageProps: {
      testDataQuestions,
    },
    documentProps: {
      jsonLds: [],
    },
  }
}

export type Data = Awaited<ReturnType<typeof data>>
