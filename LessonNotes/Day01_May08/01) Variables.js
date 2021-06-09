// VARIABLES:
console.clear();
// Declaring name variable with no initial value.
//İlk değeri olmayan ad değişkeni bildiriyor
var name;
console.log(name);//undefined

//Declaring name variable with initial value
var name = 'Ahmet';
console.log(name);//Ahmet

var name="Javascript";
console.log(name);//Javascript

name="Learning var keyword";
console.log(name);

// Declaring multiple variables
//Birden çok değişken bildirme
// var fName;
// var lName;

// var fName, lName;

var fName='John', lName='Cash';
console.log(fName);//John
console.log(lName);//Cash

// Most common(yaygin) way to declare and initialize variables
//Değişkenleri bildirmenin ve başlatmanın en yaygın yolu
var firstName='Sam';
var lastName='Walter';
console.log(firstName);//Sam
console.log(lastName);//Walter
console.log(firstName+' '+lastName);//Sam Walter

//PRIMATIVE DATA TYPE
//String , Number,Boolean Null , undefined

//String literal
var name ='Javascript';
console.log(typeof(name));//string

//Number literal
//In javascript we don't have int, byte, double
//we only have number
var num = 30;
console.log(typeof(num));//number

var num1 = 30/0;
console.log(num1);//infinitive
console.log(typeof(num1));//"error"

var num2 = 30+'a';
console.log(num2);//"30a"
console.log(typeof(num2));//"string"


//Boolean : True and False
var isExist = true;
console.log(isExist);//true
console.log(typeof(isExist));//Boolean