const R = require('ramda')
const input = require('../input')

const isBasement = R.propSatisfies(R.lt(R.__, 0), 'floor')

const OPERATIONS = {
  '(': R.inc,
  ')': R.dec
}

const tick = (accumulator, instruction) =>
  R.pipe(
    R.evolve({
      floor: OPERATIONS[instruction],
      index: R.inc
    }),
    R.when(isBasement, result => R.reduced(result))
  )(accumulator)

const result = R.pipe(R.split(''), R.reduce(tick, { floor: 0, index: 0 }))(
  input
)

console.log({ result }) // for correct answer decode base64 utf-8: MTc4Mw==
