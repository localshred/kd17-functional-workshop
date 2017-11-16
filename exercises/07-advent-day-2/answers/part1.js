const R = require('ramda')
const input = require('../input')

const extractDimensionCalculations = ([l, w, h]) => [
  [2, l, w],
  [2, w, h],
  [2, l, h],
  getSmallestSidePair([l, w, h])
]

const getSmallestSidePair = dimensions =>
  R.pipe(R.sortBy(R.identity), R.take(2))(dimensions)

const calculatePresentDimensions = dimensions =>
  R.pipe(extractDimensionCalculations, R.chain(R.product))(dimensions)

const base10ParseInt = x => parseInt(x, 10)
const convertLineToPresentDimensions = R.pipe(
  R.split('x'),
  R.map(base10ParseInt)
)

const result = R.pipe(
  R.split('\n'),
  R.chain(R.pipe(convertLineToPresentDimensions, calculatePresentDimensions)),
  R.sum
)(input)

console.log({ result }) // Base 64 utf-8 answer: MTU4ODE3OA==
