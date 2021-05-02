//1) What will be the results of console.log below?
var fruit = 'apple'
{
  var fruit = 'orange'
  console.log(fruit) // ??
}
console.log(fruit) // ??
//Answer
var fruit = 'apple'
{
  var fruit = 'orange'
  console.log(fruit) // orange
}
console.log(fruit) // orange
//Why? ==>var; does not respect block scopes {}.


//2) What is the output of the console.logs below?
var fruit = 'apple'
function gimmeFruit() {
  var fruit = 'orange'
  console.log(fruit) // ??
}
console.log(fruit) // ??
gimmeFruit()
//Answer
var fruit = 'apple'
function gimmeFruit() {
  var fruit = 'orange'
  console.log(fruit) // orange
}
console.log(fruit) // apple
gimmeFruit()
//WHY?
/*var respects function scopes.
 So the var inside the function is 
 limited to the scope of the function,
 while the var outside the function is
 in the global namespace.
 *(var işlev kapsamlarına saygı duyar. 
 Dolayısıyla, işlevin içindeki var işlevin kapsamı 
 ile sınırlıdır, işlevin dışındaki var ise
genel ad alanında yer alır.)*/


//3) What is the output of the console.logs below?
let fruit = 'apple';
{
  let fruit = 'orange';
  console.log(fruit); // ??
}
console.log(fruit); // ??
//Answer
let fruit = 'apple';
{
  let fruit = 'orange';
  console.log(fruit); // orange
}
console.log(fruit); // apple
//WHY?
/*let respects block scopes.
 This means the two fruit variables are
 two different variables.
 (let, blok kapsamlarına saygı duyar.
 Bu, iki meyve değişkeninin
 iki farklı değişken.)*/


 //4) What would happen in the following?
 //Aşağıdakiler ne olurdu?
 let fruit = 'apple';
 let fruit = 'orange';
console.log(fruit);//"error"
/// SyntaxError: Identifier 'fruit' has already been declared
// Identifier 'fruit' has already been declared

/*
NOTE: Redeclaring let fails, as shown above.
 But how come redeclaring a var object works?
 (Let'nin yeniden beyan edilmesi yukarıda gösterildiği gibi başarısız olur. 
 Peki bir var nesnesini yeniden bildirmek nasıl olur?)

 Answer: var has a concept of hoisting.
When you declare something using var, 
it first initializes the variables with
 the value of undefined to the top of the scope.
 (var bir hoisting konseptine sahiptir.
Var kullanarak bir şey beyan ettiğinizde,
ilk önce değişkenleri şu şekilde başlatır:
 kapsamın tepesine tanımsız değeri.)*/


 //5) What is the console.log output of the following?
 b = 25
var b
console.log(b) // ??
//Answer
b = 25
var b
console.log(b) // 25
//Why?
//Due to the hoisting concept, the code above is equal to
var b = undefined // placed at the top of the scope
b = 25 // variable assignment
console.log(b) // 25


//6) What is the console.log output of the following?
console.log(bar) // ??
var bar = 111
console.log(bar) // ??
//Answer:
console.log(bar) // undefined
var bar = 111
console.log(bar) // 111


//7) What is the console.log output of the following?
var bar
console.log(bar) // ??
bar = 111
console.log(bar) // ??
//Answer:
var bar
console.log(bar) // undefined
bar = 111
console.log(bar) // 111


//8) What is the output of the console.log below?
const fruit = 'apple'
{
  const fruit = 'orange'
  console.log(fruit) // ??
}
console.log(fruit) // ??
//Answer:
const fruit = 'apple'
{
  const fruit = 'orange'
  console.log(fruit) // orange
}
console.log(fruit) // apple
//Why? const respects block scoping.


// 9)What happens in the code below?
{
    const fruit = 'apple';
    fruit = 'orange';
    console.log(fruit);
  }
//Answer:
{
    const fruit = 'apple';
    fruit = 'orange' ;// TypeError: Assignment to constant variable.
    console.log(fruit);//"error"
  }  
  //Why? const variable values cannot be changed.


  //10) If const values cannot be changed, why does the following work?
  const fruit = {};
  fruit.color = 'red';
  console.log(fruit);//color: "red"
  //Answer: 
/*
[object Object] {
  color: "red"
}
*/
//Why? 
/*
The “restriction” of const values do not do a deep equal,
which means you could change the property values of fruit,
but not the value of fruit itself.
(
"Const" değerlerin "kısıtlanması" derin bir eşitlik sağlamaz,
bu, meyvenin özellik değerlerini değiştirebileceğiniz anlamına gelir.
ama meyvenin kendisinin değeri değil.)*/
















