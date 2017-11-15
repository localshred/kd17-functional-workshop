/* eslint-env jest */

const oddNumbers = require('./index.js')

describe('oddNumbers', () => {
  it('cubes the given numbers array', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const expected = [1, 3, 5, 7, 9]
    const actual = oddNumbers(numbers)
    expect(actual).toEqual(expected)
  })
})
