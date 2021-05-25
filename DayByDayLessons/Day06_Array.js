//Array

let person=["Mustafa", "Doctor",1800, "Married", "New York"];
console.log(typeof(person));//"object"
console.log(person);

console.log(person[1]);//"Doktor"
console.log(typeof(person[1]));//"string"

person[1]="John";
console.log(person);//["Mustafa", "John", 1800, "Married", "New York"]
//Doktor ile john u degistirdi

person[0]="Bush";
console.log(person);//["Bush", "John", 1800, "Married", "New York"]

person[4]="California";
console.log(person);//["Bush", "John", 1800, "Married", "California"]
console.log(person.length);//5
person[7]="it manager";//7.indexte bu veri yoksa ekler
console.log(person);
//["Bush", "John", 1800, "Married", "California", undefined, undefined, "it manager"]

console.log(person.length);//8
//"undefined" i element olarak kabul ediyor
console.log(person[0].length);//4 

person[5]=1800;
person[6]="New York City";

console.log(person);
//["Bush", "John", 1800, "Married", "California", 1800, "New York City", "it manager"]

//=========================

//push,pop shift unshift, concat
let fruit=["orange","pineapple","melon","civi","apple","watermelon"];
console.log(fruit);
​
//   for add new items at the end of array use pus()   fruit.push("grapes)
fruit.push("grapes");
console.log(fruit);
fruit.push("banana");
console.log(fruit);
​
// unshift  for add new items at the begining of array use unshift code fruit.unshift("patotoes)
fruit.unshift("patotoes");
console.log(fruit);
​
fruit.unshift("tomotes");
console.log(fruit);
​
//pop()  use for delete last item of arrary
​
​
fruit.pop();
console.log(fruit);
​
fruit.pop();
console.log(fruit);
​
// shift  use for delete first item of array
​
​
​
fruit.shift();
console.log(fruit);
​
fruit.shift();
console.log(fruit);
​
//concat use for add in the another array 
​
let food=["burger","meat","beef","kfc"];
let fruitFood=fruit.concat(food);
console.log(fruitFood);
​
//   Array.isArray use for array is array or not true/false
console.log(Array.isArray(fruit));
​
//indexOf use for given items index no 
console.log(fruit.indexOf("pineapple"));
console.log(fruit.indexOf("civi"));
​
​
// splice 
console.log(fruitFood);
fruitFood.splice(1,2);
console.log(fruitFood);
fruitFood.splice(0,3);
console.log(fruitFood);
​
fruitFood.splice(1,0,"eggplanets","groundnut","wallnut");
console.log(fruitFood);
​
fruitFood.splice(1,2,"pizza","steer","beef");
console.log(fruitFood);







​