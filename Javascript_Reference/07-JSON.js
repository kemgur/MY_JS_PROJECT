/*
JSON (JavaScript Object Notation)
JSON is a format for storing and transporting data.
JSON, verilerin depolanması ve taşınması için bir formattır.

JSON is text, and text can be transported anywhere, 
and read by any programming language.
JSON metindir ve metin herhangi bir yere taşınabilir ve 
herhangi bir programlama dili tarafından okunabilir.

JavaScript Objects can be converted into JSON, 
and JSON can be converted back into JavaScript Objects.
JavaScript Nesneleri JSON'a dönüştürülebilir ve 
JSON tekrar JavaScript Nesnelerine dönüştürülebilir.

This way we can work with the data as JavaScript objects,
 with no complicated parsing or translations.
 Bu şekilde, karmaşık ayrıştırma veya çeviriler olmaksızın verilerle 
 JavaScript nesneleri olarak çalışabiliriz.
 */
// a JavaScript object...:
var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

// send JSON:
window.location = "demo_json.php?x=" + myJSON;


