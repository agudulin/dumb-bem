import cx from 'classnames'

const makeBlock = (block) => block

const makeOriginalClass = (_, { className }) => className

const makeModifiers = (block, { modifier }) =>
  modifier && modifier.split(/\s+/).map((item) => `${block}--${item}`)

const makeStates = (_, props) =>
  ['active', 'disabled', 'hidden', 'loading']
    .filter((s) => props[s])
    .map((s) => `is-${s}`)

const basicMakers = [makeBlock, makeOriginalClass, makeModifiers, makeStates]

export default (block, extraMakers = []) => (props) => {
  const { element } = props
  const blockName = block + (element ? `__${element}` : '')

  const makers = basicMakers
    .concat(extraMakers)
    .map((maker) => maker(blockName, props))

  return { ...props, className: cx(makers) }
}
