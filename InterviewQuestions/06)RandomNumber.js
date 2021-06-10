/*
Math.random(); Generates a num between 0 and 1
0-0.9999999..==>>16 digit number   
*/
//Code to get random DIGITS
var num=Math.random();
console.log(num);
//Get a number between 0-9
num*=10;
num=Math.floor(num);
console.log(num);

//code to get random number between 0 and 5
var num1=Math.random()
console.log(num1);
num1*=6;//Get num from 1-6
console.log(num1);
num1=Math.floor(num1);
console.log(num1);//

num1=Math.floor(num1)+1;//add 1 to scale up(cogaltmak), scale(olcek)
console.log(num1);//