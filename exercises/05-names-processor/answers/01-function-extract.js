const uppercaseFirst = lowercasedName =>
  String.fromCharCode(lowercasedName.charCodeAt(0) - 32)

const capitalizeName = lowercasedName => {
  const uppercasedFirst = uppercaseFirst(lowercasedName)
  const restName = lowercasedName.substr(1)
  return uppercasedFirst + restName
}

const fixName = name => {
  const lowercasedName = name.toLowerCase()
  if (lowercasedName === 'bj') {
    return 'BJ'
  } else {
    return capitalizeName(lowercasedName)
  }
}

const namesProcessor = names => {
  const splitNames = names.split(', ')
  const capitalized = splitNames.map(fixName)
  const sorted = capitalized.sort()
  return sorted.join(', ')
}

module.exports = namesProcessor
