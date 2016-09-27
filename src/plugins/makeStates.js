/**
 * @module makeStates
 *
 * @description
 *
 * Create SMACSS style state rules.
 * If the correspondent props value is truthy,
 * class with `is-` prefix will be added.
 *
 * Supports `active`, `disabled`, `hidden`, and `loading`.
 *
 * This maker is independent of the value of `block`.
 *
 * *This maker is always applied.*
 *
 * @example
 *
 * import makeStates from 'dumb-bem/plugins/makeStates';
 *
 * makeStates('block', { active: true });
 *   // => 'is-active'
 * makeStates('block', { active: 0, disabled: 1 });
 *   // => 'is-disabled'
 *
 */
export const maker = (_, props) =>
  ['active', 'disabled', 'hidden', 'loading']
    .filter((s) => props[s])
    .map((s) => `is-${s}`)

export const propsToRemove = ['active', 'loading']
