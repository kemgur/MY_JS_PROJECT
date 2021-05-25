let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

//=================================

console.clear();
//DESTRUCTURING
//1. Object Destructuring
var user = {
  name : 'Sam',
  mylocation : 'Dallas',
  email:'sam@gmail.com'
}
//WAY 1
var name1=user.name;
var location1=user.mylocation;
var email1=user.email;
console.log(name1);
console.log(location1);
console.log(email1);
//WAY 2 with object destructing
//I CAN USE DESTRUCTING TO MAKE THIS CODE SHORTER
/*The benefit of object destructuring is to make the code shorter
We ca directly reach the object withour . notation
Keys Must Match to the original user keys*/
var {name,mylocation,email}=user;//DESTRUCTURED use OBJECT
console.log(name);//Reaching the objects withour . notation
console.log(mylocation);
console.log(email);
//2. I can destructe function
function getUser(){
  return {
    name2:'Sam',
    location2:'New York',
    email2:'sam@hotmail.com'
  }
}
var {name2, location2,email2} =getUser();
console.log(name2);//'Sam'
console.log(location2);//"New York"
console.log(email2);//"sam@hotmail.com"
//3. Desctruring Arrays
var user1 =['Tim','New Jersey', 'tim@gmail.com']
//without destructuring
var userName=user1[0];
var userState=user1[1];
var userEmail=user1[2];
console.log(userName);//"Tim"
console.log(userState);//"New Jersey"
console.log(userEmail);//"tim@gmail.com"
//with destructuring
var [userName60,userState60,userEmail60]=user1;
console.log(userName60);//"Tim"
console.log(userState60);//"New Jersey"
console.log(userEmail60);//"tim@gmail.com"
