// const Calculator = require('../calculator')

const calculator = new Calculator()
test('set', () => {
  expect(calculator.set(3)).toBe(calculator.value + 3)
})

test('clear', () => {
  expect(calculator.clear()).toBe(0)
})

test('add', () => {
  expect(calculator.add(5)).toBe(calculator.value + 5)
})
