const sum = require('../src/sum')

test('adds 1 + 2 to equal 3', () => {
  // 함수를 수행하고 수행한 결과값이 3이면 통과
  expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  // object가 같은 경우
  expect(data).toEqual({ one: 1, two: 2 })
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n = null
  // This is the same as `.toBe(null)` but the error messages are a bit nicer.
  expect(n).toBeNull()
  // Ensure that a variable is not undefined
  expect(n).toBeDefined()
  // Used to check that a variable is undefined.
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('', () => {
  const z = ''
  expect(z).toBeDefined()
  expect(z).not.toBeNull()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// string
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// Array
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
]
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

// exceptions
// If you want to test whether a particular function throws an error when it's called, use toThrow.
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  // Used to test that a function throws when it is called.
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})
