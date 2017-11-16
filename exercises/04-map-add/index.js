const add = (left, right) => left + right

module.exports = (numberToAdd, numbers) =>
  numbers.map(right => add(numberToAdd, right))
