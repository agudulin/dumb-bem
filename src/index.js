import cx from 'classnames'

import * as pluginBlock from './plugins/makeBlock'
import * as pluginModifiers from './plugins/makeModifiers'
import * as pluginOriginalClass from './plugins/makeOriginalClass'

import filterObject from './filter-object'

const basicPlugins = [pluginBlock, pluginModifiers, pluginOriginalClass]
const defaultDelimiters = {
  element: '__',
  modifier: '--'
}

export default (block, options = {}) => (props) => {
  const { delimiters = defaultDelimiters, plugins = [] } = options
  const { element, ...restProps } = props
  const blockName = block + (element ? `${delimiters.element}${element}` : '')

  const pluginsList = basicPlugins.concat(plugins)

  const makers = pluginsList.map(plugin => plugin.maker)
  const propsToRemove = pluginsList
    .map(plugin => plugin.propsToRemove)
    .filter(a => a)
    .reduce((a, b) => a.concat(b), [])

  const classNames = makers.map(maker => maker(blockName, props, { delimiters }))
  const knownProps = filterObject(restProps, propsToRemove)

  return { ...knownProps, className: cx(classNames) }
}
