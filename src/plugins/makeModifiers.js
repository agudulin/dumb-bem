/**
 * @module makeModifiers
 *
 * @description
 *
 * Add one or more modifiers to the base block name.
 *
 * Separate multiple modifiers by whitespace.
 *
 * *This maker is always applied.*
 *
 * @example
 *
 * import * as pluginModifiers from 'dumb-bem/plugins/makeModifiers'
 *
 * pluginModifiers.maker('block', { modifier: 'large' })
 *   // => 'block--large'
 *
 * pluginModifiers.maker('block', { modifier: 'large success' })
 *   // => 'block--large block--success'
 *
 * pluginModifiers.propsToRemove
 *   // => ['modifier']
 *
 */
export const maker = (block, { modifier }) =>
  modifier && modifier.split(/\s+/).map((item) => `${block}--${item}`)

export const propsToRemove = ['modifier']
