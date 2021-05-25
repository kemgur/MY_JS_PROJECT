console.clear();
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