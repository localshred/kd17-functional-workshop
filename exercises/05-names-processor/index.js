const namesProcessor = names => {
  const splitNames = names.split(', ')
  const capitalized = splitNames.map(name => {
    const lowercasedName = name.toLowerCase()
    if (lowercasedName === 'bj') {
      return 'BJ'
    } else {
      const uppercasedFirst = String.fromCharCode(
        lowercasedName.charCodeAt(0) - 32
      )
      const restName = lowercasedName.substr(1)
      return uppercasedFirst + restName
    }
  })
  const sorted = capitalized.sort()
  return sorted.join(', ')
}

module.exports = namesProcessor
