/**
 * @module makeBlock
 *
 * @description
 *
 * Add the main class for the block.
 *
 * This maker is independent of the value of passed props.
 *
 * *This maker is always applied.*
 *
 * @example
 *
 * import makeBlock from 'dumb-bem/makers/makeBlock';
 *
 * makeBlock('block', {});
 *   // => 'block'
 *
 * makeBlock('block__element', {});
 *   // => 'block__element'
 *
 */
export default (block, _) => block
