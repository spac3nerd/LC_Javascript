//In place algorithm

//Solution 1 - I find the shortest element  and check the first character. Then I compare substrings of the
//shortest element with every other element until a difference is found
var longestCommonPrefix_1 = function(strs) {
    if (strs.length === 0)
        return '';
    if (strs.length === 1)
        return strs[0];

    let currentPrefix = strs[0][0];
    if (currentPrefix === undefined)
        return '';

    //We will find the shortest element and check to see that all elements share at least teh first character
    //Knowing the shortest element allows us to say that the common prefix is at most this long
    let minElem = strs[0];
    for (let k = 0; k < strs.length; k++) {
        if (strs[k].length < minElem.length)
            minElem = strs[k];
        if (strs[k][0] !== currentPrefix)
            return '';
    }

    //iterate over the length of the shortest element
    let n = 1; //we know the first element is already shared
    while (n < minElem.length) {
        currentPrefix += minElem[n];
        for (let i = 0; i < strs.length; i++) {
            if (currentPrefix !== strs[i].substring(0, n + 1)) {
                return currentPrefix.substring(0, currentPrefix.length - 1);
            }
        }
        n++;
    }
    return currentPrefix;
};

//SOlution 2- can be simplified to one loop
var longestCommonPrefix = function(strs) {
    if (strs.length === 0)
        return '';
    if (strs.length === 1)
        return strs[0];

    let currentPrefix = strs[0];

    for (let k = 0; k < strs.length; k++) {
        //while the substring was not found
       while (strs[k].indexOf(currentPrefix) !== 0) {
           currentPrefix = currentPrefix.substring(0, currentPrefix.length - 1);
       }

    }
    return currentPrefix;
};




function runTest() {
     console.log(longestCommonPrefix(["flower","flow","flight"]));
     // console.log(longestCommonPrefix(["dog","racecar","car"]));
    // console.log(longestCommonPrefix(["aa","ab"]));
    // console.log(longestCommonPrefix(["aac","ab"]));


}

runTest();