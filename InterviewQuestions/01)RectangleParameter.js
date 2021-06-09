//2. Get both sides of the rectangle from the user 
//and print the parameter of the rectangle on the console
//parameter:2*shortsize+longside
var shortSide=prompt('Enter short size');
console.log(typeof(shortSide));//string
var longSide=prompt('Enter long size')
console.log(typeof(longSide));//string
var parameter=2*shortSide+2*longSide;//2*2+2*3=10. + is addition CORRECT ANSWER
// 2 is number
// shortSide is number 
// 2*shortSide is a number
// for same reasons 2*longSide is also a number
// number + number = + is Addition
console.log(parameter);
console.log(2*(shortSide+longSide));//46. WRONG ANSWER. 2*(23). + concating 2 and 3 as 23. 2*23=46
