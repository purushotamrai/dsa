// https://www.geeksforgeeks.org/binary-tree-array-implementation/

class BinaryTree {
    static root = 0;
    bt_array = [];
    
    set_root(data) {
        this.bt_array[BinaryTree.root] = data;
    }

    insert_left(data, parent) {
        var key = 2 * parent + 1

        // Check parent is set.
        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
        else {
            console.log('Parent not set at ' + parent);
        }
    }

    insert_right(data, parent) {
        var key = 2 * parent + 2;

        // Check parent is set.
        if (parent in this.bt_array) {
            this.bt_array[key] = data;
        }
        else {
            console.log('Parent not set at ' + parent);
        }
    }
}

var bt = new BinaryTree();
bt.set_root('A');
bt.insert_left('B', 0);
bt.insert_right('C', 0);
bt.insert_left('D', 1);
bt.insert_right('E', 1);
bt.insert_right('F', 2);

print(bt);
