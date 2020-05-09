// https://www.geeksforgeeks.org/count-nodes-in-the-given-tree-whose-weight-is-a-fibonacci-number/?ref=leftbar-rightbar

var tree = [1, 4, 7, 11, 3, 15, 8];
var fibSeries = [];
var result = 0;

for (var key in tree) {
    // Get fibonacci series with last number greater than node.
    var node = tree[key];
    fibSeries = generateFibSeries(fibSeries, node);
    
    if (fibSeries.indexOf(node) >= 0) {
        result++;
    }
}

print(result);

function generateFibSeries(fib, x) {
    if (fib.length === 0) {
        fib.push(1);
    }
    while (fib[fib.length - 1] < x) {
        if (fib.length < 2) {
            fib.push(1);
        }
        else {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
    }

    return fib;
}
