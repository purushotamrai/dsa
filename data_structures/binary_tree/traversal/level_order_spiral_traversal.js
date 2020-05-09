// https://www.geeksforgeeks.org/level-order-traversal-in-spiral-form/

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

    levelOrderSpiralTraversal(parents = [], dir = true) {
        var nextParents = [];
        if (parents.length == 0) {
            var current = this.root;
            console.log(current.data);
            if (dir) {
                if (current.left !== null) {
                    nextParents.push(current.left);
                }
                if (current.right !== null) {
                    nextParents.push(current.right);
                }
            }
            else {
                if (current.right !== null) {
                    nextParents.push(current.right);
                }
                if (current.left !== null) {
                    nextParents.push(current.left);
                }
            }
        }
        else {
            if (dir) {
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
            else {
                current = parents.pop();
                while (current !== undefined) {
                    console.log(current.data);
                    if (current.right !== null) {
                        nextParents.push(current.right);
                    } 

                    if (current.left !== null) {
                        nextParents.push(current.left);
                    }
                       current = parents.pop()
                }
            }
        }

        if (nextParents.length > 0) {
            if (!dir) {
                // Reverse nextParents.
                nextParents = nextParents.reverse();
            }
            dir = dir ? false : true;
            this.levelOrderSpiralTraversal(nextParents, dir);
        }

        return;
    }
}

var bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.root.right.right = new Node(6);
bt.root.left.left.left = new Node(7);
bt.root.left.left.right = new Node(8);
bt.root.right.right.left = new Node(9);

bt.levelOrderSpiralTraversal()