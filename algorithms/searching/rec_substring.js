// https://www.geeksforgeeks.org/recursive-function-to-do-substring-search/

var testString = 'geeksforgeeks';
var testSub = 'geeks';
print(recSubstringSearch(testString.split(''), testSub.split('')));

function recSubstringSearch(stringArr, subArr, unmatched = subArr) {
  if (unmatched.length > 0) {
    if (stringArr.length > 0) {
        var stringTop = stringArr.pop();
        if (stringTop == unmatched[unmatched.length - 1]) {
            unmatched.pop();
            return recSubstringSearch(stringArr, subArr, unmatched);
        }
        else {
            unmatched = subArr;
            return recSubstringSearch(stringArr, subArr, unmatched);
        }      
    }
    else {
        return false;
    }
  }
  else {
      return true;
  }

  return false;
}
