class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.numItems = 0
  }

  resize() {
    const newTable = new Array(this.table.length * 2)
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = this.hashStringToInt(key, newTable.length)
          if (newTable[idx]) {
            newTable[idx].push([key, value])
          } else {
            newTable[idx] = [[key, value]]
          }
        })
      }
    })
    this.table = newTable
  }

  hashStringToInt(string) {
    let hash = 17

    for (let i = 0; i < string.length; i++) {
      hash = (13 * hash * string.charCodeAt(i)) % this.table.length
    }

    return hash
  }

  setItem(key, value) {
    this.numItems++
    const loadFactor = this.numItems / this.table.length

    if (loadFactor > 0.8) {
      this.resize()
    }

    const idx = this.hashStringToInt(key)
    if (this.table[idx]) {
      this.table[idx].push([key, value])
    } else {
      this.table[idx] = [[key, value]]
    }
  }

  getItem(key) {
    const idx = this.hashStringToInt(key)
    if (!this.table[idx]) {
      return null
    }
    return this.table[idx].find((x) => x[0] === key)[1]
  }
}

module.exports = {
  HashTable,
}
