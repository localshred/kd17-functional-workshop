const R = require('ramda')
const input = require('../input.js')

const OPERATIONS = {
  '(': R.inc,
  ')': R.dec
}

const result = R.pipe(
  R.split(''),
  R.reduce(
    (accumulator, instruction) => OPERATIONS[instruction](accumulator),
    0
  )
)(input)

console.log({ result })
