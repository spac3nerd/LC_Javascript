'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let posCount = 0;
    let negCount = 0; 
    let zeroCount = 0;
    
    arr.forEach((item, index, array) => {
        if (item > 0) {
            posCount++;
        }
        else if (item < 0) {
            negCount++;
        }
        else {
            zeroCount++;
        }
    });
    
    console.log(posCount / arr.length);
    console.log(negCount / arr.length);
    console.log(zeroCount / arr.length);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
