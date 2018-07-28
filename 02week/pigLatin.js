
// VARIABLES //
// 1.) Variable that defines an array
// 2.) Variable that defines a word

// Methods //
// Will need to break up strings into letters 
// .split();
// Will need to check to see if string letters are included in
// array  .includes.
// Will need to define character counts with indexing string characters
// str.charAt())) 
// Will need to push to results array 
// .push
// Will need to remove first item of array and returns it
// .shift
//  Will need if statement to check to see if word has certain vowels
// will need to add ay to the end of the word with .join

// Will need for loops to go through letters
// Will need for loop to go through vowels
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vowels = ['a', 'e', 'i', 'o', 'u'];


function pigLatin(word) {
 
  const word = str.split('');
 //seperates the words into indvidual letters
  if (vowels.includes(str.charAt[0])) {
    return str += 'way';
    //str[0] takes the first letter of an array 
    // includes check to see if the first letter of 
    //the word im working in will be included in the vowels
    //in the vowels array. 
  } else {
    
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        word.push(result.shift());
        // shift 
      } else {
        word.push('ay');
        return word.join('');
      }
    }
  }
}

console.log(translatePigLatin("javascript"));

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
