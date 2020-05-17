// https://www.geeksforgeeks.org/merge-sort/

var input = [38, 27, 43, 3, 9, 82, 10];
print(mergeSort(input));

function mergeSort(inputArr, l = 0, r = inputArr.length - 1) {
    if (r > l) {
        var m = Math.floor(( l + r ) / 2);
        mergeSort(inputArr, l, m);
        mergeSort(inputArr, m + 1, r);

        inputArr = merge(inputArr, l, m, r);
    }

    return inputArr;
}

function merge(inputArr, l, m, r) {
    var left = l;
    var right = m + 1;
    var sortedArr = [];
    while (left <= m && right <= r){
        if (inputArr[left] < inputArr[right]) {
            sortedArr.push(inputArr[left]);
            left++;
        }
        else {
            sortedArr.push(inputArr[right]);
            right++;
        }
    }

    while (left <= m) {
        sortedArr.push(inputArr[left]);
        left++;
    }

    while (right <= r) {
        sortedArr.push(inputArr[right]);
        right++;
    }

    for (var i = l, j = 0; i <= r; i++, j++) {
        inputArr[i] = sortedArr[j];
    }

    return inputArr;
}
