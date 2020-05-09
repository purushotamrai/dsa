// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/


class BinaryTree {
    constructor() {
        this.root = null;
    }

    inorder(current = this.root) {
        if (current !== null) {
            if (current.left !== null) {
                this.inorder(current.left);    
            }
            console.log(current.data);
            if (current.right !== null) {
                this.inorder(current.right);
            }
        }
    }

    preorder(current = this.root) {
        if (current !== null) {
            console.log(current.data);
            if (current.left !== null) {
                this.preorder(current.left);
            }
            if (current.right !== null) {
                this.preorder(current.right);
            }
        }
    }

    postorder(current = this.root) {
        if (current !== null) {
            if (current.left !== null) {
                this.postorder(current.left);
            }
            if (current.right !== null) {
                this.postorder(current.right);
            }
            console.log(current.data);
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

bt.inorder();
bt.preorder();
bt.postorder();
