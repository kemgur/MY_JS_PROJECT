/*
The in Operator(Operatör içi):

The in operator returns true if the specified property is 
in the specified object, otherwise false:
(İn operatörü, belirtilen özellik belirtilen nesnede ise true,
aksi takdirde false döndürür:)

Example:
*/
// Arrays
var cars = ["Saab", "Volvo", "BMW"];
"Saab" in cars          // Returns false (specify the index number instead of value)
0 in cars               // Returns true
1 in cars               // Returns true
4 in cars               // Returns false (does not exist)
"length" in cars        // Returns true  (length is an Array property)

// Objects
var person = {firstName:"John", lastName:"Doe", age:50};
"firstName" in person   // Returns true
"age" in person         // Returns true

// Predefined objects
"PI" in Math            // Returns true
"NaN" in Number         // Returns true
"length" in String      // Returns true