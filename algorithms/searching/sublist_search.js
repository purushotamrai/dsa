// https://www.geeksforgeeks.org/sublist-search-search-a-linked-list-in-another-list/

var sublist = [2, 3, 4];
var list = [1, 2, 3, 5, 1, 2, 4, 2, 3, 4, 5, 2, 3, 4, 2];
print(sublistSearch(list, sublist));

function sublistSearch(main, sub) {
    var mainLength = main.length;
    var subLength = sub.length;
    
    if (subLength <= mainLength) {
        for (var mainKey in main) {
            mainKey = parseInt(mainKey);
            console.log(mainKey);
            if ((mainLength - mainKey) >= subLength) {
                var current = mainKey;
                var matches = true;
                var currentSub = 0;

                while ((current < (mainKey + subLength)) && matches) {
                    if (main[current] != sub[currentSub]) {
                        matches = false;
                    }
                    current++;
                    currentSub++;
                }

                if (matches) {
                    return mainKey;
                }
            }
        }
    }

    return false;
}
