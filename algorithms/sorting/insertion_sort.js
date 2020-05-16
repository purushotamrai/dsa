// https://www.geeksforgeeks.org/insertion-sort/

var input = [4, 3, 2, 10, 12, 1, 5, 6];
print(insertionSort(input));

function insertionSort(inputArr) {
    for (var i = 1; i < inputArr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (inputArr[i] < inputArr[j]) {
                inputArr = insertElement(j, i, inputArr);
            } 
        }
    }

    return inputArr;
}

function insertElement(pos, valIndex, inputArr) {
  var value = inputArr[valIndex];
  while (valIndex > pos) {
    inputArr[valIndex] = inputArr[valIndex - 1];
    valIndex--; 
  }

  inputArr[pos] = value;

  return inputArr;
}
