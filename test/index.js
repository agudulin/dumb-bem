import test from 'ava'
import expect from 'expect'
import expectJSX from 'expect-jsx'

import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import tx from 'transform-props-with'

import dumbBem from '../lib'
import { makeStates } from '../lib/plugins'

expect.extend(expectJSX)

const dumbHeader = dumbBem('header', { plugins: [makeStates] })
const justClass = (props) => dumbHeader(props).className.trim()

test('should cleanup unknown properties', (t) => {
  const makeInvisible = {
    maker: (_, { invisible }) => invisible && 'is-invisible',
    propsToRemove: ['invisible']
  }
  const dumbHeader = dumbBem('header', { plugins: [makeStates, makeInvisible] })
  const props = dumbHeader({ active: true, invisible: true, loading: true, modifier: 'landing' })

  t.false('active' in props)
  t.false('invisible' in props)
  t.false('loading' in props)
  t.false('modifier' in props)
})

test('should return `header` block', (t) => {
  const renderer = createRenderer()

  const dumbHeader = dumbBem('header')
  const Header = tx(dumbHeader)('header')

  renderer.render(
    React.createElement(Header, null)
  )
  expect(
    renderer.getRenderOutput()
  )
  .toEqualJSX(
    React.createElement('header', { className: 'header' })
  )
})

test('should render `header` block with modifier', (t) => {
  t.is(
    justClass({ modifier: 'landing' }),
    'header header--landing'
  )
})

test('should render `header` block with custom delimiterss', (t) => {
  const dumbHeader = dumbBem('header', {
    delimiters: {
      element: '🐶',
      modifier: '🐱'
    }
  })
  const className = dumbHeader({ element: 'title', modifier: 'landing' }).className.trim()

  t.is(
    className,
    'header🐶title header🐶title🐱landing'
  )
})

test('should return `header` block with multiple modifiers', (t) => {
  t.is(
    justClass({ modifier: 'landing landing-seo' }),
    'header header--landing header--landing-seo'
  )
})

test('should return `header` block with modifier and custom className', (t) => {
  t.is(
    justClass({ modifier: 'landing', className: 'js-header' }),
    'header header--landing js-header'
  )
})

test('should return `header` block with multiple modifiers and custom className', (t) => {
  t.is(
    justClass({ modifier: 'landing landing-seo', className: 'js-header' }),
    'header header--landing header--landing-seo js-header'
  )
})

test('should return `header__title` element', (t) => {
  t.is(
    justClass({ element: 'title' }),
    'header__title'
  )
})

test('should return `header__title` element with modifier', (t) => {
  t.is(
    justClass({ element: 'title', modifier: 'landing' }),
    'header__title header__title--landing'
  )
})

test('should return `foo` block with modifiers', (t) => {
  t.is(
    justClass({ active: true, disabled: true, hidden: true, loading: true }),
    'header is-active is-disabled is-hidden is-loading'
  )
})

test('should return `foo` block with modifiers', (t) => {
  t.is(
    justClass({ active: true, disabled: true, hidden: true, loading: true }),
    'header is-active is-disabled is-hidden is-loading'
  )
})
