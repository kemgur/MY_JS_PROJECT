/**
   person2
“Jim”
23
FALSE
[“English”,”German”]
9:47
Properties
Name
Age
hasWorkPermit
Languages
   */
function person(name, age, hasPermit,languages){
   this.name=name;
   this.age=age;
   this.hasPermit=hasPermit;
   this.languages=languages;
  }
const person2=new person('Jim',23, false,['English','German']);
console.log(person2);
/**
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
console.log(person2.languages[1]);//"German"
