// No more assigned state here
module.exports = function (numbers) {
  return numbers.map(function (value, index) {
    return value ** 3
  })
}
