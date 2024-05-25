import { TJsonLdOptions } from './types'

//#region safeJsonLdReplacer from react-schemaorg

// Some of the code below is borrowed from react-schemaorg after the author of the package
// kindly reached out to let me know this was a better way of doing things. ❤️
// https://github.com/google/react-schemaorg/blob/main/src/json-ld.tsx#L173

type JsonValueScalar = string | boolean | number
type JsonValue = JsonValueScalar | Array<JsonValue> | { [key: string]: JsonValue }
type JsonReplacer = (_: string, value: JsonValue) => JsonValue | undefined

const ESCAPE_ENTITIES = Object.freeze({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
})
const ESCAPE_REGEX = new RegExp(`[${Object.keys(ESCAPE_ENTITIES).join('')}]`, 'g')
const ESCAPE_REPLACER = (t: string): string => ESCAPE_ENTITIES[t as keyof typeof ESCAPE_ENTITIES]

/**
 * A replacer for JSON.stringify to strip JSON-LD of illegal HTML entities
 * per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
 */
export const safeJsonLdReplacer: JsonReplacer = (() => {
  // Replace per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
  // Solution from https://stackoverflow.com/a/5499821/864313
  return (_: string, value: JsonValue): JsonValue | undefined => {
    switch (typeof value) {
      case 'object':
        // Omit null values.
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (value === null) {
          return undefined
        }

        return value // JSON.stringify will recursively call replacer.
      case 'number':
      case 'boolean':
      case 'bigint':
        return value // These values are not risky.
      case 'string':
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER)
      default: {
        // We shouldn't expect other types.
        isNever(value)

        // JSON.stringify will remove this element.
        return undefined
      }
    }
  }
})()

// Utility: Assert never
function isNever(_: never): void {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stringify = (data: any, options: TJsonLdOptions) =>
  JSON.stringify(data, safeJsonLdReplacer, options.space || 2)
//#endregion safeJsonLdReplacer from react-schemaorg
