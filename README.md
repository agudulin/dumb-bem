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

const dumbBemHeader = dumbBem('header')
const Header = tx(dumbBemHeader)('div')
const HeaderTitle = tx([dumbBemHeader, { element: 'title' }])('h1')

ReactDOM.render(
  <Header modifier='landingpage'>
    <HeaderTitle>Lorem Ipsum</HeaderTitle>
  </Header>
, node)
// Would render:
// <div className='header header--landingpage'>
//   <h1 className='header__title'>
//     Lorem Ipsum
//   </h1>
// </div>
```

## License

MIT © [Alexander Gudulin](http://gudulin.com)

[travis-url]: https://travis-ci.org/agudulin/dumb-bem
[travis-image]: https://travis-ci.org/agudulin/dumb-bem.svg?branch=master
