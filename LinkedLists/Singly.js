class Node {
  constructor(data) {
    this.value = data
    this.next = null
  }
}

class LinkedList {
  constructor(node) {
    this.head = node
    this.size = 1
  }

  print() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }

  clear() {
    this.head = null
  }

  getFirstNode() {
    return {
      value: this.head.value,
    }
  }

  getLastNode() {
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  add(node) {
    let lastNode = this.getLastNode()
    lastNode.next = node
    this.size++
  }

  removeHead() {
    this.head = this.head.next
    this.size--
  }

  removeFromValue(value) {
    if (this.head.value === value) {
      this.head = this.head.next
    } else {
      let previousNode = this.head
      let currentNode = previousNode.next

      while (currentNode) {
        if (currentNode.value === value) {
          previousNode.next = currentNode.next
          this.size--
          break
        } else {
          previousNode = currentNode
          currentNode = currentNode.next
        }
      }
    }
  }

  insertAtValue(value, valueToInsert) {
    let newNode = new Node(valueToInsert)
    if (this.head.value === value) {
      let tmp = this.head
      newNode.next = tmp
      this.head = newNode
    } else {
      let previousNode = this.head
      let currentNode = this.head.next

      while (currentNode) {
        if (currentNode.value === value) {
          previousNode.next = newNode
          newNode.next = currentNode
        }
        previousNode = currentNode
        currentNode = currentNode.next
      }
    }
  }

  insertAtValueAgain(data, position) {
    let newNode = new Node(data)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }
    let currentNode = this.head.next
    let previousNode = this.head
    let i = 1
    while (currentNode) {
      if (i === position) {
        newNode.next = currentNode
        previousNode.next = newNode
      }
      previousNode = currentNode
      currentNode = currentNode.next
      i++
    }
  }

  reverseList(head) {
    let previousNode = null
    let currentNode = head
    let next = null

    while (currentNode !== null) {
      next = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = next
    }

    this.head = previousNode
  }

  addToHead(node) {
    node.next = this.head
    this.head = node
  }

  static arrayToLinkedList(arr) {
    let headNode = new Node(arr[0])
    let newList = new LinkedList(headNode)

    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i])
      newList.add(newNode)
    }

    return newList
  }
}

module.exports = {
  LinkedList,
  Node,
}
