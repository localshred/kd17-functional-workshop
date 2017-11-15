const R = require('ramda')

const add = R.curry((left, right) => left + right)

module.exports = (left, numbers) => numbers.map(add(left))
