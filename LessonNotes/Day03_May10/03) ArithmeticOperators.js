/**
 Operator Meaning

+ Add or Concatanation

- Subtraction

* Multiplication

% Mod or Remainder

++ Increment

-- Decrement

** Exponent
 */
var x =10;
var y = 3;
console.log(x**2);//100
console.log(y**2);//9

const pi = 3.14;
const r = 3 ;
const area = pi*r**2;
const circumference = 2*pi*r
console.log(circumference, area);
console.log("Circumference :" + circumference,

"Area:"+area);

//(++ ,--, %) OPERATORS
let a = 3;
let b = ++a;//5
let c = --a;//3
console.log(a,b,c);
a += 5;
console.log(a);//8

let z = 3;
let k = z++;//Error: const value cannot b3 changed

const num = 123;
console.log("Unit Digit: " + num%10);//3


//INCREMENT AND DECREMENT
/**
 x++;
x—;
x+=3;x=x+3
X-=3;x=x-3
x*=3;x=3*x
x/=3;x=x/3
 */
