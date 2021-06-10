/**
Argument(Bagimsiz degisken):
Functions can have input. That inputs can 
change the behavior of the function
We use the input like the variable, 
we use it to calculate or do something inside that.
 */
function greetPeople(name){//name is a parameter. Name IS NOT ACCESSABLE OUTSIDE OF THIS FUNCTION
    console.log('Hello '+name);
   }
   greet("Sam"); //—>> Sam is an ARGUMENT. It is not PARAMETER


   function personInfo(firstName,lastName,dateOfBirth){//parameter
    console.log('Name: '+firstName+'\nLast Name: '+lastName+'\nDOB: '+dateOfBirth );
   }
   personInfo('John','Walker',1990);//argument 