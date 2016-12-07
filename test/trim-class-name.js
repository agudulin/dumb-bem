import test from 'ava'

import trimClassName from '../lib/trim-class-name'

test('should remove all unnecessary whitespaces from a class name string', (t) => {
  const className = ' header  header--landing   header--meow-meow '
  const trimmedClassName = trimClassName(className)

  t.is(trimmedClassName, 'header header--landing header--meow-meow')
})
