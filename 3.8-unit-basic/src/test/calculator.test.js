const Calculator = require('../calculator.js')
jest.mock('../calculator.js')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Calculator.mockClear()
})

it('set', () => {
  expect(Calculator.set(3)).toBe(3)
})

it('clear', () => {
  expect(Calculator.clear()).toBe(0)
})

it('add', () => {
  expect(Calculator.add(3)).toBe(Calculator.value + 3)
})
