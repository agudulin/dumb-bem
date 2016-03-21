import cx from 'classnames'

const makeBlockStyles = (block, {
  active,
  className,
  disabled,
  hidden,
  loading,
  modifier,
  ...props
}) => {
  const modifiers = modifier && modifier.split(/\s+/).map((item) => `${block}--${item}`)
  const states = {
    'is-active': active,
    'is-disabled': disabled,
    'is-hidden': hidden,
    'is-loading': loading
  }

  return {
    className: cx(block, modifiers, className, states),
    ...props
  }
}

export default (block) => ({ element, ...props }) => {
  const blockName = (element ? `${block}__${element}` : block)

  return makeBlockStyles(blockName, props)
}
