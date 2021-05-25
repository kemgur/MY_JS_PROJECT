/*
The delete operator deletes a property from an object:
(Silme operatörü, bir nesneden bir özelliği siler:)
Example: */
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"];

/*
The delete operator deletes both the value of the property and the property itself.
(Silme operatörü, hem özelliğin değerini hem de özelliğin kendisini siler.)

After deletion, the property cannot be used before it is added back again.
(Silme işleminden sonra, özellik tekrar eklenmeden önce kullanılamaz.)

The delete operator is designed to be used on object properties. It has no effect on variables or functions.
(Silme operatörü, nesne özelliklerinde kullanılmak üzere tasarlanmıştır. Değişkenler veya işlevler üzerinde etkisi yoktur.)

Note: The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
(Not: Silme operatörü, önceden tanımlanmış JavaScript nesnesi özelliklerinde kullanılmamalıdır. Uygulamanızı çökertebilir.)
*/