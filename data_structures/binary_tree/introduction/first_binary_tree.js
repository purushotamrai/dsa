class Node {

    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    constructor () {
        this.root = null;
    }
}

var sample_bt = new BinaryTree();
sample_bt.root = new Node(1);
sample_bt.root.left = new Node(2);
sample_bt.root.left.left = new Node(4);
sample_bt.root.right = new Node(3);

print(sample_bt);
