
//URL: https://www.codewars.com/kata/tic-tac-toe-checker
//kyu: 5


function isSolved(board) {
    let top = board[0];
    let level = 0;
    for (i = 0; i < 3; i++) {
        let current = board[level][i];
        console.log(current)
        if (current) {
            if (board[level][i+1] === current && board[level][i+2]) {
                return current;
            } else if (board[1][i] === current && board[2][i] === current) {
                return current;
            }
        }
        level++;
    }
    // return top;
}




console.log(isSolved([[0,1,1],
                      [2,2,0],
                      [1,0,0]]), -1);