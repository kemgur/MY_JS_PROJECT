//DATA TYPES;
//String, Number, Boolean, Null, Undefined

//String literal
var name ='javascript';
console.log(typeof(name));//"string"

var name ='java';
console.log(typeof(name));//"string"

//Number literal(gercek)
//injavascript we dont have int , byte, double,...
//We only have number

var num=30.9;
console.log(num);
console.log(typeof(num));//"number"

var num1 =30/0;
console.log(num1);//Infinity
console.log(typeof(num1));

var num2 =30+'a';
console.log(num2);//"30a"
console.log(typeof(num2));//"string"

//Boolean: True or False
var isExist=true;
console.log(isExist);//true
console.log(typeof(isExist));//"boolean"

var isExist=false;
console.log(isExist);//false
console.log(typeof(isExist));//"boolean"

//undefined
var num3;
console.log(num3);//undefined

var num4=undefined;
console.log(typeof(num4));//"undefined"

//null
var selectedCar =null;
console.log(selectedCar);//null
console.log(typeof(selectedCar));//"object"



