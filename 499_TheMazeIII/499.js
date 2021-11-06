
//Starting off with the implementation from Maze II


function Cell(cell, path, moves) {
    this.cell = (cell===undefined ? 0 : cell);
    this.moves = (moves===undefined ? 0 : moves);
    this.path = (path===undefined ? 0 : path);
}

/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
let findShortestWay = (maze, ball, hole) => {
    let mazeWidth = maze[0].length;
    let mazeHeight = maze.length;
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let charMap = ["u", "r", "d", "l"];
    let queue = [];
    let max = Math.pow(2, 36);

    let length = maze.map((item) => {
        return item.map((i2) => {
            return max;
        });
    });

    let pArr = maze.map((item) => {
        return item.map(() => {
            return "ZZZZZZZZZZZZZ";
        });
    });

    //visitedCells[ball[0]][ball[1]] = true;
    let i = new Cell([ball[0], ball[1]], "", 0);
    queue.push(i);
    let shortestPath = null;
    let paths = [];

    while (queue.length > 0) {

        let k = queue.shift();
        // console.log(k.path);
        let x = k.cell[0], y = k.cell[1];
        if ((length[k.cell[0]][k.cell[1]] < k.moves)) {
            continue;
            // if (k.path === "drd") {
            //     console.log("noo")
            // }
            // if (pArr[k.cell[0]][k.cell[1]].indexOf(k.path.slice(0, -1)) === 0 && k.path.slice(0, -1).indexOf(pArr[k.cell[0]][k.cell[1]]) === 0) {
            //     console.log(pArr[k.cell[0]][k.cell[1]] + " " + k.path);
            //
            // }
            if (k.path.indexOf(pArr[k.cell[0]][k.cell[1]]) === -1) {
                if (k.moves > shortestPath) {
                    // console.log("skip");
                    continue;
                }
            }
            if (shortestPath && k.moves > shortestPath) {
                // console.log("skip");
                continue;
            }
            // console.log(pArr[k.cell[0]][k.cell[1]] + " " + k.path);
            // continue;
        }
        else {
            pArr[k.cell[0]][k.cell[1]] = k.path;
        }

        length[k.cell[0]][k.cell[1]] = k.moves;



        //for every direction
        for (let n = 0; n < 4; n++) {
            let xx = x;
            let yy = y;
            let c = 0;
            let p = "";


            while (xx >= 0 && xx < mazeHeight && yy >= 0 && yy < mazeWidth && maze[xx][yy] === 0) {


                if (xx === hole[0] && yy === hole[1]) {
                    shortestPath = shortestPath === null ? (k.moves + c) : Math.min(k.moves + c, shortestPath);
                    paths.push({
                        m: k.moves + c,
                        p: k.path + charMap[n]
                    });
                }


                xx+=directionMap[n][0];
                yy+=directionMap[n][1];
                c++;
            }
            xx-=directionMap[n][0];
            yy-=directionMap[n][1];
            c--;

            if (c > 0) {
                queue.push(new Cell([xx, yy], k.path + charMap[n], k.moves + c));
            }
        }
    }
    // console.log(shortestPath);
    // console.log(paths);
    let shortestPaths = paths.reduce((acc, item) => {
        if (item.m === shortestPath) {
            acc.push(item.p);
        }
        return acc;
    }, []);
    shortestPaths.sort((a,b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    return shortestPaths[0] === undefined ? "impossible" : shortestPaths[0];
};

function runTest() {
    let t = new Date();
    // console.log(findShortestWay([[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4, 3], [0,1])); //expect lul
    // console.log(findShortestWay([[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4, 3], [3,0])); //expect lul
    // console.log(findShortestWay([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0, 4], [4,4])); //expect ldldrdr
    console.log(findShortestWay([[0,1,0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0,1,0],[0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,1,0,0,1],[0,1,0,0,1,0,0,1,0,0],[0,0,1,0,0,1,0,0,0,0],[0,0,0,0,0,0,1,0,0,0],[1,0,0,1,0,0,0,0,0,1],[0,1,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,0,0,1,0]]
        ,[2,4]
        ,[7,6])); //expect "drdrdrdldl"


    console.log((new Date()) - t);
}

runTest();



