// https://www.geeksforgeeks.org/check-if-a-binary-tree-is-bst-simple-and-efficient-approach/?ref=leftbar-rightbar

class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {

    constructor() {
        this.root = null;
    }
}

// Construct the binary tree bt.
var bt = new Tree();
bt.root = new Node(4);
bt.root.left = new Node(2);
bt.root.right = new Node(5);
bt.root.left.left = new Node(1);
bt.root.left.right = new Node(3);

print(checkBtisBst(bt.root));

function checkBtisBst(pointer) {
    if (checkNode(pointer)) {
        if (pointer.left !== null) {
            checkBtisBst(pointer.left);
        }
        if (pointer.right !== null) {
            checkBtisBst(pointer.right);
        }
    }
    else {
        return false;
    }

    return true;
}

function checkNode(node) {
    if (node.left !== null) {
        if (node.left.data > node.data) {
            return false;    
        }
    }

    if (node.right !== null) {
        if (node.right.data < node.data) {
            return false;
        }
    }

    return true;
}
