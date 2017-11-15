const reduce = require('../helpers/reduce-stateful')

module.exports = characters =>
  reduce(
    (accumulator, character) => {
      const count = accumulator[character] || 0
      accumulator[character] = count + 1
    },
    {},
    characters
  )
