const { HashTable } = require('./Hash')

const TABLE_SIZE = 500
const TABLE_SIZE_SMALL = 3
const myTable = new HashTable(TABLE_SIZE)

test('Table type is an array', () => {
  expect(Array.isArray(myTable.table)).toBeTruthy()
})

test('Size is what user inputted', () => {
  expect(myTable.table.length).toEqual(TABLE_SIZE)
})

test('Get Item returns the correct item', () => {
  myTable.setItem('firstName', 'josh')
  expect(myTable.getItem('firstName')).toEqual('josh')
})

test('Table resizes when its 80% full', () => {
  const smallTable = new HashTable(TABLE_SIZE_SMALL)
  smallTable.setItem('firstName', 'josh')
  smallTable.setItem('lastName', 'fisher')
  smallTable.setItem('age', '29')
  expect(smallTable.table.length).toEqual(TABLE_SIZE_SMALL * 2)
})
