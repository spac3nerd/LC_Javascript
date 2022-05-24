
//Starting off with the Number of Islands I solution
//I will augment it to include pre-population and inclusion of land of grid.
//This is likely to run over time
let numIslands2_1 = (m, n, positions) => {
    let grid = [...Array(m)].map(x=>Array(n).fill(0));

    let width = m - 1;
    let height = n - 1;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let islandCount = 0;
    let totalICount = [];

    let visitedMap;

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


    positions.forEach(p => {
        grid[p[0]][p[1]] = "1";
        islandCount = 0;
        visitedMap = [...Array(m)].map(x=>Array(n).fill(0));
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
        totalICount.push(islandCount);
    });

    return totalICount;
};



//Trying to optimize a bit by not iterating though the entire grid at every new addition of land
// This necessitates that I ensure that I track whether that new piece of land is adjacent to an existing piece of land
//   thus not constituting a new island.
let numIslands2 = (m, n, positions) => {
    let grid = [...Array(m)].map(x=>Array(n).fill(0));

    let width = m - 1;
    let height = n - 1;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let islandCount = 0;
    let totalICount = [];

    let visitedMap;

    //defining a quick clamping function to use in our traversal, we always know that min is 0
    let clamp = (n, max) => {
        return n <= 0 ? 0 : n >= max ? max : n;
    };

    //moved to a flat loop so we can return to the caller
    let mapAdjacent = (k, n) => {
        for (let a = 0; a < directionMap.length; a++) {
            let w = clamp(k + directionMap[a][0], width);
            let h = clamp(n + directionMap[a][1], height);

            if (grid[w][h] === "2") {
                grid[w][h] = "1";
                grid[k][n] = "1";
                return false
            }

            if (grid[w][h] === "1") {
                if (visitedMap[w][h] !== "1") {
                    visitedMap[w][h] = "1";

                    let r =  mapAdjacent(w, h);
                    if (r !== false) {
                        grid[w][h] = "2";
                    }

                    return r;
                }
            }
        }
    };

    //Todo: this doesn't work if adding a new piece of land decreases teh total number of islands
    islandCount = 0;
    positions.forEach(p => {
        grid[p[0]][p[1]] = "1";

        let iter = () => {
            visitedMap = [...Array(m)].map(x=>Array(n).fill(0));
            if (grid[p[0]][p[1]] === "1") {
                if (visitedMap[p[0]][p[1]] === 0) {
                    let a = mapAdjacent(p[0], p[1]);
                    if (a !== false) {
                        islandCount++;
                    }
                    //patching for the case where the new piece of land creates fewer islands
                    else {
                        //since mapAdjacent will reset that found adjacent, check again
                        iter();
                    }
                }
            }
            totalICount.push(islandCount);
        };
        iter();
    });

    return totalICount;
};



let test1 = () => {
    console.log(numIslands2(3, 3, [[0,0],[0,1],[1,2],[2,1]]));
};

let test2 = () => {
    console.log(numIslands2(2, 2, [[0,0],[1,1],[0,1]]));
};



runTest = () => {
    // test1();
    test2();
};

runTest();
