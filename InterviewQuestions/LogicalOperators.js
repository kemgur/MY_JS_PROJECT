/**
 Operator Meaning
&&
And operator returns true if all TRUE
||
Or operator returns true if one or more is TRUE
!
Not operator returns the opposite of value. If value is true
returns FALSE, if value is false returns TRUE
 */

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

/** 
=== is equal to
== is equal to
Difference:
=== checks value and data type (1!==“1”)
== checked only the value (1 == “1”)


IMPORTANT NOTE:
0, FALSE, null, undefined,"" , NaN
considered as FALSE.
All other values are TRUE

For Example:
//1)
if(0){
    console.log('True');
}else{
    console.log('False');//"False"
}

//2)
if(null){
    console.log('True');
}else{
    console.log('False');//"False"
}

//3)
if(10){
    console.log('True');//"True"
}else{
    console.log('False');
}

//3)
if('apple'){
    console.log('True');//"True"
}else{
    console.log('False');
}
*/