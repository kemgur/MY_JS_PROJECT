
/*
Comparisons
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



/*
If Statement
if(light===green){
goStraight();
}else{
stop();
}
&&, ||, ! operators are used for comparison
*/
console.clear();
const x=4, y=5, z=2;
if(x>y){
  console.log('x is greater than 5');
}else if(x===y){
  console.log('x is equal to y')
}else{
  console.log('non of the above statement is true');//prints this block 
}
if(x>y && x>z){
  console.log('Block 1')
}else if(x>y || x>z){
  console.log('Block 2')//block 2
}else{
  console.log('BLock 3')
}
/* 
FALSE:
false, null, 0, NaN, "", undefined
*/
if(false){
     console.log('Block 1');
}else{
    console.log('Block 2');//this prints
}
if(null){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(0){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(NaN){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(""){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(undefined){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
// BELOW ARE TRUE
if(true){
    console.log('Block 1');//Prints 
}else{
    console.log('Block 2');
}
if(6){
    console.log('Block 1');//Prints 
}else{
    console.log('Block 2');
}
if('ahmet'){
    console.log('Block 1');//Prints 
}else{
    console.log('Block 2');
}