/*Artimatic Operators
+/-/*,/,%,++,--,**,

% means remainder or mod

x++ post increment
x-- post decrement

++x pre increment
--x pre decrement

*/
var x=9;
var y=3;

console.log(x+y);//12
console.log(x-y);//6
console.log(x*y);//27
console.log(x/y);//3
console.log(x%y);//0 (remainder or mod)

console.log(x++);//9
console.log(x);//10

console.log(y--);//3
console.log(y);//2

console.log(++x);//11
console.log(x);//11

console.log(--y);//1
console.log(y);//1

//x=11
x+=3;//
console.log(x);//14

//y=1
y-=3;
console.log(y);//-2

x*=3 //x=3*3
console.log(x);//42

y/=3;
console.log(y);//-0,66

y/=3;
console.log(y);//-0.66
//Exponent
console.log(x**2);//SAME AS x*x  2601

/*
Math.ceil(number)                     —> Rounds Up
Math.floor(number)                   —>Rounds Down
Math.round(number)                 —>Rounds to closest whole number
number.toFixed(numofdigit)  —> Rounds to the number of digit
*/

