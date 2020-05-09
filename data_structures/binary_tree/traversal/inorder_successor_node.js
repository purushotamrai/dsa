// https://www.geeksforgeeks.org/inorder-succesor-node-binary-tree/

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

    getInSuccMorrisTraversal(node) {
        var current = this.root;

        while(current !== null) {
            if (current.left == null) {
                if (current == node) {
                    return current.right;
                }
                console.log(current.data);
                current = current.right;
            }
            else {
                // Get Predecessor.
                var pre = current.left;
                while (pre.right !== null && pre.right !== current) {
                    pre = pre.right;
                }
            
                if (pre.right == null) {
                    // To reduce extra calculation.
                    if (pre == node) {
                        return current;
                    }
                    pre.right = current;
                    current = current.left;
                }

                if (pre.right == current) {
                    pre.right = null;
                    if (current == node) {
                        return current.right;
                    }
                    console.log(current.data);
                    current = current.right;
                }
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
bt.root.right.left = new Node(6);
bt.root.right.right = new Node(7);

print(bt.getInSuccMorrisTraversal(bt.root.right).data);
