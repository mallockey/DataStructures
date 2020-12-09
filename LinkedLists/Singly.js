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

  clear(){
    this.head = null
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

  removeHead(){
    this.head = this.head.next
    this.size--
  }

  removeFromValue(value){
    if(this.head.value === value){
      this.head = this.head.next
    }else{
      let previousNode = this.head
      let currentNode = previousNode.next

      while(currentNode){
        if(currentNode.value === value){
          previousNode.next = currentNode.next
          this.size--
          break
        }else{
          previousNode = currentNode
          currentNode = currentNode.next
        }
      }
    }
  }

  insertAtValue(value,valueToInsert){

    let newNode = new Node(valueToInsert)
    if(this.head.value === value){
      let tmp = this.head
      newNode.next = tmp
      this.head = newNode
    }else{
      let previousNode = this.head
      let currentNode = this.head.next

      while(currentNode){
        if(currentNode.value === value){

          previousNode.next = newNode
          newNode.next = currentNode
        }
        previousNode = currentNode
        currentNode = currentNode.next
      }
    }
  }

  addToHead(node){
    node.next = this.head
    this.head = node
  }

  static arrayToLinkedList(arr){
    let headNode = new Node(arr[0])
    let newList = new LinkedList(headNode)

    for(let i = 1; i < arr.length; i++){
      let newNode = new Node(arr[i])
      newList.add(newNode)
    }

    return newList
  }

}

const arr = [5,6,7,8,9]
const arrToList = LinkedList.arrayToLinkedList(arr)

arrToList.insertAtValue(6,100)

console.log(arrToList)
