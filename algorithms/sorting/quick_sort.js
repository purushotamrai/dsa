// https://www.geeksforgeeks.org/quick-sort/

var input = [10, 90, 70, 80, 30, 40, 50];
print(quickSort(input));

function quickSort(inputArr, l = 0, r = inputArr.length - 1, p = inputArr.length - 1) {
    var left = [];
    var right = [];
    for (var i = l; i < p; i++) {
        if (inputArr[i] < inputArr[p]) {
            left.push(inputArr[i]);
        }
        else {
            right.push(inputArr[i]);
        }
    }

    if (right.length > 0 && left.length > 1) {
        left = quickSort(left);
        right = quickSort(right);   
    }

    // @todo Probably need to remove this concat function usage without another loop.
    left = left.concat([inputArr[p]]);
    inputArr = left.concat(right);
    return inputArr;
}
