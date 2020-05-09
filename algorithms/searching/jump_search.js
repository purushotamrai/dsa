// https://www.geeksforgeeks.org/jump-search/

var inputArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
var x = 21;
print(jumpSearch(inputArr, 55));

function jumpSearch(inputArr, x) {
    var m = Math.sqrt(inputArr.length);
    var start = 0;
    var end = m;
    var found = -1;

    while (found == -1 && end < inputArr.length) {
        if (inputArr[start] == x) {
            found = start;
        }
        else if (inputArr[end] == x) {
            found = end;
        }
        else if (x < inputArr[end]) {
            // Perform linear search.
            for (var i = start; i <= end; i++) {
                if (inputArr[i] == x) {
                    found = i;
                }
            }

            if (found == -1) {
                end = inputArr.length;
            }
        }
        else {
            start = end + 1;
            end = start + m;
        }
    }

    return found;
}
