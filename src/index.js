import cx from 'classnames'

import * as pluginBlock from './makers/makeBlock'
import * as pluginModifiers from './makers/makeModifiers'
import * as pluginOriginalClass from './makers/makeOriginalClass'
import * as pluginStates from './makers/makeStates'

const basicPlugins = [pluginBlock, pluginModifiers, pluginOriginalClass, pluginStates]

const filterProps = (props, unknownProps) => {
  const keys = Object.keys(props).filter(prop => unknownProps.indexOf(prop) < 0)

  return keys.map(key => props[key])
}

export default (block, options = {}) => (props) => {
  const { extraPlugins = [] } = options
  const { element, ...restProps } = props
  const blockName = block + (element ? `__${element}` : '')

  const plugins = basicPlugins.concat(extraPlugins)

  const makers = plugins.map(plugin => plugin.maker(blockName, props))
  const propsToRemove = plugins.map(plugin => plugin.propsToRemove)
  const knownProps = filterProps(restProps, propsToRemove)

  return { ...knownProps, className: cx(makers) }
}
