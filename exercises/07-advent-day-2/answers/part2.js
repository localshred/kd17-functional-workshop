const R = require('ramda')
const input = require('../input')

const getSmallestSidePair = dimensions =>
  R.pipe(R.sortBy(R.identity), R.take(2))(dimensions)

const calculateBowLength = dimensions => R.product(dimensions)
const calculateShortestSidesDistance = dimensions =>
  R.pipe(getSmallestSidePair, R.apply(R.add), R.multiply(2))(dimensions)

const calculateRibbonLength = dimensions =>
  R.converge(R.add, [
    calculateBowLength, // l*w*h
    calculateShortestSidesDistance // smallest side dimensions
  ])(dimensions)

const base10ParseInt = x => parseInt(x, 10)
const convertLineToDimensions = R.pipe(R.split('x'), R.map(base10ParseInt))

const result = R.pipe(
  R.split('\n'),
  R.chain(R.pipe(convertLineToDimensions, calculateRibbonLength)),
  R.sum
)(input)

console.log({ result }) // Base 64 utf-8 answer: Mzc4Mzc1OA==
