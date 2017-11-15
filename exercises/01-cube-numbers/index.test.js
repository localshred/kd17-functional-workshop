/* eslint-env jest */

const cubeNumbers = require('./index.js')

describe('cubeNumbers', () => {
  it('cubes the given numbers array', () => {
    const numbers = [1, 2, 3]
    const expected = [1, 8, 27]
    const actual = cubeNumbers(numbers)
    expect(actual).toEqual(expected)
  })
})
