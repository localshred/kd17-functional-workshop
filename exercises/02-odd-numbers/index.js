module.exports = numbers => {
  const returnValue = []

  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i]
    if (value % 2 !== 0) {
      returnValue.push(value)
    }
  }

  return returnValue
}
