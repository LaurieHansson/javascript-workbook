///WHITEBOARD SOLUTION//

// ROCK PAPER SCISSORS CONCEPT:
// RPS is a two person game that requires either player to 
// pick between rock paper or scissors during a 3 second countdown.
// Depending on their play, there will be one winner, or a matched game.  


// 1.) SETTING UP VARIABLES OR PLAYERS
// There are only two players in RPS, so there are only two variables.
// Since each player picks a hand, you can define them as "hand one" or "hand two".


//  2.) SETTING UP POSSIBLE OUTCOMES FOR CONDITIONALS 
// These are the winning, losing & tying possibilties of RPS.
// WINNING HAND (ROCK)  Rock to Scissors
// WINNING HAND (PAPER) Paper to Rock
// WINNING HAND (SCISSORS) Scissors to Paper
// LOSING HAND (ROCK) Rock to paper
// LOSING HAND (PAPER) Scissors to paper
// LOSING HAND (SCISSORS) Scissors to Rock
// MATCHED HANDS WILL BE ARGUMENT/INPUT == ARGUMENT/INPUT

// OPERATORS TO KEEP IN MIND 
// && would be to compare two hands
// === or == would be an equivalent hand
// to compare multiple outcomes rather than writing a long series of 
// if or if else statements, use the || operator.



'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(PlayerHandOnehand1, hand2) {

  // Write code here  
  //These two variables declare the two players.
  const Hand1 = 0;
  const Hand2 = 0;
  
  if (Hand1 == 'rock' && Hand2 == 'paper' || Hand1 === 'paper' && Hand2 == 'scissors' || Hand1 == 'scissors' && Hand2 == 'rock') {
    return "hand one wins!"
  }else if (Hand1 == 'scissors' && Hand2 == 'rock' || Hand1 == 'rock' && Hand2 == 'paper' || Hand1 == 'scissors' && Hand2 == 'paper') {
  return "hand two wins!"}
  else if  (Hand1 === Hand2) 
      return "it's a tie";
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}


}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
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
