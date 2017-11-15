module.exports = function (numbers) {
  const returnValue = []

  for (let i = 0; i < numbers.length; i++) {
    returnValue.push(numbers[i] ** 3)
  }

  return returnValue
}
