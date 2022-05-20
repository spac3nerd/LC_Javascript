/**
 * @param {string[]} tokens
 * @return {number}
 */
    //This is the simplified subset of the RPN problem
let evalRPN1 = (tokens) => {
    let operators = {
        "+" : true,
        "-": true,
        "/": true,
        "*": true
    };

    for (let k = 0; k < tokens.length; k++) {
        //we need to replace the preceeding two elements and k with the result
        if (tokens[k] in operators) {
            let a = Number(tokens[k - 2]);
            let b = Number(tokens[k - 1]);
            let r;

            switch (tokens[k]) {
                case "+":
                  r = a + b;
                  break;
                case "-":
                    r = a -b;
                    break;
                case "/":
                    r = r = a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b);
                    break;
                case "*":
                    r = a * b;
                    break;
            }

            tokens[k] = r;
            tokens.splice(k - 2, 2);

            k = 0;
        }
    }

    return tokens[0];
};



//trying to optimize this by no calling slice, slower but slightly better memory usage
let evalRPN2 = (tokens) => {
    let operators = {
        "+" : true,
        "-": true,
        "/": true,
        "*": true
    };
    let e = tokens.length - 1;
    let bi;
    let ai;
    let a;
    let b;
    let r;

    let findPrevV = (k) => {
        if (tokens[k] === "") {
            return findPrevV(k - 1);
        }
        else {
            return k;
        }

    };

    for (let k = 0; k < tokens.length; k++) {
        //we need to replace the preceeding two elements and k with the result
        if (tokens[k] in operators) {
            bi = findPrevV(k - 1);
            ai = findPrevV(bi - 1);
            a = Number(tokens[ai]);
            b = Number(tokens[bi]);

            switch (tokens[k]) {
                case "+":
                    r = a + b;
                    break;
                case "-":
                    r = a -b;
                    break;
                case "/":
                    r = r = a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b);
                    break;
                case "*":
                    r = a * b;
                    break;
            }

            tokens[k] = r;
            tokens[ai] = "";
            tokens[bi] = "";

            if (k === e) {
                return tokens[e];
            }

            k = 0;
        }
    }

    return tokens[e];
};

//trying to optimize this by no calling slice, slower but slightly better memory usage
let evalRPN = (tokens) => {
    let operators = {
        "+" : true,
        "-": true,
        "/": true,
        "*": true
    };
    let e = tokens.length - 1;
    let bi;
    let ai;
    let a;
    let b;
    let r;
    let pi = null;

    for (let k = 0; k < tokens.length; k++) {
        //we need to replace the preceeding two elements and k with the result
        if (tokens[k] in operators) {
            if (pi === null || pi < 0) {
                pi = k - 1;
            }
            bi = tokens[k - 1] === "" ? pi : k - 1;
            ai = tokens[k - 2] === "" ? pi : k - 2;
            a = Number(tokens[k - 2]);
            // b = tokens[k - 1] === "" ? Number(tokens[pi]) : Number(tokens[k - 1]);
            b = Number(tokens[bi]);
            a = Number(tokens[ai]);

            switch (tokens[k]) {
                case "+":
                    r = a + b;
                    break;
                case "-":
                    r = a -b;
                    break;
                case "/":
                    r = r = a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b);
                    break;
                case "*":
                    r = a * b;
                    break;
            }

            tokens[k] = r;
            pi = pi - 2;
            tokens[ai] = "";
            tokens[bi] = "";

            if (k === e) {
                return tokens[e];
            }

            k = 0;
        }
    }

    return tokens[e];
};

function runTest() {
    console.log(evalRPN(["2","1","+","3","*"]));
    console.log(evalRPN(["4","13","5","/","+"]));
    console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
}

runTest();
