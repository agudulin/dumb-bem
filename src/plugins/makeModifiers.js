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
 * pluginModifiers.maker('block', { modifier: 'large' }, { delimiters: { modifier: '--' } })
 *   // => 'block--large'
 *
 * pluginModifiers.maker('block', { modifier: 'large success' }, { delimiters: { modifier: '_' } })
 *   // => 'block_large block_success'
 *
 * pluginModifiers.propsToRemove
 *   // => ['modifier']
 *
 */
export const maker = (block, { modifier = '' }, { delimiters }) => {
  const mod = modifier.trim()

  return mod && mod.split(/\s+/).map(item => `${block}${delimiters.modifier}${item}`)
}

export const propsToRemove = ['modifier']
