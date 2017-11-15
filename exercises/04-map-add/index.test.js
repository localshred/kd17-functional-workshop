/* eslint-env jest */

const add = require('./index.js')

describe('add', () => {
  it('adds N to all the numbers in the array', () => {
    const numbers = [1, 2, 3]
    const expected = [6, 7, 8]
    const N = 5
    const actual = add(N, numbers)
    expect(actual).toEqual(expected)
  })
})
