import cx from 'classnames'

import makeBlock from './makers/makeBlock'
import makeModifiers from './makers/makeModifiers'
import makeOriginalClass from './makers/makeOriginalClass'
import makeStates from './makers/makeStates'

const basicMakers = [makeBlock, makeOriginalClass, makeModifiers, makeStates]

export default (block, extraMakers = []) => (props) => {
  const { element } = props
  const blockName = block + (element ? `__${element}` : '')

  const makers = basicMakers
    .concat(extraMakers)
    .map((maker) => maker(blockName, props))

  return { ...props, className: cx(makers) }
}
