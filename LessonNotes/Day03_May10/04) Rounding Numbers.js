/*
Rounding Numbers In Javascript
Math.ceil(number)           —>Rounds Up
Math.floor(number)          —>Rounds Down
Math.round(number)          —>Rounds to closest whole number
number.toFixed(numofdigit)  —> Rounds to the number of digit
*/
console.clear();
var num = 15.4567
var ceiledNumber = Math.ceil(num);
console.log(ceiledNumber);//16

var flooredNumber = Math.floor(num);
console.log(flooredNumber);//15


var roundedNumber=Math.round(num);
console.log(roundedNumber);//15 because 15.4 is LESS THAN 15.5

var fixedNumber = num.toFixed(2);
console.log(fixedNumber);//15.46