'use strict'


//1. display the time and the date
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1; //January is 0!
const yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
return today

// 2. number to a string 
 function numToString(num) {
   return num.toString();
 }  numToString(10);
 

 // 3.  return a string to number 
const stringToNumber=(string){
  return Number(string);
}
stringToNumber('900');


 
 // 5. return the sum of two numbers
  const addition=(number1, number2) => {
   return number1 + number2;
  }

  addition(5,5);
 
 // 6. two truths
 
 if (input1 && input2) {
  return true
}

// 7. one truth 
const testingTruth=() => {


if ( y> 10) {
  return "YES"
} else {
  return "NO"
}}

const untrue(input1,input2) => {
  if(!input1 && !input2){
  return "untrue"
  }}