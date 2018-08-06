'use strict';

// objective: Move four discs to either second to last or last  with the largest on bottom and 
// the smallest ontop in the least amount of moves..

// each stack defined under stacks variale 
// each disc defined as a numerical unit 1,2,3 and 4. 

//FUNCTIONALITY
// will need to add pieces from one stack to another
// will need to remove pieces from one stack or another
// will need to find push pieces to a new array 
// will need to find the length of what is on a current stack

// POSSIBLE METHODS
//.push() - add one or more element to the end of the array and return the length
//.pop() -  removes last item of the array and returns that element
//.length()- returns number of elements in the array 
//.splice()- changes content of array by removing or adding elements. 


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1], //startstack
  b: [], //endstack
  c: [] //endstack
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  return stacks[startStack].pop(stacks[endStack].push());
}

function isLegal(startstack,endStack) {
  endStack > startStack  || stacks[endStack].length == 0
}

function checkForWin() {
 
  return stacks.c.length === 4 || stacks.b.length === 4;
}



function towersOfHanoi(startStack, endStack) {
  //This function only runs movePiece if isLegal function is true. Will use checkFrWin to clear game.
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
  } else {
    console.log("invalid play");
  }
  if (checkForWin()) {
    console.log("You win!");
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
}



function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
