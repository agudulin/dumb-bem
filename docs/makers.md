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
import makeBlock from 'dumb-bem/makers/makeBlock';

makeBlock('block', {});
  // => 'block'

makeBlock('block__element', {});
  // => 'block__element'
```
<a name="module_makeModifiers"></a>

## makeModifiers
Add one or more modifiers to the base block name.

Separate multiple modifiers by whitespace.

*This maker is always applied.*

**Example**
```js
import makeModifiers from 'dumb-bem/makers/makeModifiers';

makeModifiers('block', { modifier: 'large' });
  // => 'block--large'

makeModifiers('block', { modifier: 'large success' });
  // => 'block--large block--success'
```
<a name="module_makeOriginalClass"></a>

## makeOriginalClass
Preserve `className` as it was passed.
Without this maker the original class would be lost.

This maker is independent of the value of `block`.

*This maker is always applied.*

**Example**
```js
import makeOriginalClass from 'dumb-bem/makers/makeOriginalClass';

makeOriginalClass('block', { className: 'btn btn-lg btn-success' });
  // => 'btn btn-lg btn-success'
```
<a name="module_makeStates"></a>

## makeStates
Create SMACSS style state rules.
If the correspondent props value is truthy,
class with `is-` prefix will be added.

Supports `active`, `disabled`, `hidden`, and `loading`.

This maker is independent of the value of `block`.

**Example**
```js
import makeStates from 'dumb-bem/makers/makeStates';

makeStates('block', { active: true });
  // => 'is-active'
makeStates('block', { active: 0, disabled: 1 });
  // => 'is-disabled'
```
**Example**
```js
import dumbBem from 'dumb-bem';
import makeStates from 'dumb-bem/makers/makeStates';

const dumbHeader = dumbBem('header', [makeStates])
```
