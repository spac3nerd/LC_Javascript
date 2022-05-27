//solution 2 discards the visited map and modifies grid in place
let orangesRotting = (grid) => {

    let height = grid.length;
    let width = grid[0].length;
    //contains the rules for all possible moves to adjacent cells from any given cell
    let directionMap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let queue = [];
    let minutes = 0;

    //defining a quick clamping function to use in our traversal, we always know that min is 0
    let clamp = (n, max) => {
        return n <= 0 ? 0 : n >= max ? max : n;
    };
    let hash = {};

    let rotOranges = (queue) => {
        let adjacents = [];

        while (queue.length !== 0 || adjacents.length !== 0) {

            while (queue.length !== 0) {
                let id = queue.pop();
                let row = Math.floor(id / (width));
                let col = id % (width);

                directionMap.forEach((d) => {
                    let w = clamp(row + d[0], height - 1);
                    let h = clamp(col + d[1], width - 1);
                    if (grid[w][h] === 1) {
                        hash[w * (width) + h] = false;
                        grid[w][h] = 2;
                        adjacents.push(w * (width) + h);
                    }
                });
            }
            minutes++;
            queue = [...adjacents];
            adjacents = [];
        }

        return minutes;
    };


    for (let k = 0; k < height; k++) {
        for (let n = 0; n < width; n++) {
            if (grid[k][n] === 1) {
                hash[(k * (width)) + n] = true;
            }
            if (grid[k][n] === 2) {
                queue.push((k * (width)) + n);
            }

        }
    }



    rotOranges(queue);

    for (let o in hash) {
        if (hash[o] === true) {
            minutes = -1;
        }
    }
    return rotOranges(queue) - 1;
};



let test1 = () => {
    console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
    // console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));
};


runTest = () => {

    console.time("two");
    test1();
    console.timeEnd("two");

};

runTest();
