/**
 * @module filterObject
 *
 * @description
 *
 * Create an object composed of the properties of object that are not omitted.
 *
 * @example
 *
 * import filterObject from 'dumb-bem/filter-object'
 *
 * filterObject({ a: 1, b: 2, c: 3}, ['a', 'b'])
 *   // => { c: 3 }
 *
 */
export default (obj, keysToRemove = []) => {
  const target = {}

  for (let i in obj) {
    if (keysToRemove.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue

    target[i] = obj[i]
  }

  return target
}
