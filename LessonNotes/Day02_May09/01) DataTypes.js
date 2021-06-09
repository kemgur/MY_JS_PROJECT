console.clear();
// PRIMATIVE DATA TYPES:
/*
String, Number, Boolean, Null, Undefined
*/

//String literal
var name='javascript';
console.log(typeof(name));//"string"

var name ="java";
console.log(typeof(name));//"string"

/*
Number literal
Injavascript we don;t have int, byte, double,...
We only have number
*/
var num=30.9;
console.log(num);//30.9
console.log(typeof(num));//"number"

var num1=30/0; 
console.log(num1); //Infinity
console.log(typeof(num1));//"number"

var num2=30+'a';
console.log(num2)
console.log(typeof(num2))

//Boolean: True or False
var isExist=false;
console.log(isExist);//false
console.log(typeof(isExist));//boolean


//Undefined
var num3;
console.log(typeof(num3));
var num4=undefined;
console.log(typeof(num4));

//Null
var selectedCar=null;
console.log(selectedCar);
console.log(typeof(selectedCar))

/**
 What is the difference between null and undefined?
 1) Null is avalue(object)
 2) Null assigned but has no actual value like string
 2) Null atanmış ancak dize gibi gerçek bir değeri yok
 3) Undefined : A variable is declared but it is not assigned or intialized.
 3) Undefined: Bir değişken bildirildi ancak atanmadı veya başlatılmadı.
 */

 /**
  var
  let
  const 
  */