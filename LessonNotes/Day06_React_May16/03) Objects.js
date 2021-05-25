/*
Reference Types: 
1. Functions
2. Objects
3. Array
*/
console.clear();
var fName='John';
var lName='Cash';
var age=30;
console.log(`${fName} ${lName} ${age}`);

//use person object to store the information
//Declaring person object and assigning key value pairs
var person={
  fName:'John',
  lName:'Cash',
  age: 30
};
//Printng the person object
console.log(person);
/*[object Object] {
  age: 30,
  fName: "John",
  lName: "Cash"
}*/
console.log(typeof(person));//"object"

//Getting properties of person object
console.log(person.fName);//"John"
console.log(person['fName']);//"John"
console.log(typeof(person.fName));//"string"
console.log(person.lName);//"Cash"
console.log(person.age);//30
console.log(typeof(person.age));//"number"

/*EDITTING THE OBJECT:
There are 2 ways to change the properties of the objects
1. dot not notation  .
2. braket notation   []
*/
//Changing the fName of person using . notation
person.fName='Juan';
console.log(person.fName);//Juan
console.log(person);
/*
[object Object] {
  age: 30,
  fName: "Juan",
  lName: "Cash"
}
*/

//Changing the lName of person using [] notation
person['lName']='Walker';
console.log(person.lName);//"Walker"
console.log(person);

// person['fName']='Nancy';
var selection='fName';
person[selection]='Nancy';
console.log(person);
/*
[object Object] {
  age: 30,
  fName: "Nancy",
  lName: "Walker"
}
*/
//. notation is more common and usefull

