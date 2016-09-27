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
 * import * as pluginStates from 'dumb-bem/plugins/makeStates'
 *
 * pluginStates.maker('block', { active: true })
 *   // => 'is-active'
 *
 * pluginStates.maker('block', { active: 0, disabled: 1 })
 *   // => 'is-disabled'
 *
 * pluginStates.propsToRemove
 *   // => ['active', 'loading']
 *
 */
export const maker = (_, props) =>
  ['active', 'disabled', 'hidden', 'loading']
    .filter((s) => props[s])
    .map((s) => `is-${s}`)

export const propsToRemove = ['active', 'loading']
