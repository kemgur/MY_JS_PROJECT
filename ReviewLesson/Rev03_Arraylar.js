var array = [20,10,40,30,"Hello", "Can", true];
array.push(0,1);//array icerisine eleman eklememizi saglar
console.log(array);//(9) [20, 10, 40, 30, "Hello", "Can", true, 0, 1]

//pop();//array'in sonundaki elemani siler
array.pop();//array'in sonundaki elemani siler
console.log(array);//(8) [20, 10, 40, 30, "Hello", "Can", true, 0]

//slice() array'in belli bir miktarini keser
var yeniArray = array.slice(2,6);//2.elemani alir, elemani almaz.
console.log(yeniArray);//(4) [40, 30, "Hello", "Can"]

// Array'i String'e cevirme
var String = array.toString();
console.log(String);//20,10,40,30,Hello,Can,true,0

//sort() elemanlari siralar
array.sort();
console.log(array);//(8) [0, 10, 20, 30, 40, "Can", "Hello", true]

//reverse() array'i tersine cevirir
array.reverse();
console.log(array);//(8) [true, "Hello", "Can", 40, 30, 20, 10, 0]

//lengt() arrayin uzunlufunu verir.
array.length();
console.log(array);//8







