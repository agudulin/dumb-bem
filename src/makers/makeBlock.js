/**
 * @module makeBlock
 *
 * @description
 *
 * Preserve `className` as it was passed.
 * Without this maker the original class would be lost.
 * This maker is independent of the value of passed props.
 *
 * *This maker is always applied.*
 *
 * @example
 *
 * import makeBlock from 'dumb-bem/makers/makeBlock';
 *
 * makeBlock('block', { });
 *   // => 'block'
 *
 */
export default (block, _) => block
