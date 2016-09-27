/**
 * @module makeOriginalClass
 *
 * @description
 *
 * Preserve `className` as it was passed.
 * Without this maker the original class would be lost.
 *
 * This maker is independent of the value of `block`.
 *
 * *This maker is always applied.*
 *
 * @example
 *
 * import * as pluginOriginalClass from 'dumb-bem/plugins/makeOriginalClass'
 *
 * pluginOriginalClass.maker('block', { className: 'btn btn-lg btn-success' }, {})
 *   // => 'btn btn-lg btn-success'
 *
 */
export const maker = (_block, { className }, _options) => className
