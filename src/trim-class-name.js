/**
 * @module trimClassName
 *
 * @description
 *
 * Removes unnecessary whitespaces from a class name string
 *
 * @example
 *
 * import trimClassName from 'dumb-bem/trim-class-name'
 *
 * trimClassName(' header  header--landing ')
 *   // => 'header header--landing'
 *
 */
export default (className) => className.trim().replace(/\s\s+/g, ' ')
