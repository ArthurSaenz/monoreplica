export const getTitleFromConfig = (pageContext: any) => {
  // The value exported by /pages/**/+title.js is available at pageContext.config.title
  const value = pageContext.config.title
  if (!value) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'function') return value(pageContext)
}

export const getMetaDescriptionFromConfig = (pageContext: any) => {
  // The value exported by /pages/**/+description.js is available at pageContext.config.description
  const value = pageContext.config.description
  if (!value) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'function') return value(pageContext)
}
