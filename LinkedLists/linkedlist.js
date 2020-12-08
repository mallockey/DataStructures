class Node {
  constructor(data){
    this.value = data
    this.next = null
  }
}

class LinkedList {

  constructor(node){
    this.head = node
    this.size = 1
  }

  getFirstNode(){
    return {
      value : this.head.value
    }
  }

  getLastNode(){
    let currentNode = this.head
    while(currentNode.next !== null){
      currentNode = currentNode.next
    }
    return currentNode
  }

  add(node){
    let lastNode = this.getLastNode()
    lastNode.next = node
    this.size++
  }

  remove(value){
    let currentNode = this.head
    while(currentNode.next !== null){
      if(currentNode.value === value){

      }
    }
  }

  addToHead(node){
    node.next = this.head
    this.head = node
  }

}


const node1 = new Node(5)
const node2 = new Node(6)

const link1 = new LinkedList(node1)
link1.add(node2)

console.log(link1.getFirstNode())