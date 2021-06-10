/*
Logical Operators
&& and
|| or
!  not. returns the opposite value.
*/
console.clear();
const x=true;
const y=true;
const z=false;

console.log(x&&y);//true&&true = true
console.log(x&&z);//true&&false = false

console.log(x||y);//true||true = true
console.log(x||z);//true||false= true

console.log(!x);//false
console.log(!z);//true

console.log(null);//null
console.log(!null);//true. cause we are making comparison

let s2 = true;
let s3 = true;
console.log(s2 && true); // true
console.log(s2 && s3); // true
console.log(s2 && s3 && false); // false
s3 = false;
console.log(s2 || s3 || false); // true
s3 = null;
console.log(s2 && s3); // null
console.log(s2 || s3); // true
console.log(!s2); // false
console.log(!s3); // true
s3 = null;
console.log(!s3); // true

