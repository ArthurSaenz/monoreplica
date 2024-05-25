export const data = async () => {
  return {
    documentProps: {
      jsonLds: [],
    },
  }
}

export type Data = Awaited<ReturnType<typeof data>>
