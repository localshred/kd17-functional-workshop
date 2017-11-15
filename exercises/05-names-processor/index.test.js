/* eslint-env jest */

const namesProcessor = require('./index.js')

describe('namesProcessor', () => {
  it('takes in (and returns) a string with comma-separated names, sorts, capitalizes, and ensures bj is BJ', () => {
    const names = 'lesley, bart, gayathri, piers, bj'
    const expected = 'BJ, Bart, Gayathri, Lesley, Piers'
    const actual = namesProcessor(names)
    expect(actual).toEqual(expected)
  })
})
