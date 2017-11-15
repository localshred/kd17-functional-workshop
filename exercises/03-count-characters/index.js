module.exports = characters => {
  const returnValue = {}

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]
    const count = returnValue[character] || 0
    returnValue[character] = count + 1
  }

  return returnValue
}
