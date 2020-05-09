// https://www.geeksforgeeks.org/expression-tree/

// var postFixExp = "ab+ef*g*-";
// var postFixExp = "ab+ef*g*-";
var postFixExp = "wlrb+-*";
print(constructTree(postFixExp));

function constructTree(expression) {
    var expArray = expression.split('');
    var resultStack = [];
    for (var i=0; i < expArray.length; i++) {
        var expChar = expArray[i];

        if (is_operand(expChar)) {
            resultStack.push(expChar);
        }
        else {
            // Pop last two items.
            var secondOperand = resultStack.pop();
            var firstOperant = resultStack.pop();
            resultStack.push(firstOperant + expChar + secondOperand);
        }
    }

    return resultStack;
}

function is_operand(char) {
    var operators = ['+', '-', '/', '*', '^'];
    if (operators.indexOf(char) >= 0) {
        return false;
    }

    return true;
}
