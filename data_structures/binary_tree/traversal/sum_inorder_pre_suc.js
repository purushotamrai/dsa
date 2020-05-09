// https://www.geeksforgeeks.org/replace-node-binary-tree-sum-inorder-predecessor-successor/

class BinaryTree {

    static root = 0;

    constructor() {
        this.bt_array = [];
    }

    setRoot(data) {
        this.bt_array[BinaryTree.root] = data;
    }

    insertLeft(parent, data) {
        var key = (2 * parent) + 1;

        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
    }

    insertRight(parent, data) {
        var key = (2 * parent) + 2;

        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
    }

    inOrder(current =  BinaryTree.root, result = []) {
        if (current in this.bt_array) {
            var left = (2 * current) + 1;
            if (left in this.bt_array) {
                this.inOrder(left, result);
            }

            // result.push({
            //     data : this.bt_array[current],
            //     key: current,
            // });
            result.push(current);

            var right = (2 * current) + 2;
            if (right in this.bt_array) {
                this.inOrder(right, result);
            }

        }

        return result;
    }

    sumInorderPreSucc() {
        var result = [];
        var inorder = this.inOrder();
        console.log(inorder);
        for (var btkey in this.bt_array) {
            btkey = parseInt(btkey);
            // Get corresponding inorder node.
            for (var inorderKey in inorder) {
                var inorderKeyInt = parseInt(inorderKey);
                if (parseInt(inorder[inorderKeyInt]) === btkey) {
                    var succKey = inorderKeyInt + 1;
                    var preKey = inorderKeyInt - 1;
                    
                    var currentResult = 0;
                    if (succKey in this.bt_array) {
                        currentResult = this.bt_array[inorder[succKey]];
                    }
                    if (preKey in this.bt_array) {
                        currentResult = currentResult + this.bt_array[inorder[preKey]];
                    }
                    result.push(currentResult);
                    break;
                }
            }
        }

        return result;
    }
}

var bt = new BinaryTree();
bt.setRoot(1);
bt.insertLeft(0, 2);
bt.insertRight(0, 3);
bt.insertLeft(1, 4);
bt.insertRight(1, 5);
bt.insertLeft(2, 6);
bt.insertRight(2, 7);

print(bt.sumInorderPreSucc());