const isOdd = n => n % 2 !== 0
const isDivisbleBy8 = n => n % 8 === 0

module.exports = numbers => {
  const returnValue = []

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    if (isOdd(number) || isDivisbleBy8(number)) {
      returnValue.push(number)
    }
  }

  return returnValue
}
