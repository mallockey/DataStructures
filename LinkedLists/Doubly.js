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
    this.tail = null
    this.size = 1
  }

  insertAtHead(node){

    if(this.head === null){
      this.head = node
    }

    node.next = this.head
    node.prev = null

    this.head.prev = node
    this.head = node
    this.size++
  }

  insertAtValue(value,valueToInsert){
    let currentNode = this.head
    if(currentNode.value === value){
      let newNode = new Node(valueToInsert)
      newNode.next = this.head
      this.head = newNode
      this.setTail()
      return
    }
    while(currentNode !== null){
      if(currentNode.value === value){
        let newNode = new Node(valueToInsert)
        currentNode.prev.next = newNode
        newNode.next = currentNode
        this.setTail()
        return
      }
      currentNode = currentNode.next
    }
  }
  add(node){
    let currentNode = this.head
    while(currentNode.next !== null){
      currentNode = currentNode.next
    }
    currentNode.next = node
    node.prev = currentNode
    this.size++
    this.setTail()
  }

  printNodes(){
    let currentNode = this.head

    while(currentNode !== null){
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }

  setTail(){
    let currentNode = this.head
    while(currentNode.next !== null){
      currentNode = currentNode.next
    }
    this.tail = currentNode
  }

}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const newList = new LinkedList(node1)

newList.add(node2)
newList.add(node3)

newList.insertAtValue(1,10)

console.log(newList.printNodes())
