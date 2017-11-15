const R = require('ramda')

const processStringAsArray = R.curry((delimiter, processor, string) =>
  R.pipe(R.split(delimiter), processor, R.join(delimiter))(string)
)

const adjustNameCharacters = R.curry((adjuster, name) =>
  processStringAsArray('', adjuster, name)
)

const uppercaseCharacter = R.pipe(
  character => character.charCodeAt(0),
  R.subtract(R.__, 32),
  String.fromCharCode
)

const capitalizeName = adjustNameCharacters(R.adjust(uppercaseCharacter, 0))

const fixName = name =>
  R.pipe(R.toLower, R.ifElse(R.equals('bj'), R.always('BJ'), capitalizeName))(
    name
  )

const namesProcessor = names =>
  processStringAsArray(', ', R.pipe(R.map(fixName), R.sortBy(R.identity)))(
    names
  )

module.exports = namesProcessor
