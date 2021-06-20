
/*Nested Templates: Templates can be nested 
if it contains multiple expression evaluation or
 multiple condition checking. Instead of using else if ladder
  this is readable and gives ease to the developer. 
  The code below finds the maximum of three numbers
   using conditional operator and nested template literal.*/
function maximum(x, y, z) {
var c = `value ${ (y>x && y>z) ? 'y is greater' :
`${x>z ? 'x is greater' : 'z is greater'}` }`;
return (c);
}
document.write(maximum(5, 11, 15)+"<br>");
document.write(maximum(15, 11, 3)+"<br>");
document.write(maximum(11, 33, 2)+"<br>");
 

//Mod Alma
const num = 123;

const first= num%10;
const second = (num/10)%10;
const third = num/100;

//========Ternary===========
const name= prompt('Adinizi giriniz');
const age = Number(prompt('Yasinizi giriniz'));

//1.Way
age>18
? console.log(`${name} ehliyet alabilir`)
: console.log(`${name} ehliyet alamaz`);

//2.Way
const result = age>18 ?(`${name} ehliyet alabilir`):(`${name} ehliyet alamaz`);
console.log(result);