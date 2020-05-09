// https://www.geeksforgeeks.org/foldable-binary-trees/

class BinaryTree {
    static root = 1;
    bt_array = [];

    setRoot(data) {
        this.bt_array[BinaryTree.root] = data;
    }

    insertLeft(data, parent) {
        var key = 2 * parent;

        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
        else {
            console.log('Parent not set at ' + parent);
        }
        
    }

    insertRight(data, parent) {
        var key = 2 * parent + 1;

        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
        else {
            console.log('Parent not set at ' + parent);
        }
    }

    checkFoldable() {
        var foldable = true;
        var depth = 1;
        var is_null = 1;
        var not_null = 2;

        for (var key = 1; key < this.bt_array.length - 1; key++) {
            if (key === Math.pow(2, depth)) {
                depth++;
            }

            if (key > 1) {
                // Check mirror node.
                var depthSum = 3 * Math.pow(2, depth - 1) - 1;
                var correspondingKey = depthSum - key;
                var leftNodeType = (key in this.bt_array) ? not_null : is_null;
                var rightNodeType = (correspondingKey in this.bt_array) ? not_null : is_null;

                if (leftNodeType !== rightNodeType) {
                    return false;
                }
            }
        }

        return true;
    }
}

var bt = new BinaryTree();
bt.setRoot(10);
bt.insertLeft(7, 1);
bt.insertRight(15, 1);
bt.insertLeft(5, 2);
bt.insertLeft(11, 3);

print(bt.checkFoldable());
