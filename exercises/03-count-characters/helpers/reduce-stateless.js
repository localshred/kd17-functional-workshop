module.exports = (reducer, initial, data) => {
  let accumulator = initial

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    accumulator = reducer(accumulator, item, i)
  }

  return accumulator
}
