// https://www.geeksforgeeks.org/find-postorder-traversal-of-bst-from-preorder-traversal/

// var preOrder = [40, 30, 35, 80, 100];
var preOrder = [40, 30, 32, 35, 80, 90, 100, 120];
var postOrder = [];
getPostOrder(preOrder, postOrder);
print(postOrder);

function getPostOrder(preOrder, postOrder) {
    if (preOrder.length == 0) {
        return;
    }

    if (preOrder.length == 1) {
        postOrder.push(preOrder[0]);
        return preOrder[0];
    }
    else {
        // First element is root.
        var root = preOrder[0];

        var current = 1;
        var leftSubtree = []
        while (preOrder[current] < root) {
            leftSubtree.push(preOrder[current]);
            current++;
        }

        var rightSubtree = preOrder.slice(current);

        if (leftSubtree) {
            getPostOrder(leftSubtree, postOrder);
        }

        if (rightSubtree) {
            getPostOrder(rightSubtree, postOrder);
        }

        postOrder.push(root);
    }
}
