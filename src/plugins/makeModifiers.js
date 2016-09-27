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
 * pluginModifiers.maker('block', { modifier: 'large' }, { delimeter: { modifier: '--' } })
 *   // => 'block--large'
 *
 * pluginModifiers.maker('block', { modifier: 'large success' }, { delimeter: { modifier: '_' } })
 *   // => 'block_large block_success'
 *
 * pluginModifiers.propsToRemove
 *   // => ['modifier']
 *
 */
export const maker = (block, { modifier }, { delimeter }) =>
  modifier && modifier.split(/\s+/).map((item) => `${block}${delimeter.modifier}${item}`)

export const propsToRemove = ['modifier']
