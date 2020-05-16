// https://www.geeksforgeeks.org/bubble-sort/

var input = [5, 1, 4, 2, 8];
print(bubbleSort(input));

function bubbleSort(inputArr) {
    var swapped = true;
    while (swapped) {
        var swapped = false;
        for (var i = 0; i < inputArr.length; i++) {
            j = i + 1;
            if (inputArr[i] > inputArr[j]) {
                // Swap the two numbers;
                inputArr[i] = inputArr[i] + inputArr[j];
                inputArr[j] = inputArr[i] - inputArr[j];
                inputArr[i] = inputArr[i] - inputArr[j];
                swapped = true;
            }
        }
    }

    return inputArr;
}
