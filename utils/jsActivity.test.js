import {refresh} from './jsActivity'
describe('test promise :', () => {
  test('refresh is a promise', () => {
    expect(typeof (refresh.then)).toBe('function')
  })

})
