//Solution 1 - uses a separate visited map
let maxAreaOfIsland_1 = (grid) => {
    let Q = (function() {

        // initialise the queue and offset
        var queue = [];
        var offset = 0;

        this.getLength = function () {

            // return the length of the queue
            return (queue.length - offset);

        };

        this.isEmpty = function () {

            // return whether the queue is empty
            return (queue.length == 0);

        };

        this.add = function (item) {
            return queue.push(item);
        };


        this.get = function () {

            // if the queue is empty, return undefined
            if (queue.length == 0) return undefined;

            // store the item at the front of the queue
            var item = queue[offset];

            // increment the offset and remove the free space if necessary
            if (++offset * 2 >= queue.length) {
                queue = queue.slice(offset);
                offset = 0;
            }

            return item;

        };

        this.peek = function () {

            // return the item at the front of the queue
            return (queue.length > 0 ? queue[offset] : undefined);

        };

    });

    let height = grid.length;
    let width = grid[0].length;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let islandCount = 0;
    let visitedMap = [...Array(height)].map(x=>Array(width).fill(0));

    //defining a quick clamping function to use in our traversal, we always know that min is 0
    let clamp = (n, max) => {
        return n <= 0 ? 0 : n >= max ? max : n;
    };

    let mapAdjacent = (k, n) => {
        let queue = new Q();
        queue.add((k * (width)) + n);
        let area = 1;
        visitedMap[k][n] = 1;

        while (queue.getLength() != 0) {
            let id = queue.get();
            let row = Math.floor(id / (width));
            let col = id % (width);

            directionMap.forEach( (d) => {
                let w = clamp(row + d[0], height - 1);
                let h = clamp(col + d[1], width - 1);
                if (grid[w][h] === 1) {
                    if (visitedMap[w][h] !== 1) {
                        visitedMap[w][h] = 1;
                        queue.add(w * (width) + h);
                        area++;
                    }
                }
            });
        }

        return area;
    };

    let maxArea = 0;
    for (let k = 0; k < height; k++) {
        for (let n = 0; n < width; n++) {
            if (grid[k][n] === 1) {
                if (visitedMap[k][n] === 0) {
                    maxArea = Math.max(maxArea, mapAdjacent(k, n));
                    islandCount++;
                }
            }
        }
    }

    return maxArea;
};


//solution 2 discards the visited map and modifies grid in place
let maxAreaOfIsland = (grid) => {

    let height = grid.length;
    let width = grid[0].length;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let islandCount = 0;

    //defining a quick clamping function to use in our traversal, we always know that min is 0
    let clamp = (n, max) => {
        return n <= 0 ? 0 : n >= max ? max : n;
    };

    let mapAdjacent = (k, n) => {
        let queue = [];
        queue.push((k * (width)) + n);
        let area = 1;
        grid[k][n] = 0;

        while (queue.length !== 0) {
            let id = queue.pop();
            let row = Math.floor(id / (width));
            let col = id % (width);

            directionMap.forEach( (d) => {
                let w = clamp(row + d[0], height - 1);
                let h = clamp(col + d[1], width - 1);
                if (grid[w][h] === 1) {
                    grid[w][h] = 0;
                    queue.push(w * (width) + h);
                    area++;
                }
            });
        }

        return area;
    };

    let maxArea = 0;
    for (let k = 0; k < height; k++) {
        for (let n = 0; n < width; n++) {
            if (grid[k][n] === 1) {
                maxArea = Math.max(maxArea, mapAdjacent(k, n));
                islandCount++;
            }
        }
    }

    return maxArea;
};



let test1 = () => {
    console.log(maxAreaOfIsland_1([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));
    // console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));
};

let test2 = () => {
    console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));
    // console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));
};

runTest = () => {
    console.time("one");
    // test1();
    console.timeEnd("one");

    console.time("two");
    test2();
    console.timeEnd("two");

};

runTest();
