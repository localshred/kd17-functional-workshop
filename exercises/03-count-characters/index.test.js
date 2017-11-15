/* eslint-env jest */

const countCharacters = require('./index.js')

describe('countCharacters', () => {
  it('returns an object with character counts for the given sentence', () => {
    const words = 'Hello, Dolly!'
    const expected = {
      H: 1,
      e: 1,
      l: 4,
      o: 2,
      ',': 1,
      ' ': 1,
      D: 1,
      y: 1,
      '!': 1
    }
    const actual = countCharacters(words)
    expect(actual).toEqual(expected)
  })
})
