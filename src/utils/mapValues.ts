export const mapValues = (object: { [key: string]: unknown }, iterator: (key: unknown) => void) => {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = iterator(object[key])
    return acc
  }, {})
}
