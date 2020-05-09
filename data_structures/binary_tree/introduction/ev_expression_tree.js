// https://www.geeksforgeeks.org/evaluation-of-expression-tree/

class BinaryTree {

    constructor() {
        this.root = null;
    }

    evaluate(current = this.root) {
        if (current !== null) {
            if (this.is_operand(current.data)) {
                return current.data;
            }
            else {
                if (current.left !== null && current.right !== null) {
                    var left = this.evaluate(current.left);
                    var right = this.evaluate(current.right);
                    var result = null;

                    switch (current.data) {
                        case '+':
                            return left + right;
                            break;

                        case '-':
                            return left - right;
                            break;
                            
                        case '/':
                            return left / right;
                            break;
                            
                        case '*':
                            return left * right;
                            break;

                        default: 
                            console.log('Operator not supported');   
                    }
                }
            }
        }
    }

    is_operand(char) {
        var operators = ['+', '-', '/', '*', '^'];
        if (operators.indexOf(char) >= 0) {
            return false;
        }
    
        return true;
    }
    
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Construct the expression tree.
var bt = new BinaryTree();
// bt.root = new Node('+');
// bt.root.left = new Node('*');
// bt.root.right = new Node('-');
// bt.root.left.left = new Node(5);
// bt.root.left.right = new Node(4);
// bt.root.right.left = new Node(100);
// bt.root.right.right = new Node(20);

bt.root = new Node('+');
bt.root.left = new Node('*');
bt.root.right = new Node('-');
bt.root.left.left = new Node(5);
bt.root.left.right = new Node(4);
bt.root.right.left = new Node(100);
bt.root.right.right = new Node('/');
bt.root.right.right.left = new Node(20);
bt.root.right.right.right = new Node(2);

print(bt.evaluate());
