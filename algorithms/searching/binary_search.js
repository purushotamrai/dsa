// https://www.geeksforgeeks.org/binary-search/

var inputArr = [2, 4, 6, 8, 9, 11, 14, 17, 21, 25, 28, 31, 33, 37];
var find = 25;
print(binarySearch(inputArr, 2));

function binarySearch(inputArr, x) {
    var found = -1;
    var start = 0;
    var end = inputArr.length - 1;
    var mid = Math.ceil((start + end) / 2);

    while (found == -1 && end != mid && start != mid) {
        if (inputArr[start] == x) {
            found = start;
        }
        else if(inputArr[end] == x) {
            found = end;
        }
        else if (inputArr[mid] == x) {
            found = mid;
        }
        else {
            if (inputArr[mid] > x) {
                end = mid;
                mid = Math.ceil((start + end) / 2);
            }
            else {
                start = mid;
                mid = Math.ceil((start + end) / 2);
            }
        }
    }

    return found;
}
