const adjacentMap = [
    [0, 0],  //Added no modifier so we can include the full check for the current cell as well
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
];


/**
 * @param {string[][]} board
 * @param {number[]} click
 * @return {string[][]}
 */
let updateBoard = (board, click) => {
    let m = board.length;
    let n = board[0].length;
    let clickCell = board[click[0]][click[1]];


    /**
     *
     * @param {number[]} cell
     * @return {number} the number of adjacent, unrevealed mines
     */
    let checkAdjacent = (cell) => {
        let adjacentSum = 0;
        adjacentMap.forEach(([x, y]) => {
            let newX = cell[0] + x;
            let newY = cell[1] + y;

            //check to make sure the new coordiante is in bounds
            if (newX >= 0 && newY >= 0 && newX < m && newY < n) {
                if (board[newX][newY] === "M") {
                    adjacentSum++;
                }
            }
        });

        return adjacentSum;
    };


    let revealAdjacent = (cell) => {
        adjacentMap.forEach(([x, y]) => {
            let newX = cell[0] + x;
            let newY = cell[1] + y;

            //check to make sure the new coordiante is in bounds
            if (newX >= 0 && newY >= 0 && newX < m && newY < n) {
                if (board[newX][newY] === "E") {
                    let mineCount = checkAdjacent([newX, newY]);
                    if (mineCount > 0) {
                        board[newX][newY] = mineCount.toString();
                    }
                    else {
                        board[newX][newY] = "B";
                        revealAdjacent([newX, newY]);
                    }

                }
            }
        });
    };

    if (clickCell === "M") {
        board[click[0]][click[1]] = "X";

        return board;
    }
    if (clickCell === "E") {
        //board[click[0]][click[1]] = "B";
        revealAdjacent(click);
    }

    return board;
};




function runTest() {
    //console.log(updateBoard([["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], [3,0]));
    console.log(updateBoard([["B","B","B","B","B","B","1","E"],["B","1","1","1","B","B","1","M"],["1","2","M","1","B","B","1","1"],["M","2","1","1","B","B","B","B"],["1","1","B","B","B","B","B","B"],["B","B","B","B","B","B","B","B"],["B","1","2","2","1","B","B","B"],["B","1","M","M","1","B","B","B"]]
        ,[0,7]));
}

runTest();
