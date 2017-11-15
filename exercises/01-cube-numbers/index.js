module.exports = function (numbers) {
  const returnValue = []

  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i]
    const cubed = value ** 3
    returnValue.push(cubed)
  }

  return returnValue
}
