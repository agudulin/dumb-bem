/**
 * @module makeModifiers
 *
 * @description
 *
 * Preserve `className` as it was passed.
 * Without this maker the original class would be lost.
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
export default (block, { modifier }) =>
  modifier && modifier.split(/\s+/).map((item) => `${block}--${item}`)
