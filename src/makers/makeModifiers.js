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
 * import makeModifiers from 'dumb-bem/makers/makeModifiers';
 *
 * makeModifiers('block', { modifier: 'large' });
 *   // => 'block--large'
 *
 * makeModifiers('block', { modifier: 'large success' });
 *   // => 'block--large block--success'
 *
 */
export const maker = (block, { modifier }) =>
  modifier && modifier.split(/\s+/).map((item) => `${block}--${item}`)

export const propsToRemove = ['modifier']
