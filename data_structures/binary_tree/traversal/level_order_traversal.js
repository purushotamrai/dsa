// https://www.geeksforgeeks.org/level-order-tree-traversal/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }

  levelOrderTraverse(parents = []) {
    var nextParents = [];
    if (parents.length == 0) {
        var current = this.root;
        console.log(current.data);
        if (current.left !== null) {
            nextParents.push(current.left);
        }

        if (current.right !== null) {
            nextParents.push(current.right);
        }
    }
    else {
        for (var key in parents) {
            var current = parents[key];
            console.log(current.data);

            if (current.left !== null) {
                nextParents.push(current.left);
            }

            if (current.right !== null) {
                nextParents.push(current.right);
            }
        }
    }

    if (nextParents.length > 0) {
        this.levelOrderTraverse(nextParents);
    }
  }

}

var bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.root.right.right = new Node(6);

bt.levelOrderTraverse();