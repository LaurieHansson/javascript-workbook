'use strict'


//1. display the time and the dat
const today =  new Date();
console.log(today);

const day = today.getDay();
console.log(day);

const dayOfTheWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("It is : " + dayOfWeek[day]);


const hour = today.getHours();
console.log('hour ' + hour);

const minute = today.getMinutes();
console.log('minutes ' + minute);

const  second = today.getSeconds();
console.log('seconds ' + second);


 // 2. returning the type of data type function
  const ReturnTypeOf(input)=>{
    return typeof(input);
 }
 console.log(typeof 42);
// NUMBER DATA TYPE

console.log(typeof 'Javascript is difficult');
// STRING DATA TYPE

console.log(typeof false);
// BOOLEAN DATA TYPE


 // 3. turning a number to into a string 
  const number = 10000;
  const numberToString= number.ToString;
  console.log(number);
 
 // 4. return the sum of two numbers
  const addition=(number1, number2) => {
   return number1 + number2;
  }
  addition(5,5);
 // 5.  return a string to number 
   const stringToNumber=(string){
     return Number(string);
   }
   stringToNumber('900');
 
 
 // 6. two truths
 
  const doubleTrue=()=>{
   if(true && true){
    return true;
   }
 }
 // 7. single truth statement 
   const = SingleTruth(amountOfPuppies)=> {
   if (amountOfPuppies < 100) {
    return "FIND MORE PUPPIES";
  } else if (amountOfPuppies< 3000) {
      return "WE HAVE TOO MANY PUPPIES"; }
      else {
    return "K this is a good amount of puppies";
  }
   }

   // 8. runs false 

   const cats = 1;
   const doggos = 1;
   const noCatsOrDogs=()=>{
   if(pizza && beer !== true){
       console.log('False');

    }
     else {

console.log("False");    }
};
 noCatsOrDogs();