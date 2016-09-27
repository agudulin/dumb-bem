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
  const filteredKeys = Object.keys(obj).filter(key => {
    if (keysToRemove.indexOf(key) >= 0) return false
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false

    return true
  })

  const target = {}
  filteredKeys.forEach(key => { target[key] = obj[key] })

  return target
}
