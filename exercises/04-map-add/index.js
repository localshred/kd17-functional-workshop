const add = (left, right) => left + right

// How can we eliminate defining a new function in map using partial application?
module.exports = (left, numbers) => numbers.map(right => add(left, right))
