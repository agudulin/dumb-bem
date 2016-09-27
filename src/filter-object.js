export default (obj, keysToRemove) => {
  const filteredKeys = Object.keys(obj).filter(key => {
    if (keysToRemove.indexOf(key) >= 0) return false
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false

    return true
  })

  const target = {}
  filteredKeys.forEach(key => { target[key] = obj[key] })

  return target
}
