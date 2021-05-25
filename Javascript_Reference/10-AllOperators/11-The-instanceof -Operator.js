/*
The instanceof Operator(Operatör örneği):

The instanceof operator returns true if the specified object is
an instance of the specified object:
(İnstanceof operatörü, belirtilen nesne belirtilen nesnenin bir örneğiyse true döndürür:)
*/
var cars = ["Saab", "Volvo", "BMW"];

cars instanceof Array;          // Returns true
cars instanceof Object;         // Returns true
cars instanceof String;         // Returns false
cars instanceof Number;         // Returns false
