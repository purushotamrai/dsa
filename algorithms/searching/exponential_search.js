// https://www.geeksforgeeks.org/exponential-search/

var inputArr = [2, 4, 6, 8, 9, 11, 14, 17, 21, 25, 28, 31, 33, 37];
print(exponentialSearch(inputArr, 14));

function exponentialSearch(arr, x) {
    if (arr[0] == x) {
        return 0;
    }

    var i = 1;
    var n = arr.length - 1;
    while (i < n && arr[i] <= x) {
        i = i * 2;
    }

    return binarySearch(arr, i / 2, Math.min(i, n), x);
}

function binarySearch(arr, start, end, x) {
    if (end >= start) {
        var mid = Math.ceil((start + end) / 2);
        
        if (arr[mid] == x) {
            return mid;
        }
    
        if (arr[mid] > x) {
            return binarySearch(arr, start, mid - 1, x);
        }
        else if (arr[mid] < x) {
            return binarySearch(arr, mid + 1, end, x);
        }
    }

    return -1;
}
