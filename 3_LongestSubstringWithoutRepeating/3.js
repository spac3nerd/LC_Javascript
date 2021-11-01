


//Straight forward solution in O(n) time in which we can simply iterate once and use an intermediate string to keep track of th currently longest substring
let lengthOfLongestSubstring = (s) => {
    let longestString = 0;
    let compStr = [];

    for (let k = 0; k < s.length; k++) {
        if (compStr.indexOf(s[k]) >= 0) {
            if (compStr.indexOf(s[k]) === compStr.length - 1) {
                compStr = s[k];
            }
            else if (compStr.indexOf(s[k]) === 0) {
                //compStr = compStr.slice(compStr.indexOf(s[k]) - 1);
                compStr = compStr.slice(1);
                compStr += s[k];
            }
            else {
                //if there exists an element already ,we can pop off the first
                compStr = compStr.slice(compStr.indexOf(s[k]) + 1);
                compStr += s[k];
            }
        }
        else {
            compStr += s[k];
        }
        longestString = Math.max(longestString, compStr.length);
    }

    return longestString;
};







function runTest() {
    console.log(lengthOfLongestSubstring("abcabcbb"));
    console.log(lengthOfLongestSubstring("bbbbb"));
    console.log(lengthOfLongestSubstring("pwwkew"));
    console.log(lengthOfLongestSubstring(""));
    console.log(lengthOfLongestSubstring(" "));
    console.log(lengthOfLongestSubstring("aabaab!bb"));
    console.log(lengthOfLongestSubstring("dvdf"));
    console.log(lengthOfLongestSubstring("anviaj"));
    console.log(lengthOfLongestSubstring("ggububgvfk"));
}

runTest();
