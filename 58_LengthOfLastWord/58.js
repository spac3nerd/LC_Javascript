

var lengthOfLastWord = function(s) {
    let foundChars = false;
    let l = 0;

    for (let k = s.length - 1; k >= 0; k--) {
        if (s[k] !== " ") {
            foundChars = true;
            l++;
        }
        else {
            //if we previously found actua characters, then we already counted the last
            //  word and thus we can set out terminating condition
            if (foundChars) {
                k = -1;
            }

        }
    }

    return l;
};




//expect [1,2,3]
function test1() {
    // console.log(lengthOfLastWord("Hello World"));
    // console.log(lengthOfLastWord("   fly me   to   the moon  "));
    console.log(lengthOfLastWord("a"));
}

function runTest() {
    test1();
}

runTest();
