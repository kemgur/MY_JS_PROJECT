
function text(){
    console.log("Hi How are you");  
} 
text();

//=======================

function textSum(){
    console.log(3+5);
}
textSum();

//========================

function print(name,surname,age){
    console.log(name+" "+surname+" "+age);
}
print("Murat","Yilmaz",20);
print("ali can","yildiz",35);

//======================

function printName(name,surname,age){
    console.log(`Name: ${name} Surname: ${surname} Age: ${age}`);
}
printName("Asim","Nesli", 25);
//"Name: Asim Surname: Nesli Age: 25"

//========================

function sum(num1, num2){
    console.log()
}

//==========
function reverseAll(str){
    console.log(str.split("").reverse());
}
reverseAll("serhat");//["t", "a", "h", "r", "e", "s"]

//==========

function reverseAll(str){
    console.log(str.split("").reverse().join(":))"));
}
reverseAll("serhat");//"t_a_h_r_e_s"

//==========

var s=prompt("Please enter your name");//bayram
function reverseAll(str){
    console.log(str.split("").reverse().join("_"));
}
reverseAll(s);//"m_a_r_y_a_b"

//==========

function reverseNumber(n){
    n=n+"";
    console.log(n.split("").reverse().join("_"));
}
reverseNumber(12345);

//==========
//Artimatik operation kullandigimizda return kullanmaliyiz
 function total(num1,num2,num3){
     console.log(num1+num2);//30
     return num1+num2+num3;
 }
 console.log(total(10,20));//NaN

 //==========

 function total(num1,num2,num3){
    console.log(num1+num2);//30
    return num1+num2+num3;
}
console.log(total(10,20,30));//60

//==========

function total(num1,num2,num3){
    console.log(num1+num3);//NaN
    return num1+num2+num3;
}
console.log(total(10,20));//NaN

//==========

function total(num1,num2,num3){
    console.log(num1+num3);//40
    return num1+num2+num3;
}
console.log(total(10,20,30));//60

//==============

function total(num1=5,num2=10, num3=20){
console.log(num1+num2);//15
    return num1+num2+num3;
}
console.log(total());//35

//==============

function totalNumber(num1=5,num2=10, num3=20){
    console.log(num1+num2);//300
    return num1+num2+num3;
}
console.log(totalNumber(100,200,300));//600

//==============

function total(num1=5,num2=10, num3=20){
    console.log(num1+num2);//50
    return num1+num2+num3;
}
console.log(total(30,20));//70
//num3 u yukaridaki atamadan alir.

//==============

var sumNum = function(num){
    console.log(num);
}
sumNum(100);//10

//==============

var sumNum = function(num1,num2){
    console.log(num1*num2);
}
sumNum(10,20);//200

//===============

//leap years year(2000) divisible 4 
//divisible 100  100/100  400


