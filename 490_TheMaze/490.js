//I'll try implementing a tree structure to keep track of the path - maybe a map to keep track of previously visited cells too?
//Actually - since this problem doesn't care about the actual path, or whether it's optimal, I don't need this tree structure at all

function Node(cell, l, r, u, d) {
    this.cell = (cell===undefined ? 0 : cell);
    this.l = (l===undefined ? null : l);
    this.r = (r===undefined ? null : r);
    this.u = (u===undefined ? null : u);
    this.d = (d===undefined ? null : d);
}




/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
    //First solution, which uses the tree structure defined above
let hasPath1 = (maze, start, destination) => {

    let mazeWidth = maze[0].length;
    let mazeHeight = maze.length;

    let canMoveLeft = function(cell) {
        if ( (cell[1] === 0) || maze[cell[0]][cell[1] - 1] === 1) {
            return false
        }

        return true;
    };
    let canMoveRight = function(cell) {
        if ( (cell[1] === mazeWidth - 1) || maze[cell[0]][cell[1] + 1] === 1) {
            return false
        }

        return true;
    };
    let canMoveUp = function(cell) {
        if ( (cell[0] === 0) || maze[cell[0] - 1][cell[1]] === 1) {
            return false
        }

        return true;
    };
    let canMoveDown = function(cell) {
        if ( (cell[0] === mazeHeight - 1) || maze[cell[0] + 1][cell[1]] === 1) {
            return false
        }

        return true;
    };

    let getNewLeft = (cell) => {
        let k = cell[1];

        while (canMoveLeft([cell[0], k])) {
            k--;
        }
        return [cell[0], k];
    };

    let getNewRight = (cell) => {
        let k = cell[1];

        while (canMoveRight([cell[0], k])) {
            k++;
        }
        return [cell[0], k];
    };

    let getNewUp = (cell) => {
        let k = cell[0];

        while (canMoveUp([k, cell[1]])) {
            k--;
        }
        return [k, cell[1]];
    };

    let getNewDown = (cell) => {
        let k = cell[0];

        while (canMoveDown([k, cell[1]])) {
            k++;
        }
        return [k, cell[1]];
    };

    let createKey = (cell) => {
        return cell[0].toString() + cell[1].toString();
    };


    let pathExists = false;
    let visitedMap = {};

    //recursive movement function which builds the tree
    let move = function(node) {

        if (pathExists) {
            return;
        }

        visitedMap[createKey(node.cell)] = true;

        if (node.cell[0] === destination[0] && node.cell[1] === destination[1]) {
            pathExists = true;
        }

        if (canMoveLeft(node.cell)) {
            //if it can move left, left's calculate the new position after doing so
            console.log('can move left');
            let nL = getNewLeft(node.cell);
            if (!visitedMap.hasOwnProperty(createKey(nL))) {
                move(new Node(nL, null, null, null, null));
            }
        }
        if (canMoveRight(node.cell)) {
            console.log('can move right');
            let nR = getNewRight(node.cell);
            if (!visitedMap.hasOwnProperty(createKey(nR))) {
                move(new Node(nR, null, null, null, null));
            }
        }
        if (canMoveUp(node.cell)) {
            console.log('can move up');
            let nU = getNewUp(node.cell);
            if (!visitedMap.hasOwnProperty(createKey(nU))) {
                move(new Node(nU, null, null, null, null));
            }
        }
        if (canMoveDown(node.cell)) {
            console.log('can move down');
            let nD = getNewDown(node.cell);
            if (!visitedMap.hasOwnProperty(createKey(nD))) {
                move(new Node(nD, null, null, null, null));
            }
        }
    };

    let i = new Node(start, null, null, null, null);

    move(i);


    return pathExists;
};


/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
    //More optimized second solution by doing the following:
    //  - It can just use the current cell instead of creating a tree
    //  - The check for the ability to move is not required, we can just simple call getNewX
    //This still contains the visited map idea from the first solution to act as an end state
let hasPath = (maze, start, destination) => {

        let mazeWidth = maze[0].length;
        let mazeHeight = maze.length;

        let canMoveLeft = function(cell) {
            return !((cell[1] === 0) || maze[cell[0]][cell[1] - 1] === 1);
        };
        let canMoveRight = function(cell) {
            return !((cell[1] === mazeWidth - 1) || maze[cell[0]][cell[1] + 1] === 1);
        };
        let canMoveUp = function(cell) {
            return !((cell[0] === 0) || maze[cell[0] - 1][cell[1]] === 1);
        };
        let canMoveDown = function(cell) {
            return !((cell[0] === mazeHeight - 1) || maze[cell[0] + 1][cell[1]] === 1);
        };

        let getNewLeft = (cell) => {
            let k = cell[1];

            while (canMoveLeft([cell[0], k])) {
                k--;
            }
            return [cell[0], k];
        };

        let getNewRight = (cell) => {
            let k = cell[1];

            while (canMoveRight([cell[0], k])) {
                k++;
            }
            return [cell[0], k];
        };

        let getNewUp = (cell) => {
            let k = cell[0];

            while (canMoveUp([k, cell[1]])) {
                k--;
            }
            return [k, cell[1]];
        };

        let getNewDown = (cell) => {
            let k = cell[0];

            while (canMoveDown([k, cell[1]])) {
                k++;
            }
            return [k, cell[1]];
        };

        let createKey = (cell) => {
            return cell[0].toString() + cell[1].toString();
        };


        let pathExists = false;
        let visitedMap = {};

        //recursive movement function which builds the tree
        let move = function(cell) {

            if (pathExists) {
                return;
            }

            visitedMap[createKey(cell)] = true;

            if (cell[0] === destination[0] && cell[1] === destination[1]) {
                pathExists = true;
            }

            let nC = getNewLeft(cell);
            if (!visitedMap.hasOwnProperty(createKey(nC))) {
                move(nC);
            }

            nC = getNewRight(cell);
            if (!visitedMap.hasOwnProperty(createKey(nC))) {
                move(nC);
            }

            nC = getNewUp(cell);
            if (!visitedMap.hasOwnProperty(createKey(nC))) {
                move(nC);
            }

            nC = getNewDown(cell);
            if (!visitedMap.hasOwnProperty(createKey(nC))) {
                move(nC);
            }
        };
        move(start);
        return pathExists;
    };


function runTest() {
    console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0, 4], [4,4])); //expect true
    console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0, 4], [3,2])); //expect false
}

runTest();

