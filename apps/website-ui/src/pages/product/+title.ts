/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
export default (pageContext: any) => {
  const title = pageContext?.data?.documentProps?.title || ''
  if (title) return title

  const { category } = pageContext.urlParsed.search
  return pageContext.data?.pageProps.dynamicHeadData[category]?.title || ''
}
