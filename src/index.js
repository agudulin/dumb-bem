import cx from 'classnames'

import makeBlock from './makers/makeBlock'
import { unknownPropsModifiers, makeModifiers } from './makers/makeModifiers'
import makeOriginalClass from './makers/makeOriginalClass'
import { unknownPropsStates, makeStates } from './makers/makeStates'

const basicMakers = [makeBlock, makeOriginalClass, makeModifiers, makeStates]
const basicUnknownProps = [unknownPropsModifiers, unknownPropsStates]

const filterProps = (props, unknownProps) => {
  const keys = Object.keys(props).filter(prop => unknownProps.indexOf(prop) < 0)

  return keys.map(key => props[key])
}

export default (block, options = {}) => (props) => {
  const { extraMakers = [], unknownProps = [] } = options
  const { element, ...restProps } = props
  const blockName = block + (element ? `__${element}` : '')

  const makers = basicMakers
    .concat(extraMakers)
    .map((maker) => maker(blockName, props))

  const knownProps = filterProps(restProps, basicUnknownProps.concat(unknownProps))

  return { ...knownProps, className: cx(makers) }
}
