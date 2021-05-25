/*
The typeof operator returns the type of 
a variable, object, function or expression:
(Typeof operatörü bir değişken, nesne, işlev veya
ifadenin türünü döndürür:)
Example:
*/
typeof "John"                 // Returns string
typeof 3.14                   // Returns number
typeof NaN                    // Returns number
typeof false                  // Returns boolean
typeof [1, 2, 3, 4]           // Returns object
typeof {name:'John', age:34}  // Returns object
typeof new Date()             // Returns object
typeof function () {}         // Returns function
typeof myCar                  // Returns undefined (if myCar is not declared)
typeof null                   // Returns object

/*
Please observe:

The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined
*/

//Note:You cannot use typeof to define if a JavaScript object is an array (or a date).
//()