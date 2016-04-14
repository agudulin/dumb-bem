export default (block, { modifier }) =>
  modifier && modifier.split(/\s+/).map((item) => `${block}--${item}`)
