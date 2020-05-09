// https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/

class BinaryTree {
    constructor() {
        this.root = null;
    }

    morrisTraversal() {
        var current = this.root;

        while (current != null) {
            if (current.left == null) {
                console.log(current.data);
                current = current.right;
            }
            else {
                // Find predecessor.
                var pre = current.left;
                while (pre.right !== null && pre.right != current) {
                    pre = pre.right;
                }

                if (pre.right === null) {
                    pre.right = current;
                    current = current.left;
                }
                else {
                    pre.right = null;
                    console.log(current.data);
                    current = current.right;
                }
            }
        }
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
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);

// var bt = new BinaryTree();
// bt.root = new Node(13);
// bt.root.left = new Node(12);
// bt.root.left.left = new Node(4);
// bt.root.left.right = new Node(19);
// bt.root.right = new Node(10);
// bt.root.right.left = new Node(16);
// bt.root.right.right = new Node(9);

bt.morrisTraversal();