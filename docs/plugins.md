## Modules

* [makeBlock](#module_makeBlock)
* [makeModifiers](#module_makeModifiers)
* [makeOriginalClass](#module_makeOriginalClass)
* [makeStates](#module_makeStates)

<a name="module_makeBlock"></a>

## makeBlock
Add the main class for the block.

This maker is independent of the value of passed props.

*This maker is always applied.*

**Example**  
```js
import * as pluginBlock from 'dumb-bem/plugins/makeBlock'

pluginBlock.maker('block', {})
  // => 'block'

pluginBlock.maker('block__element', {})
  // => 'block__element'
```
<a name="module_makeModifiers"></a>

## makeModifiers
Add one or more modifiers to the base block name.

Separate multiple modifiers by whitespace.

*This maker is always applied.*

**Example**  
```js
import * as pluginModifiers from 'dumb-bem/plugins/makeModifiers'

pluginModifiers.maker('block', { modifier: 'large' }, { delimiters: { modifier: '--' } })
  // => 'block--large'

pluginModifiers.maker('block', { modifier: 'large success' }, { delimiters: { modifier: '_' } })
  // => 'block_large block_success'

pluginModifiers.propsToRemove
  // => ['modifier']
```
<a name="module_makeOriginalClass"></a>

## makeOriginalClass
Preserve `className` as it was passed.
Without this maker the original class would be lost.

This maker is independent of the value of `block`.

*This maker is always applied.*

**Example**  
```js
import * as pluginOriginalClass from 'dumb-bem/plugins/makeOriginalClass'

pluginOriginalClass.maker('block', { className: 'btn btn-lg btn-success' }, {})
  // => 'btn btn-lg btn-success'
```
<a name="module_makeStates"></a>

## makeStates
Create SMACSS style state rules.
If the correspondent props value is truthy,
class with `is-` prefix will be added.

Supports `active`, `disabled`, `hidden`, and `loading`.

This maker is independent of the value of `block`.

*This maker is always applied.*

**Example**  
```js
import * as pluginStates from 'dumb-bem/plugins/makeStates'

pluginStates.maker('block', { active: true }, {})
  // => 'is-active'

pluginStates.maker('block', { active: 0, disabled: 1 }, {})
  // => 'is-disabled'

pluginStates.propsToRemove
  // => ['active', 'loading']
```
