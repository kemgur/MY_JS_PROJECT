// 1 ) Write a program to check if a year is leap year or not.
// if the year is divisible by 100 then it must be divisible by 400.
// If a year is not divisible by 100 then it must be divisible by 4. (N.6)
​
function isLeap(year){
    return (year%100===0)?(year%400===0):(year%4===0);
}
console.log(isLeap(2004));
console.log(isLeap(1700));
console.log(isLeap(1600));
​
// 2 ) Write a JS program to remove a character at the specified position of a given string and return the new string(N.22)
​
function rem(str, p){ // "kalem", 3
    return str.slice(0, p) + str.slice(p+1);
}
console.log(rem("kalem", 7));
console.log(rem("kalem", 1));
console.log("kalem".substring(4, 1)); // prints substring(1,4)
console.log("kalem".slice(4, 1));     // prints empty string
​
// 3 ) Write a JS program that returns the extension of a given file name(N.14) // solid.txt solid.js
​
function getExt(fileName){
    if ( !fileName.includes(".")) return "invalid";
    return fileName.substring(fileName.indexOf(".") + 1);
}
console.log(getExt("solid.txt"));
console.log(getExt("solid"));
​
// 4 ) Write a JS function that accepts a string as a parameter and converts the first letter of each word
// of the string in upper case.
// Example : solid byte group study  ==> Solid Byte Group Study
​
function firstUpp(str){
    arr = str.split(" ");
    brr = [];
    for ( let i = 0 ; i < arr.length ; i++){
        brr.push(  arr[i].charAt(0).toUpperCase()  +  arr[i].substring(1)   );
    }
    return brr.join(" ");
}
console.log(firstUpp("solid byte group study"));