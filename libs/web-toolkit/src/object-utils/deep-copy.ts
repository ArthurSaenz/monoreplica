// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepCopy = (object: any) => {
  if (typeof object !== 'object' || object === null) {
    return object
  }

  if (object instanceof Date) {
    return new Date(object.getTime())
  }

  if (object instanceof Array) {
    return object.reduce((acc, current, i) => {
      acc[i] = deepCopy(current)
      return acc
    }, [])
  }

  if (object instanceof Object) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(object).reduce((acc: any, key) => {
      acc[key] = deepCopy(object[key])
      return acc
    }, {})
  }
}
