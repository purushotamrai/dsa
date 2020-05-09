// https://www.geeksforgeeks.org/find-all-possible-trees-with-given-inorder-traversal/

// PENDING

var inOrder = [4,5,7];
constructPreOrders(inOrder);

function constructPreOrders(inOrder) {

    // Assuming evrry node as root once.
    for (var key in inOrder) {
        key = parseInt(key);
        var currentRoot = inOrder[key];
        var leftSubtree = inOrder.slice(0, key);
        var rightSubtree = inOrder.slice(key + 1);
    }
}

