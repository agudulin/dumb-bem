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
 * import * as pluginBlock from 'dumb-bem/plugins/makeBlock'
 *
 * pluginBlock.maker('block', {})
 *   // => 'block'
 *
 * pluginBlock.maker('block__element', {})
 *   // => 'block__element'
 *
 */
export const maker = (block, props, options) => block
