// https://www.geeksforgeeks.org/populate-inorder-successor-for-all-nodes/

class BinaryTree {
    constructor() {
        this.root = null;
    }

    inorder(current = this.root, result = []) {
        if (current !== null) {
            if (current.left !== null) {
                this.inorder(current.left, result);    
            }

            result.push(current);

            // Get last result child.
            var resultLength = result.length;
            if (result[resultLength - 2] !== undefined) {
                result[resultLength - 2].next = current; 
            }

            // console.log(current.data);
            if (current.right !== null) {
                this.inorder(current.right, result);
            }
        }

        return result;
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
bt.root.right.left = new Node(6);
bt.root.right.right = new Node(7);

bt.inorder();
console.log(bt);