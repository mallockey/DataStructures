class TreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }
}

const root = new TreeNode(5)
root.children.push(new TreeNode(3))
root.children.push(new TreeNode(7))
