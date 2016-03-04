import cx from 'classnames'

const makeBlockStyles = ({
  active,
  block,
  className,
  disabled,
  hidden,
  loading,
  modifier,
  ...props
}) => {
  const modifiers = (block && modifier) ? modifier.split(/\s/).map((item) => (`${block}--${item}`)).join(' ') : false
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
  if (element) {
    return makeBlockStyles({ block: `${block}__${element}`, ...props })
  }
  return makeBlockStyles({ block, ...props })
}
