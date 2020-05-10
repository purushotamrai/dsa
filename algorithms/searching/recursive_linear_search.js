// https://www.geeksforgeeks.org/recursive-c-program-linearly-search-element-given-array/

var inputArr = [29,33,25,16,18,22,44,27,28];
print(recursiveLinearSearch(inputArr, 22));

function recursiveLinearSearch(arr, x, index = arr.length) {
    if (arr.length > 0) {
        index--;
        if (arr.pop() == x) {
            return index;
        }
        return recursiveLinearSearch(arr, x, index);
    }

    return -1;
}
