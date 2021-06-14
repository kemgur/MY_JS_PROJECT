/**
 In javascript how do you find fibonacci number?
 We can just use reduce function. */
 var     numbers=[3,56,2,48,5];
//accumulator:   3, 3+56=59, 3+56+2=61, 3+56+2+48=109
//eachNumber :   3,56,2,48,5

var numbers =[3,56,2,48,5];
//1.Way
numbers.reduce(
function(accumulator, eachNumber){
    console.log('Accumulator : '+accumulator);
    console.log('Each Number : '+eachNumber);
}
)

//2.Way 
var result = numbers.reduce(
(acc,curentItem)=>{
  return acc+curentItem
}
);
console.log('RESULT : '+result);//"RESULT : 114"

