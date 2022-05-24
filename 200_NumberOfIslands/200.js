/**
 * @param {string[][]} grid
 * @return {number}
 */
let numIslands_1 = (grid) => {

    let width = grid.length - 1;
    let height = grid[0].length - 1;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    //a copy of the grid which we use to track whether or not we visited a cell already
    //  0 - not visited, 1 - visited
    // let visitedMap = [...Array(grid.length)].map(e => Array(grid[0].length).fill(0));
    let visitedMap = [...Array(width + 1)].map(x=>Array(height + 1).fill(0))
    let islandCount = 0;

    //defining a quick clamping function to use in our traversal, we always know that min is 0
    let clamp = (n, max) => {
        return n <= 0 ? 0 : n >= max ? max : n;
    };

    let mapAdjacent = (k, n) => {
        directionMap.forEach( (d) => {
            let w = clamp(k + d[0], width);
            let h = clamp(n + d[1], height);
            if (grid[w][h] === "1") {
                if (visitedMap[w][h] !== "1") {
                    visitedMap[w][h] = "1";
                    mapAdjacent(w, h);
                }
            }
        });
    };

    for (let k = 0; k < width + 1; k++) {
        for (let n = 0; n < height + 1; n++) {
            if (grid[k][n] === "1") {
                if (visitedMap[k][n] === 0) {
                    mapAdjacent(k, n);
                    islandCount++;
                }
            }
        }
    }

    return islandCount;
};


//Maybe we can optimize solution 1 by discarding the visitedMap altogether and tracking visits in grid directly
let numIslands = (grid) => {

    let width = grid.length - 1;
    let height = grid[0].length - 1;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let islandCount = 0;

    //defining a quick clamping function to use in our traversal, we always know that min is 0
    let clamp = (n, max) => {
        return n <= 0 ? 0 : n >= max ? max : n;
    };

    let mapAdjacent = (k, n) => {
        directionMap.forEach( (d) => {
            let w = clamp(k + d[0], width);
            let h = clamp(n + d[1], height);
            if (grid[w][h] === "1") {
                grid[w][h] = "2";
                mapAdjacent(w, h);
            }
        });
    };

    for (let k = 0; k < width + 1; k++) {
        for (let n = 0; n < height + 1; n++) {
            if (grid[k][n] === "1") {
                mapAdjacent(k, n);
                islandCount++;
            }
        }
    }

    return islandCount;
};



let test1 = () => {
    let grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ];
    console.log(numIslands(grid));
};

let test2 = () => {
    let grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ];
    console.log(numIslands(grid));
};


runTest = () => {
    // test1();
    test2();
};

runTest();
