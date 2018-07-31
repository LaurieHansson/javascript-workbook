
'use strict';


// go through and create a new code to test all the test statements. 
// test using if statements/else if statements
// variables should be the same as original RPS code
// last line should be an invalid input so that the game returns an invalid input statement. 
// Creating the last line would require an else statement 


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const rockPaperScissors=(a, b)=> {
  // make variables that allow the function to pass the test ie. lowercase and whitespace.
  const hand1 = a.toLowerCase();
  const hand2 = b.toLowerCase();

  //check for a tie
  if (hand1 === hand2) {
      return "It's a tie!";
      // Write code here
      // Check for hand one win
  } else if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper') {
      return "Hand one wins!"
      //Check for player two win
  } else if (hand1 === 'rock' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'rock') {
      return "Hand two wins!"
  }else {
  return "You broke the game!"
}
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");      
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}

if (typeof describe === 'function') {

  describe('#isTheInputValid', () => {
    it('should only allow input of rock, paper, scissors', () => {
      assert.equal(rockPaperScissors('scissor', 'paper'), "Invalid Input: Acceptable responses: rock, paper, scissors");
    });
  });
} else {

  getPrompt();

}