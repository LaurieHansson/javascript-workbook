'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





class Checker {
  constructor(color){
    if(color === 'red'){
      this.symbol = 'R'
    } else {
        this.symbol = 'B'
        }
      }
    }
  


class Board {
  constructor() {
    this.grid = [];
    this.checkers=[]

  // method that creates an 8x8 array, filled with null values
  this.createGrid=function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  this.viewGrid= function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
// turn each color piece into an array with coordinates
this. CreateCheckerPieces = ()=>{
  const blackPos = [
    [7,0],
    [7,2],
    [7,4],
    [7,6],
    [6,1],
    [6,3],
    [6,5],
    [6,7],
    [5,0],
    [5,2],
    [5,4],
    [5,6],
  ]

  for(let i = 0; i < 12; i++){
// populated rows and columns for black spaces
    let blackRow = blackPos[i][0];
    let blackColumn = blackPos[i][1];

    const blackPiece = new Checker('B');
        // the grid is now holding the black rows,columns and checkers
    // and the red piece has now been created
    this.checkers.push(blackChecker);
    this.grid[blackRow][blackColumn] = blackPiece;
    }
  }
  const redPiecePos = [
    [0,1],
    [0,3],
    [0,5],
    [0,7],
    [1,0],
    [1,2],
    [1,4],
    [1,6],
    [2,1],
    [2,3],
    [2,5],
    [2,7]
  ]

  for(let i = 0; i < 12; i++){
    let redRow = redPiecePos[i][0];
    let redColumn = redPiecePos[i][1]
    const RedPiece = new Checker('RED');
    this.checkers.push(redPiece);
    // the grid is now holding the red rows,columns and checkers
    // and the red piece has now been created
    this.grid[redRow][redColumn] = RedPiece;
  }



class Game {
  // create a class of the game
  // NEEDS 
  // board for pieces to play on 
  // starting Positions at start of game 
  // grid to initilize on the start of the game
  // checkers to be created on start of the game
constructor() {
  this.board = new Board;
  this.start = ()=>{
    this.board.createGrid();
    this.board.createCheckers();
  }
  this.moveChecker = (startingSpace, endDest) => {
    if(isLegalInput(startingSpace, endDest) && isLegalMove(startingSpace, endDest)){
      // move piece function takes starting space and space and checks if the desired 
      // move abides with grid and game rules
  const startRow = parseInt(start.charAt(0));
  const startColumn = parseInt(start.charAt(1));
  // starting places of where piece will move from
  const endRow = parseInt(end.charAt(0));
  const endCol = parseInt(end.charAt(1));
  // puts piece on end end of where pieces are going 
  this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn];
  this.board.grid[startRow][startColumn] = null; 
  // pieces moved from start row and col will be empty after 
  // they've moved to their end pieces
  //subsract the end row from the start row    
  if(endRow - startRow === 2){
    const jumpedRow = endRow - startRow > 0 ? startRow + 1 :
   endRow + 1;  
    const jumpedCol = endCol - startColumn > 0 ? startColumn + 1 :
    endColumn + 1;
    this.board.grid[jumpedCol][jumpedRow] = null; 
    this.board.checkers.pop();
  }

} else {

}
  }
}
start() {
  this.board.createGrid();
}
}
//  check for legal inputs
const isLegalInput = (start, end) => {

const startRow = parseInt(start.charAt(0));
const startCol = parseInt(start.charAt(1));
const endRow = parseInt(end.charAt(0));
const endCol = parseInt(end.charAt(1));
const ValidStart = (startRow >= 0 && startRow <= 7) && (startCol >= 0 && startCol <= 7);
const ValidEnd = (endRow >= 0 && endnRow <= 7) && (endCol >= 0 && endCol <= 7);
return (ValidEnd && ValidStart);
}
const isLegalMove = (start, end) => {
  // takes the starting row and shows what character is at the index
const startRow = parseInt(start.charAt(0));
// ParseInt the start, find index of what's at 0
const startColumn = parseInt(start.charAt(1));
const endRow = parseInt(end.charAt(0));
const endCol = parseInt(end.charAt(1));
const rowLegal = (endRow - startRow === 2);
const columnLegal = (endCol - startColumn === 2);
return (rowLegal && columnLegal);


}
// Check For win should return -1 to show piece not returned in array 
function getPrompt() {
game.board.viewGrid();
rl.question('which piece?: ', (whichPiece) => {
  rl.question('to where?: ', (toWhere) => {
    game.moveChecker(whichPiece, toWhere);
    getPrompt();
  });
});
}

const game = new Game();
game.start();
  

// Tests
if (typeof describe === 'function') {
describe('Game', () => {
  it('should have a board', () => {
    assert.equal(game.board.constructor.name, 'Board');
  });
  it('board should have 24 checkers', () => {
    assert.equal(game.board.checkers.length, 24);
  });
});

describe('Game.moveChecker()', () => {
  it('should move a checker', () => {
    assert(!game.board.grid[4][1]);
    game.moveChecker('50', '41');
    assert(game.board.grid[4][1]);
    game.moveChecker('21', '30');
    assert(game.board.grid[3][0]);
    game.moveChecker('52', '43');
    assert(game.board.grid[4][3]);
  });
  it('should be able to jump over and kill another checker', () => {
    game.moveChecker('30', '52');
    assert(game.board.grid[5][2]);
    assert(!game.board.grid[4][1]);
    assert.equal(game.board.checkers.length, 23);
  });
});
} else {
getPrompt();
}