// https://www.geeksforgeeks.org/interpolation-search/

var inputArr = [2, 4, 6, 8, 9, 11, 14, 17, 21, 25, 28, 31, 33, 37];
print(interpolationSearch(inputArr, 37));

function interpolationSearch(inputArr, x) {
    var start = 0;
    var end = inputArr.length - 1;
    var pos = Math.ceil(start + [(x - inputArr[start]) * (end - start)]/(inputArr[end] - inputArr[start]));
    var found = -1;

    if (inputArr[start] == x) {
        found = start;
    }
    else if(inputArr[end] == x) {
        found = end;
    }

    while (found == -1 && end != pos && start != pos) {
        if (inputArr[start] == x) {
            found = start;
        }
        else if(inputArr[end] == x) {
            found = end;
        }
        else if (inputArr[pos] == x) {
            found = pos;
        }
        else {
            if (inputArr[pos] > x) {
                end = pos;
                pos = Math.ceil(start + [(x - inputArr[start]) * (end - start)]/(inputArr[end] - inputArr[start]));
            }
            else {
                start = pos;
                pos = Math.ceil(start + [(x - inputArr[start]) * (end - start)]/(inputArr[end] - inputArr[start]));
            }
        }
    }

    return found;
}
