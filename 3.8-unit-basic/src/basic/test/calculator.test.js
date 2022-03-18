const Calculator = require('../calculator.js')

// 관련된 테스트를 묶을 수 있습니다.
// 그룹 이름을 Calculator로 지정해줍니다.
describe('Calculator', () => {
  let cal
  // 초기화 작업
  // 코드 중복을 피하기 위해
  // 각각의 테스트 전에 수행을 합니다.
  beforeEach(() => {
    cal = new Calculator()
  })
  // Calculator를 가르키는 3인칭 주어
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
      // 예상할 수 있는 에러에 대해서 작성을 해야한다.
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

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    })
    it('1 / 0 === Infinity', () => {
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    })
    it('4 / 4 === Infinity', () => {
      cal.set(4)
      cal.divide(4)
      expect(cal.value).toBe(1)
    })
  })
})
