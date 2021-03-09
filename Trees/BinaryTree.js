class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree{

  constructor(node){
    this.root = node
    this.height = 1;
  }

  insert(newNode){
    let currentNode = this.root

    while(currentNode){
      if(newNode.value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = newNode
          return
        }else{
          currentNode = currentNode.left
        }
      }else if (newNode.value > currentNode.value){
        if(currentNode.right === null){
          currentNode.right = newNode
          return
        }else{
          currentNode = currentNode.right
        }
      }
    }
  }

  printPostOrder(node){
    if(node == null){
      return
    }
    this.printPostOrder(node.left)
    this.printPostOrder(node.right)
    console.log(node.value)
  }

  printInOrder(node){
    if(node === null){
      return
    }
    this.printInOrder(node.left)
    console.log(node.value)
    this.printInOrder(node.right)
  }
  printPreOrder(node){
    if(node === null){
      return
    }
    console.log(node.value)
    this.printPreOrder(node.left)
    this.printPreOrder(node.right)
  }
}




const newTreeNode = new Node(5)
const newTreeNode2 = new Node(10)
const newTreeNode3 = new Node(3)
const newTreeNode4 = new Node(2)
const newTreeNode5 = new Node(12)
const newTreeNode6 = new Node(4)
const newTree = new BinaryTree(newTreeNode)

newTree.insert(newTreeNode2)
newTree.insert(newTreeNode3)
newTree.insert(newTreeNode4)
newTree.insert(newTreeNode5)
newTree.insert(newTreeNode6)
console.log(newTree.printPreOrder(newTree.root))
