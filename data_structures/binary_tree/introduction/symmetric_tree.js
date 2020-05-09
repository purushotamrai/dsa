// https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isMirror(root1, root2) {
        if (root1 === null && root2 === null) {
            return true;
        }
        else if (root1 && root2 && root1.data === root2.data) {
            return (this.isMirror(root1.left, root2.right) && this.isMirror(root1.right, root2.left));
        }
    
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(2);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(4);
bt.root.right.left = new Node(4);
bt.root.right.right = new Node(3);

print(bt.isMirror(bt.root.left, bt.root.right));
