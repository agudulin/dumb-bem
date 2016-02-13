import test from 'ava'
import expect from 'expect'
import expectJSX from 'expect-jsx'

import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import tx from 'transform-props-with'

import dumbBem from './index.es5'

expect.extend(expectJSX)

test('should render `header` block', (t) => {
  const renderer = createRenderer()

  const dumbBemHeader = dumbBem('header')
  const Header = tx(dumbBemHeader)('header')

  renderer.render(
    <Header />
  )
  expect(
    renderer.getRenderOutput()
  )
  .toEqualJSX(
    <header className='header' />
  )
})

test('should render `header` block with modifier', (t) => {
  const renderer = createRenderer()

  const dumbBemHeader = dumbBem('header')
  const Header = tx(dumbBemHeader)('header')

  renderer.render(
    <Header modifier='landing' />
  )
  expect(
    renderer.getRenderOutput()
  )
  .toEqualJSX(
    <header className='header header--landing' />
  )
})

test('should render `header` block with modifier and custom className', (t) => {
  const renderer = createRenderer()

  const dumbBemHeader = dumbBem('header')
  const Header = tx(dumbBemHeader)('header')

  renderer.render(
    <Header modifier='landing' className='js-header' />
  )
  expect(
    renderer.getRenderOutput()
  )
  .toEqualJSX(
    <header className='header header--landing js-header' />
  )
})

test('should render `header__title` element', (t) => {
  const renderer = createRenderer()

  const dumbBemHeader = dumbBem('header')
  const HeaderTitle = tx([dumbBemHeader, { element: 'title' }])('h1')

  renderer.render(
    <HeaderTitle>Lorem Ipsum</HeaderTitle>
  )
  expect(
    renderer.getRenderOutput()
  )
  .toEqualJSX(
    <h1 className='header__title'>Lorem Ipsum</h1>
  )
})
