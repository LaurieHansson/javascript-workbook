//local scope -- variables within a function
// variable that stores the word in an array should be local
// const wordArray = []
// const vowels = []
// variable that stores the vowels in an array should be local
// the new word variable should be local
// Global scope -- this would be a variable defined outside of a 
// function but can be called within the function
// there needs to be some sort of new word that is built for this game 
// and that would have to be called at multiple occasions-- I'll define it as 
// let pigWord
// First function is already defined, and this is where we write the code,
/// I will use the predefined function to console.log my algorhithim at the end
// Other two functions would be needed to check letters & vowels
// 
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
 // Word is first stored as an array [Local]
    const Wordarray = word.split('');
    // Vowels to test the word against [Local]
    const vowels = ['a','e','i','o','u'];
    // Create newWord var to hold reordered letters
    let pigWord = ''; // [local]
     // Loop through LETTERS in word
        for(var y = 0; y < word.length-1; y++) {
     // Loop through VOWELS in a word
        for(var i = 0; i < vowels.length-1; i++) {
    // check to see if any letters in new word match with the vowels
            if(word[y] === vowels[i]) {
                for(var x = y; x < word.length; x++){
                    pigWord = pigWord + word[x];
                }
                for(var n = 0; n < y; n++){ 
                    pigword = pigWord + word[n];
                }
                return pigWord + "ay";
            }       
        }
    }
}
pigLatin("yay");



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
