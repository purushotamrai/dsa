// https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/

class BinaryTree {
    constructor() {
        this.root = null;
    }

    inorder() {
        var parents = [];
        var current = this.root;
        var result = [];

        while (current.left !== null) {
            parents.push(current);
            current = current.left;
        }

        result.push(current.data);
        var parent = parents.pop();
        while (parent !== null) {
            result.push(parent.data);

            if (parent.right !== null) {
                var current = parent.right;
                while (current.left !== null) {
                    parents.push(current);
                    current = current.left;
                }

                result.push(current.data);
                if (parents.length > 0) {
                    parent = parents.pop();
                }
                else {
                    parent = null;
                }
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

// var bt = new BinaryTree();
// bt.root = new Node(1);
// bt.root.left = new Node(2);
// bt.root.right = new Node(3);
// bt.root.left.left = new Node(4);
// bt.root.left.right = new Node(5);

var bt = new BinaryTree();
bt.root = new Node(13);
bt.root.left = new Node(12);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(19);
bt.root.right = new Node(10);
bt.root.right.left = new Node(16);
bt.root.right.right = new Node(9);

print(bt.inorder());