
var person={
    fName:'John',
    lName:'Cash',
    age: 30
  };
  console.log(person);
  console.log(person.fName);

  //Editting existing property
  person.fName='Nancy';
  //person['fName']='Nancy';
  console.log(person);
  console.log(person.fName);

  
console.log(person.country);//undefined
//Adding a new property using . notation
person.country='USA';
console.log(person);
console.log(person.country);//"USA"
//property name : ageLimit
//Property value: 16
//person.ageLimit=16;
//OR I can use [] notation to add new property
person['ageLimit']=16;
console.log(person);
console.log(person.ageLimit);//16
console.clear();
/* 
Object Name: personInformation
firstN = Jim --->>>String
lastN= Carrey --->>>String
age = 50 --->>>Number
address = {street = 5th Ave, city = New York City, State= New York}  --->>> OBJECT
hobbies = music, sports, hunting   --->>>ARRAY
salary = function(){return '150K yearly'}  --->>> FUCNTION
*/
const personInformation={
  firstN:'Jim',
  lastN:'Carrey',
  age:50,
  address:{
    street:'5th Ave',
    city:'New York City',
    state: 'New York'
  },
  hobbies:['music','sports','150K yearly'],
  salary:function(){
  return '150K yearly';
}  
}
console.log(personInformation);
console.log(personInformation.firstN);//"Jim"
console.log(personInformation.age);
//Getting the information from a nested object 
console.log(personInformation.address);
console.log(personInformation.address.street);//"5th Ave"
const myState=personInformation.address.state;
console.log(myState);//"New York"
console.log(personInformation.salary);
//function(){
// return '150K yearly';
// }
