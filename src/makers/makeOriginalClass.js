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
 * import makeOriginalClass from 'dumb-bem/makers/makeOriginalClass';
 *
 * makeOriginalClass('block', { className: 'btn btn-lg btn-success' });
 *   // => 'btn btn-lg btn-success'
 *
 */
export const maker = (_, { className }) => className
