class Node {
  constructor(data){
    this.value = data
    this.prev = null
    this.next = null
  }
}

class LinkedList {

  constructor(node){
    this.head = node
    this.size = 1
  }

  add(node){
    let currentNode = this.head
    while(currentNode.next !== null){
      currentNode = currentNode.next
    }
    currentNode.next = node
    node.prev = currentNode
  }

}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

const newList = new LinkedList(node1)

newList.add(node2)
newList.add(node3)
console.log(newList)
