const R = require('ramda')

const add = R.curry((left, right) => left + right)

module.exports = (left, numbers) => R.map(add(left), numbers)
