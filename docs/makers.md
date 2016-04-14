## Modules

<dl>
<dt><a href="#module_makeBlock">makeBlock</a></dt>
<dd><p>Preserve <code>className</code> as it was passed.
Without this maker the original class would be lost.
This maker is independent of the value of passed props.</p>
<p><em>This maker is always applied.</em></p>
</dd>
<dt><a href="#module_makeModifiers">makeModifiers</a></dt>
<dd><p>Preserve <code>className</code> as it was passed.
Without this maker the original class would be lost.</p>
<p><em>This maker is always applied.</em></p>
</dd>
<dt><a href="#module_makeOriginalClass">makeOriginalClass</a></dt>
<dd><p>Preserve <code>className</code> as it was passed.
Without this maker the original class would be lost.
This maker is independent of the value of <code>block</code>.</p>
<p><em>This maker is always applied.</em></p>
</dd>
<dt><a href="#module_makeStates">makeStates</a></dt>
<dd><p>Create SMACSS style state rules.
If the correspondent props value is truthy,
class with <code>is-</code> prefix will be added.
Supports <code>active</code>, <code>disabled</code>, <code>hidden</code>, and <code>loading</code>.
This maker is independent of the value of <code>block</code>.</p>
</dd>
</dl>

<a name="module_makeBlock"></a>

## makeBlock
Preserve `className` as it was passed.
Without this maker the original class would be lost.
This maker is independent of the value of passed props.

*This maker is always applied.*

**Example**
```js
import makeBlock from 'dumb-bem/makers/makeBlock';

makeBlock('block', { });
  // => 'block'
```
<a name="module_makeModifiers"></a>

## makeModifiers
Preserve `className` as it was passed.
Without this maker the original class would be lost.

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
