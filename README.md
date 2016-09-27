# Dumb BEM

**Dumb BEM** is a simple BEM class name [transformation](https://github.com/robinpokorny/transform-props-with) for React components.

[![npm](https://img.shields.io/npm/v/dumb-bem.svg?style=flat-square)](https://www.npmjs.com/package/dumb-bem)
[![Build Status](https://img.shields.io/travis/agudulin/dumb-bem/master.svg?style=flat-square)](https://travis-ci.org/agudulin/dumb-bem)
[![license](https://img.shields.io/npm/l/dumb-bem.svg?style=flat-square)](https://github.com/agudulin/dumb-bem/blob/master/license)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)
[![Developed at Wimdu](https://img.shields.io/badge/developed%20at-Wimdu-orange.svg?style=flat-square)](http://tech.wimdu.com/)

## Install

```sh
npm install --save dumb-bem
```

## Usage

```js
import dumbBem from 'dumb-bem'
import tx from 'transform-props-with'

const dumbHeader = dumbBem('header')
const Header = tx(dumbHeader)('div')
const HeaderTitle = tx([{ element: 'title' }, dumbHeader])('h1')

ReactDOM.render(
  <Header modifier='landing'>
    <HeaderTitle>Lorem Ipsum</HeaderTitle>
  </Header>
, node)
// Would render:
// <div className='header header--landing'>
//   <h1 className='header__title'>
//     Lorem Ipsum
//   </h1>
// </div>
```

## API
### `dumbBem(block, options={})`

#### Arguments

  - `block` (*String*): name of the base block.
  - `options` (*Object*): Override default options.
    - [`plugins`] \(*Array*):
    array of plugins for modifying class names.

      Plugin is an object with two properties:
        - `maker` (*function*)
        Maker function takes `block` and `props` as arguments and should return anything suitable for [classnames](https://www.npmjs.com/package/classnames) input. E.g. [it can be a string, array of string or object](https://github.com/JedWatson/classnames#usage).
        - `propsToRemove` (*Array*)
        An array of properties which are used in the plugin but should not be injected into the corresponding DOM element in the end.

      See also [built-in makers](docs/makers.md).

#### Returns

A function which takes `props` object as a parameter, transforms `className` prop on execution and returns back changed props object.

```js
(props) => ({
  ...props,
  className: classNameModifiedByMakers
})
```

#### Examples

**User maker function**

```js
const colorModifierPlugin = {
  maker: (block, props) => {
    if (props.color) {
      return `${block}--${props.color}`
    }
  },
  propsToRemove: ['color']
}

const dumbList = dumbBem('list', { plugins: [colorModifierPlugin] })
const List = tx(dumbList)('ul')
const ListItem = tx([{ element: 'item' }, dumbList])('li')

ReactDOM.render(
  <List>
    <ListItem color='black'>Item 1</ListItem>
    <ListItem color='white'>Item 2</ListItem>
  </List>
, node)
// Would render:
// <ul class='list'>
//   <li class='list__item list__item--black'>Item 1</li>
//   <li class='list__item list__item--white'>Item 2</li>
// </ul>
```

### [Built-in Makers](docs/makers.md)


## License

MIT © [Alexander Gudulin](http://gudulin.com)

[travis-url]: https://travis-ci.org/agudulin/dumb-bem
[travis-image]: https://travis-ci.org/agudulin/dumb-bem.svg?branch=master
