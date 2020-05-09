// https://www.geeksforgeeks.org/reverse-level-order-traversal/

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

    reverseLevelTraversal(currentParents = [this.root]) {
        if (currentParents.length == 0) {
            return;
        }
        else {
            var newParents = [];
            for (var key in currentParents) {
                var current = currentParents[key];
                if (current.left !== null) {
                    newParents.push(current.left);
                }
                if (current.right !== null) {
                    newParents.push(current.right);
                }
            }
            this.reverseLevelTraversal(newParents);
            for (var key in currentParents) {
                var current = currentParents[key];
                console.log(current.data);
            }
        }
    }

}

var bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.reverseLevelTraversal();
