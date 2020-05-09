// https://www.geeksforgeeks.org/continuous-tree/

class BinaryTree {
    static root = 0;
    bt_array = [];

    setRoot(data) {
        this.bt_array[BinaryTree.root] = data;
    }

    insertLeft(data, parent) {
        var key = 2 * parent + 1

        // Check if parent is set.
        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
        else {
            console.log('Parent not available at ' + parent);
        }
    }

    insertRight(data, parent) {
        var key = 2 * parent + 2;

        // Check if parent is set.
        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
        else {
            console.log('Parent not available at ' + parent);
        }        
    }

    checkContinuousTree(current = BinaryTree.root, continuous = true) {
        if (!continuous) {
            return false;
        }

        var left = 2 * current + 1;
        var left_cont = true;
        if (left in this.bt_array) {
            var diff = Math.abs(this.bt_array[current] - this.bt_array[left]);
            if (diff !== 1) {
                left_cont = false;
            }
        }

        var right = 2 * current + 2;
        var right_cont = true;
        if (right in this.bt_array) {
            var diff = Math.abs(this.bt_array[current] - this.bt_array[right]);
            if (diff !== 1) {
                right_cont = false;
            }
        }

        if (!(left_cont && right_cont)) {
            return false;
        }
        else {
            if (left in this.bt_array) {
                continuous = this.checkContinuousTree(left, continuous);
            }

            if (right in this.bt_array) {
                continuous = this.checkContinuousTree(right, continuous);
            }
        }

        return continuous;
    }
}

var bt = new BinaryTree();
// bt.setRoot(3);
// bt.insertLeft(2, 0);
// bt.insertRight(4, 0);
// bt.insertLeft(1, 1);
// bt.insertRight(3, 1);
// bt.insertRight(5, 2);

// bt.setRoot(7);
// bt.insertLeft(5, 0);
// bt.insertRight(8, 0);
// bt.insertLeft(6, 1);
// bt.insertRight(4, 1);
// bt.insertRight(10, 2);

bt.setRoot(6);
bt.insertLeft(5, 0);
bt.insertRight(7, 0);
bt.insertLeft(6, 1);
bt.insertRight(4, 1);
bt.insertRight(8, 2);

print(bt.checkContinuousTree());