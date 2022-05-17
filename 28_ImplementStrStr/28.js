var strStr = function(haystack, needle) {
    let i = 0;
    for (let k = 0; k < haystack.length; k++) {
        if (haystack[k] === needle[0]) {
            let ni = 1;
            let end = false;
            while (!end) {
                if (haystack[k + ni] !== needle[ni]) {
                    end = true;
                }
                if (ni === needle.length) {
                    return k;
                }
                ni++;
            }
        }
    }
    return -1;
};

runTest = () => {
    console.log(strStr("hello", "ll"));
};

runTest();
