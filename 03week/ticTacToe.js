'use strict';


/// Boards run horizontall & vertically 
/// horizontally = row 
// vertically = column

// for horziontal wins, user needs to have 3 markers in one row
// for vertical wins, user needs to have 3 markers in a coumn
// for diagnol wins users will need to have 3 markers that utilize both 
// columns and rows 

// no two users can be in the same space 
//  no blank spaces 
// if there is a blank space, allow marker to be dropped.

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
// let playerOne = 'X';
let playerTwo = 'O';
function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {


}

function verticalWin() {
  /// 0, 0 marks an open board /// (1, 0)(1,0) marks one marked spot, (2,0)(0,2) marks 2.. etc  
  return ((board[0][0] === playerOne && board[1][0] === playerOne && board[2][0] === playerOne) || (board[0][1]
    === playerOne && board[1][1] === playerOne && board[2][1] === playerOne) || (board[0][2] === playerOne
    && board[1][2] === playerOne && board[2][2] === playerOne) || (board[0][0] === playerTwo && board[1][0]
    === playerTwo && board[2][0] === playerTwo) || (board[0][1] === playerTwo && board[1][1] === playerTwo &&
    board[2][1] === playerTwo) || (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo))

}
  /// 0, 0 marks an open board /// (1, 0)(1,0) marks one marked spot, (2,0)(0,2) marks 2.. diagnol wins will have 2 marked rows and 1 col or 2 cols 1 row  
  function diagonalWin() {
  return ((board[0][0] === playerOne && board[1][1] === playerOne && board[2][2] === playerOne) || (board[2][0]
    === playerOne && board[1][1] === playerOne && board[0][2] === playerOne) || (board[0][0] === playerTwo && board[1][1]
    === playerTwo && board[2][2] === playerTwo) || (board[2][0] === playerTwo && board[1][1] === playerTwo &&
    board[0][2] === playerTwo))

}
//  check through each win type and  create a return  
function checkForWin() {
  return (verticalWin() ) || diagonalWin() || horizontalWin()}
  
  const ticTacToe = (row, column) => {
    if (board[column][row] !== ' '){
      
    }
      if (playerTurn === 'X') {
        playerTurn = 'O';
    } else {
        playerTurn = 'X';
    }
  }


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
