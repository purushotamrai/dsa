// https://www.geeksforgeeks.org/insertion-in-a-binary-tree-in-level-order/

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
}

var bt = new BinaryTree();
bt.root = new Node(10);
bt.root.left = new Node(11);
bt.root.left.left = new Node(7);
bt.root.right = new Node(9);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(8);
// print(insertNodeLevelOrder(12, bt));

var bt2 = new BinaryTree();
bt2.root = new Node(1);
bt2.root.left = new Node(2);
bt2.root.left.left = new Node(3);
bt2.root.left.left.left = new Node(4);
bt2.root.left.right = new Node(5);
bt2.root.left.right.left = new Node(6);
bt2.root.right = new Node(7);
bt2.root.right.right = new Node(8);
bt2.root.right.right.left = new Node(9);
bt2.root.right.right.right = new Node(10);
print(insertNodeLevelOrder(11, bt2));


function insertNodeLevelOrder(data, binaryTree) {
  var currentLevelNodes = [];
  var level = 0;
  var inserted = false;

  while (inserted === false) {
    if (level === 0) {
        if (binaryTree.root !== null) {
            level = 1;
            currentLevelNodes[1] = [];
            currentLevelNodes[1].push(binaryTree.root);
        }
        else {
            binaryTree.root = new Node(data);
            inserted = true;
        }
    }
    else {
        for (var key in currentLevelNodes[level]) {
            currentLevelNodes[level + 1] = [];
            if (currentLevelNodes[level][key].left === null) {
                currentLevelNodes[level][key].left = new Node(data);
                inserted = true;
                break;
            }
            currentLevelNodes[level + 1].push(currentLevelNodes[level][key].left);

            if (currentLevelNodes[level][key].right === null) {
                currentLevelNodes[level][key].right = new Node(data);
                inserted = true;
                break;
            }
            currentLevelNodes[level + 1].push(currentLevelNodes[level][key].right);
        }
        level++;
    }
  }

  return binaryTree;
}
