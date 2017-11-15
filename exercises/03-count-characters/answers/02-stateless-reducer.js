const reduce = require('../helpers/reduce-stateless')

module.exports = characters =>
  reduce(
    (accumulator, character) => {
      const count = accumulator[character] || 0
      return Object.assign({}, accumulator, { [character]: count + 1 })
    },
    {},
    characters
  )
