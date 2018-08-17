'use strict'
const carsInReverse=['kia','ford','nissan','jeep'];
for(let x= 0; x<carsInReverse.length; x++ ){
console.log(carsInReverse[x]);
}
const persons ={
firstName:'jane',
lastName:'doe',
birthDate:'jan 5, 1925',
gender:'female'
}

for(let key in persons){
    console.log(key,persons[key]);
    console.log()
}

for (let x= 1; x <1001; x ++){
  console.log(x);
}
let range = 0;
do {
  range += 1;
  console.log(range);
} while (range < 1000);

  
  // a for loop is better than a while loop when you're looking to run something for x amount of times. 
  // a while loop would be better if you were trying to return something after a program is run x amount of times.

  // a for...in loop is used to run through properties of objects, for loops are for running programs x amount of times. 
  //while loops check the expression first and then run the given code while do while loops run the code and then check the
  // expression.