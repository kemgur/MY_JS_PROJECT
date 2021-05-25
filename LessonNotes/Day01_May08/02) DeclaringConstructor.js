//DECLARING CONSTRUCTOR
function Person(name, age, hasPermit,languages){
  this.name=name;
  this.age=age;
  this.hasPermit=hasPermit;
  this.languages=languages;
}
const person2=new Person('Jim',23,false,["English","German"]);
console.log(person2)
/*
[object Object] {
  age: 23,
  hasPermit: false,
  languages: ["English", "German"],
  name: "Jim"
}
*/
console.log(person2.name);//"Jim"
console.log(person2.age);//23
console.log(person2.hasPermit);//false
console.log(person2.languages);//["English", "German"]
console.log(person2.languages[0]);//"English"
console.log(person2.languages[1]);//"German"
