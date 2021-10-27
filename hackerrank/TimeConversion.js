'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let splitTime = s.split("PM");
    let splitElems = splitTime[0].split(':');
    let result = null;
    
    if (splitTime.length === 1) {
        result = (splitElems[0] === '12' ? '00' : splitElems[0]) + ':' + splitElems[1] + ':' + splitElems[2].split("AM")[0];
    }
    else {
        
        console.log(splitElems);
        let hour = Number(splitElems[0]);
        let splitHours = Number(splitElems[0]);
        result = (splitHours === 12 ? '12' : splitHours + 12) + ':' + splitElems[1] + ':' + splitElems[2];
    }
    console.log(result);
    
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
