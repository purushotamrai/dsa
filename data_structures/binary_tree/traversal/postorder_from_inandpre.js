// https://www.geeksforgeeks.org/print-postorder-from-given-inorder-and-preorder-traversals/

var inOrder = [4,2,5,1,3,6];
var preOrder = [1,2,4,5,3,6];
var postOrder = [];
var postOrder = printPostOrder(inOrder, preOrder, postOrder).reverse();
print(postOrder);

function printPostOrder(inOrder, preOrder, postOrder) {
    if (inOrder.length == 0) {
        return;
    }

    // To get the root.
    // Get the first element of preOrder which is in inOrder list.
    if (inOrder.length > 1) {
        for (var key in preOrder) {
            if (inOrder.indexOf(preOrder[key]) >= 0) {
                // Element found is root. 
                var rootKey = inOrder.indexOf(preOrder[key]);

                // Add it in postOrder stack and break the inOrder in left and right subtree.
                postOrder.push(preOrder[key]);
                var leftSubtree = inOrder.slice(0, rootKey);
                var rightSubtree = inOrder.slice(rootKey + 1);
    
                // Process right first as we are getting postorder in reverse.
                if (rightSubtree.length > 0) {
                    printPostOrder(rightSubtree, preOrder, postOrder);
                }

                if (leftSubtree.length > 0) {
                    printPostOrder(leftSubtree, preOrder, postOrder);
                }
                break;
            }
        }
    }
    else {
        postOrder.push(inOrder[0]);
        return;
    }

    return postOrder;
}
