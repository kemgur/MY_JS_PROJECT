//Function
function sum(){
    var num1 = 4;
    var num2 = 5;
    var total =num1+num2;
    return total;
}
console.log(sum());

//using result variable to get the outcome of sum() function
const result = sum();
console.log(result);

function square(s){
    return s*s;
}
//Printing results
console.log(square(5));//25

//Getting function and adding 1
const x =square(6) +1;
console.log(x);//36

console.log(square(5,6));
          //square(s)

/*
function addNums(num1,num2,num3){
    return num1+num2+num3;
}
console.log(addNums(2,3,4));//9
*/

//We can assign default values for the parameters
function addNums(num1=3,num2=4,num3=5){//creating variables, and
    console.log(num1+num2);
    return num1+num2+num3;
}
//default value : 3,4,5
//new : 2,3,4
console.log(addNums(2,3,4));//5,9

//default value : 3,4,5
//new : 2,3,5
console.log(addNums(2,3,4));//5,10


//default: 3,4,5 -> 3+4, 3+4+5
//There is no overriden the default values
console.log(addNums());//7, 12




