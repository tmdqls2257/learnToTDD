const Calculator = require('../calculator.js')

describe('Calculator', () => {
  let cal
  // 초기화 작업
  beforeEach(() => {
    cal = new Calculator()
  })
  it('constructor의 value의 초기값은 0이여야 합니다.', () => {
    expect(cal.value).toBe(0)
  })

  it('set 함수에 3을 넣어주면 cal.value', () => {
    cal.set(3)
    expect(cal.value).toBe(3)
  })

  describe('add', () => {
    it('clear를 하면 this.value는 0이여야 합니다.', () => {
      cal.clear()
      expect(cal.value).toBe(0)
    })

    it('value가 100보다 크다면 에러를 던져야한다.', () => {
      // 함수를 실행하고 그 실행해준 결과가 에러라면 에러메세지가 맞는지 확인
      expect(() => {
        cal.add(101)
      }).toThrow('Value can not be greater than 100')
    })
  })

  it('add함수를 사용하면 ', () => {
    cal.set(1)
    cal.add(3)
    expect(cal.value).toBe(4)
  })

  it('substract함수를 사용하면 ', () => {
    cal.set(3)
    cal.subtract(1)
    expect(cal.value).toBe(2)
  })

  it('multiply함수를 사용하면 ', () => {
    cal.set(5)
    cal.multiply(5)
    expect(cal.value).toBe(25)
  })

  it('divide함수를 사용하면 ', () => {
    cal.set(15)
    cal.divide(3)
    expect(cal.value).toBe(5)
  })
})
