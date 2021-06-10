/*
Comparisons(Karşılaştırmalar)
NOTE: 
 === and !== check values and data types
 NOTE: 
JS converts string values to number value when we compare them
*/ 
console.clear();
const x=1;
console.log(typeof(x));//number

const y="1";
console.log(typeof(y));//string

console.log(x==y);//true. comparing only values
console.log(x!=y);//false
console.log(x===y);//false. comparing the values and types
console.log(x!==y);//true
console.log(x>=1);//true
console.log(y>=1);//true

console.log(null);//null
console.log(!null);//true

