/* eslint-env jest */

const mapAdd = require('./index.js')

describe('mapAdd', () => {
  it('adds N to all the numbers in the array', () => {
    const numbers = [1, 2, 3]
    const expected = [6, 7, 8]
    const N = 5
    const actual = mapAdd(N, numbers)
    expect(actual).toEqual(expected)
  })
})
