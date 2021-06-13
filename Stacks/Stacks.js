class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
    this.maxSize = 5
  }

  push(element) {
    if (this.size === this.maxSize) {
      console.log('Cannot push to stack, already reached max size')
      return
    }
    this.size++
    this.storage[this.size] = element
  }

  pop() {
    if (this.size === 0) {
      console.log('Cannot remove item, stack is empty.')
      return
    }
    let removed = this.storage[this.size]
    delete this.storage[this.size]
    this.size--
    return removed
  }

  peek() {
    return this.storage[this.size]
  }

  isFull() {
    if (this.size === this.maxSize) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  removeUntilFound(item) {
    for (let i = this.size; i >= 1; i--) {
      if (this.storage[i] === item) {
        console.log(`Found ${item} at position ${i}`)
        return
      } else {
        delete this.storage[i]
        this.size--
      }
    }
  }
}

module.exports = Stack
