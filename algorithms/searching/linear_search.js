// https://www.geeksforgeeks.org/linear-search/

var input = [20, 30, 40, 50, 60, 70, 80];
var x = 70;
print(linearSearch(input, x));

function linearSearch(arr, x) {
    var found = -1;
    for (var key in arr) {
        if (arr[key] == x) {
            found = key;
        }
    }

    return found;
}
