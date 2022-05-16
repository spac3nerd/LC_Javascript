

var lengthOfLastWord = function(s) {
    let mL = 0;
    let l = 0;

    for (let k = s.length; k > 0; k--) {
        if (s[k] !== " ") {
            l++;
        }
        else {
            mL = Math.max(l, mL);
            l = 0;
            if (mL !== 0) {
                return mL;
            }

        }
    }

    return l;
};




//expect [1,2,3]
function test1() {
    lengthOfLastWord("Hello World");
    lengthOfLastWord("   fly me   to   the moon  ");
}

function runTest() {
    test1();
}

runTest();
