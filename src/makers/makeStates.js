export default (_, props) =>
  ['active', 'disabled', 'hidden', 'loading']
    .filter((s) => props[s])
    .map((s) => `is-${s}`)
