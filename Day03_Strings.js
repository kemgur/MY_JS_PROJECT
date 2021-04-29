/*
Strings:
' ' ==>Single Quote
" " ==>Double Quote
` ` ==> BackTick

*/
var str1 = 'Ahmet';
console.log(str1);//"Ahmet"

var str2 = 'My name is "Ahmet"';
console.log(str2);//"My name is \"Ahmet\""

//var str2 = "My name is "Ahmet"";
//console.log(str2);//"error"

var str3 = "My name is \"Ahmet\"";
console.log(str3);//"My name is \"Ahmet\""

var str4 = 'My name is \'Ahmet\'';
console.log(str4);//"My name is 'Ahmet'"

console.log('----Backtick----');//"----Backtick----"

var fName ='Jofn';
var lName = 'Cash';
var age =30;

console.log('First Name : '+fName+' '+'Last Name : '+lName+ ' '+'Age : '+ age);
console.log(`First Name : ${fName} Last Name : ${lName} Age : ${age}`);