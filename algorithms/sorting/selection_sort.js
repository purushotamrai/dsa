// https://www.geeksforgeeks.org/selection-sort/

var input = [65, 25, 12, 22, 11];
print(selectionSort(input));

function selectionSort(inputArr) {
    for (var i = 0; i < inputArr.length - 1; i++) {
        // Find minimum in the subset.
        var min = i;
        for (var j = i + 1; j < inputArr.length; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }

        // Swap i and min.
        if (i !== min) {
            inputArr[i] = inputArr[i] + inputArr[min];
            inputArr[min] = inputArr[i] - inputArr[min];
            inputArr[i] = inputArr[i] - inputArr[min];
        }
    }

    return inputArr;
}
