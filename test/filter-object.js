import test from 'ava'

import filterObject from '../lib/filter-object'

test('should work', (t) => {
  const obj = { a: 1, b: 2, c: 3 }
  const keysToRemove = ['b', 'c']

  const newObj = filterObject(obj, keysToRemove)

  t.true('a' in newObj)
  t.false('b' in newObj)
  t.false('c' in newObj)
})
