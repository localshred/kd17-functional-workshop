/* eslint-env jest */

const oddNumbersAndDivisibleBy8 = require('./index.js')

describe('oddNumbersAndDivisibleBy8', () => {
  it('retrieves all add numbers and any that are divisible by 8 from an array', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const expected = [1, 3, 5, 7, 8, 9]
    const actual = oddNumbersAndDivisibleBy8(numbers)
    expect(actual).toEqual(expected)
  })
})
