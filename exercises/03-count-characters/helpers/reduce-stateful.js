module.exports = (reducer, initial, data) => {
  const accumulator = initial

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    reducer(accumulator, item, i)
  }

  return accumulator
}
