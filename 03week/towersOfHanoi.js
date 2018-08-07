'use strict';
//GAME OVERVIEW:
// Move the stack from the first tower to the last tower 
// without having any higher value stack ontop of eachother 
// (Stack Value must be in descending value of 4,3,2,1).


// RULES OF THE GAME 
// 1.) Larger value disc can not go ontop of a smaller 
// value disc ex: 4 can not be ontop of 2
// 2.) The discs must move from stack a to stack b or c 
// with only one movement per play 


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

const movePiece=(startStack,endStack)=> {
 
  // Pop removes an item from the startStack and 
  // the push on the endstack will take in the popped value 
  // and apply it to endStack. 
  console.log(stacks[startStack].slice(-1)[0],'hey');
  return stacks[endStack].push(stacks[startStack].pop());
  
}


const isLegal=(startStack,endStack)=> {
// the move will be legal if the endstack is an empty array with no values 
// applied to it 
// if start stack C has 3 on it, and endStack B is 2,  
  return stacks[endStack].push() === 0 || stacks[endStack].slice(-1)[0] > stacks[startStack].slice(-1)[0];
}

const checkForWin=()=> {
 // if the length  is equal to 4 that is a valid win
  return stacks.c.length === 4 || stacks.b.length === 4;
}



const towersOfHanoi=(startStack, endStack)=>{
  // if legal, then call the move piece function 
  // if it's NOT legal, than say "invalid play"
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
