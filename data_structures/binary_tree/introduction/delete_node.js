// https://www.geeksforgeeks.org/deletion-binary-tree/
// Deletion deepest rightmost.

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
}

var bt = new BinaryTree();
bt.root = new Node(13);
bt.root.left = new Node(12);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(19);
bt.root.right = new Node(10);
bt.root.right.left = new Node(16);
bt.root.right.right = new Node(9);

var rightDeepestNode = getRightDeepest(bt);
var nodeToBeDeleted = findNodeBinaryTree(12, bt.root, null);

if (nodeToBeDeleted.parent !== null) {
    if (nodeToBeDeleted.child === 'left') {
        nodeToBeDeleted.parent.left = rightDeepestNode.node;
    }
    else {
        nodeToBeDeleted.parent.right = rightDeepestNode.node;
    }
}
else {
    bt.root = rightDeepestNode.node;
}

rightDeepestNode.node.left = nodeToBeDeleted.node.left;
rightDeepestNode.node.right = nodeToBeDeleted.node.right;
rightDeepestNode.parent.right = null;
nodeToBeDeleted.node.left = null;
nodeToBeDeleted.node.right = null;

print(bt);

function getRightDeepest(binaryTree) {
    // Find the rightmost deepest node.
    if (binaryTree.root !== null) {
        var deepRightNode = binaryTree.root;
        var deepRightNodeParent = null;
        while (deepRightNode.right !== null) {
            deepRightNodeParent = deepRightNode;
            deepRightNode = deepRightNode.right;
        }
    }

    return {'node': deepRightNode, 'parent': deepRightNodeParent};
}


function findNodeBinaryTree(data, node, parent, child) {
    var current = node;
    var result = null;
    if (current.data === data) {
        return {'node': current, 'parent': parent, 'child': child};
    }
    else {
        if (current.left !== null) {
            result = findNodeBinaryTree(data, current.left, current, 'left');
        }

        if (result === null) {
            if (current.right !== null) {
                result = findNodeBinaryTree(data, current.right, current, 'right');
            }
        }

    }
    
    return result;
}
