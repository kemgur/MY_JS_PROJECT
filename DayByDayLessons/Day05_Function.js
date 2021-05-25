/*
Functions:
A function performs a task or calculate a value
*/
//1. Declaring Functions:
console.clear();
function greet(){
  console.log('Hi How are you');
}
//2. Calling the function:
greet();//"Hi How are you"
//3. Creating a function with a parameter
function greetPeople(name){
  console.log(`Hi ${name}`);
}
greetPeople('Ahmet');//"Hi Ahmet"
//4. creating a function with multiple parameters
function personInfo(firstName,lastName,age,isOld){
  console.log(`My Name : ${firstName}. Last Name : ${lastName}. Age : ${age}. Old or Not : ${isOld}`);
}
personInfo('John','Walker',50, false);//"My Name : John. Last Name : Walker. Age : 50. Old or Not : false"
//undefined will be assigned for missing ARGUMENTS. Below only has 1st argument. 
personInfo('Sam');//"My Name : Sam. Last Name : undefined. Age : undefined. Old or Not : undefined"
personInfo('Tim',30);//"My Name : Tim. Last Name : 30. Age : undefined. Old or Not : undefined"
//       parameters  |  Arguments
//index1: firstName  =  Tim
//index2: lastName   =  30
//index3: age        =  undefined
//index4: isOld      =  undefined
