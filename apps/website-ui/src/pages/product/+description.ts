/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
export default (pageContext: any) => {
  const description = pageContext?.data?.documentProps?.metaDescription || ''
  if (description) return description

  const { category } = pageContext.urlParsed.search
  return pageContext.data?.pageProps.dynamicHeadData[category]?.metaDescription || ''
}
