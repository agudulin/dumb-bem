# dumb-bem [![Build Status][travis-image]][travis-url]

> Simple BEM react components generator

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
const HeaderTitle = tx([dumbHeader, { element: 'title' }])('h1')

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
### `dumbBem(block, extraMakers=[])`

#### Arguments

  - `block` (*String*): name of the base block.
  - [`extraMakers`] \(*Array*): array of functions for adding new class names

  Maker function takes `block` and `props` as arguments and should return anything suitable for [classnames](https://www.npmjs.com/package/classnames) input. E.g. [it can be a string, array of string or object](https://github.com/JedWatson/classnames#usage).

#### Returns

A function which takes `props` object as a parameter, transforms `className` prop on execution and returns back changed props object.

```js
(props) => ({
  ...props,
  className: classNameModifiedByMakers
})
```

#### Examples

**Maker function**

```js
const makeColorModifier = (block, props) => {
  if (props.color) {
    return `${block}--${color}`
  }
}

const dumbList = dumbBem('list', [makeColorModifier])
const List = tx(dumbList)('ul')
const ListItem = tx([dumbList, { element: 'item' }])('li')

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

## License

MIT © [Alexander Gudulin](http://gudulin.com)

[travis-url]: https://travis-ci.org/agudulin/dumb-bem
[travis-image]: https://travis-ci.org/agudulin/dumb-bem.svg?branch=master
