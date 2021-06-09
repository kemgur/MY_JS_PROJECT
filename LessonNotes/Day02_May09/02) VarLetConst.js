//var, const, let

//var
var price;
price = 23
console.log(price);

price = 19.99;
console.log("Price:" + price);

var price = "free";
console.log("Price: " + price);

/**
 1. First js variable is var. It is a function
scope.
2. Var can be reassigned to a new value
3. We can declare a var variable after
using it. Let and const doesn’t allow this

Var, yeni bir değere yeniden atanabilir
3. Sonra bir var değişkeni bildirebiliriz
onu kullanmak. Let ve const buna izin vermiyor
*/
console.log(myVarVariable);//undefined
var myVarVariable="usa";
console.log(myVarVariable);//usa
 
/**
 we use it you will be familiar with that
 onu kullanıyoruz, buna aşina olacaksınız
 */
//==============================

//let and const, came with ES6(Modern Javascript)
//LET
/**
1.Let is only defined within the
block that is originally
defined.Similar to const
1.Let sadece içinde tanımlanır
aslen blok
tanımlı. const'a benzer

2.We can’t redeclare same let
variables name using let
keyword
2. Aynı izni yeniden ilan edemeyiz
let kullanarak değişken adı
anahtar kelime

3. We can’t declare a let
variable after using it not to
get error.Similar to const
3. Let ilan edemeyiz
kullanmadıktan sonra değişken
hata al. const ile benzer
 */
let language = "Java";
language = "Javascript";
console.log(language);//Javascript
console.log(typeof language);//string

language = 1;
console.log(language);//1
console.log(typeof language);//number

language = true;
console.log(language);//true
console.log(typeof language);//boolean

language = null;
console.log(language);//null
console.log(typeof language);//object

//CONST KEYWORD
/**
 1.const is only defined within the block
that is originally defined
1.const yalnızca blok içinde tanımlanır
orijinal olarak tanımlanmış olan

2.We can’t change const variables
2. cont değişkenlerini değiştiremiyoruz

3.const variables must be initialized
3. const değişkenleri başlatılmalıdır

•Advantage: You can’t change the value by
mistake
Avantaj: Değeri şu şekilde değiştiremezsiniz:
hata
•Disadvantage: You can’t use for changing
values
Dezavantajı: Değiştirmek için kullanamazsınız
değerler
•Use const if the value doesn’t change
Değer değişmiyorsa const kullanın
 */
const isim = "TechPro";
console.log(isim);//"TechPro"
console.log(typeof (isim));//"string"

const pi = 3.14;
console.log(pi);//3.14
console.log(typeof pi);//"number"

const isTrue = true;
console.log(isTrue);//true
console.log(typeof isTrue);//"boolean"