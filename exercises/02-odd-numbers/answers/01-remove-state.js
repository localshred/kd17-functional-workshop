module.exports = numbers => {
  // Blasted state we can't get rid of (while using for loop)
  const returnValue = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      returnValue.push(numbers[i])
    }
  }

  return returnValue
}
