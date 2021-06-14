var numbers=[3,56,2,48,5];

//1.Way
const newNumbers=numbers.filter(
function (num){
  return num>10;
}
)
console.log(newNumbers);

//2.Way
const newNumbbersArrow =numbers.filter(
 num=>num>10
); 
console.log(newNumbbersArrow);

//3.Way
//HOW CAN I DO THIS USING FOR EACH. 
//THIS IS NOT PART OF FILTER. THIS IS JUST TO SEE HOW WE CAN DO WITH FOR EACH
//Step 1: Create an empty array
var newNumbersForEach=[];
numbers.forEach(
function(num){
  if(num>10){
    newNumbersForEach.push(num);
  }
}
)
console.log(newNumbersForEach);//[56, 48]


//4.Way
//We can solve with for each and ternary as well 
const newN2=[];
numbers.forEach(x=>x>10 ? newN2.push(x):newN2.push());
console.log(newN2);//[56, 48]