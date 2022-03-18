const fetchProduct = require('../async')
describe('Async', () => {
  it('async - done', () => {
    fetchProduct().then(item => {
      // done을 사용하지 않을 경우 promise보다 test case가 먼저 실행된다.
      expect(item).toEqual({ item: 'Milk', price: 200 })
      //  수동적으로 끝나는 시점을 명시
      done()
    })
  })
  it('async - return', () => {
    return fetchProduct().then(item => {
      expect(item).toEqual({ item: 'Milk', price: 200 })
    })
  })
  it('async - await', async () => {
    const product = await fetchProduct()
    expect(product).toEqual({ item: 'Milk', price: 200 })
  })
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 })
  })
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  })
})
