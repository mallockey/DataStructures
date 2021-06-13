const { bubbleSort } = require('./Sort')

test('Returns null if input is not an array', () => {
  expect(bubbleSort(4, 3, 2)).toBeNull()
})

test('Returns null if data is not a number', () => {
  expect(bubbleSort('5', 4, '3', {})).toBeNull()
})

test('Return type is an array', () => {
  expect(Array.isArray(bubbleSort([4, 3, 7, 2]))).toBe(true)
})

test('Sorts an unsorted array', () => {
  expect(bubbleSort([3, 7, 4, 1])).toEqual([1, 3, 4, 7].sort((val1, val2) => val1 - val2))
})
