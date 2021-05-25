/*
Değişken oluşturma(Declaration) ve tanımlama(initialization)
"var" ile bir değişken oluşturduğumuzda ve herhangi bir değer atamadığımızda, 
oluşturulan değişkenin değerine "default" olarak "undefined" atanır. 
Oluşturduğumuz bu değişkeni "console.log" ile çağırdığımızda "undefined" çıktısını alırız.

Variable Declaration:
Değer atamadan sadece değişken oluşturma işlemine "Variable Declaration" denilmektedir.
*/
var album;//Variable Declaration
console.log(album);//undefined

/*
Değişkene herhangi bir değer atayıp console.log() ile çağırdığımızda 
değişkenin değerini bize döndürür.
Variable Initialization (inisilizeysin):
Bir değişkene ilk değeri atama işlemine Variable Initialization denmektedir.
*/
var newAlbum="Sari Cizmeli Mehmet Aga";//Variable Initialization
console.log(newAlbum);//"Sari Cizmeli Mehmet Aga"

/*
Scope:
Scope uygulamamızda ki değişkenlerin ve fonksiyonların
 nerelerde erişilebilir, nerelerde erişilemez olduklarını belirler.

 Global Scope:
Global Scope özellikli değişkenler, 
fonksiyon içerisinden de erişilebilir durumdadırlar.
*/
var sayHi = "Hello";
function greet(){
    console.log(sayHi);
}
greet();//"Hello"

/*
Function Scope:
Eğer var ile tanımlanan bir değişken, 
bir fonksiyon içerisinde oluşturulmuş ise, 
sadece o ve nested dediğimiz fonksiyon içerisinde bulunan
 diğer fonksiyonlar içerisinde çağırılıp kullanılabilir.
*/
function getAlbumDate(){
    var albumDate = new Date();
    return albumDate;
}
getAlbumDate();
console.log(albumDate);
/*
Yukarıda ki işlemde oluşturduğumuz albumDate değişkenine 
fonksiyonun dışarısında erişmeye çalıştık.
 albumDate değişkenimiz, getAlbumDate adlı 
 fonksiyonumuz içerisinde tanımlandığı için,
  sadece o fonksiyon ve o fonksiyonun içerisinde
   yer alan diğer fonksiyonlar içerisinden
    erişilebilir durumdadır.
     Fonksiyon dışında çağırmaya çalışırsak hata alırız.
*/

function getAlbumDates(){
    var albumDates =new Date();

    function modifyAlbumDates(){
        return albumDates.toDateString();
    }
return modifyAlbumDates();
}
 getAlbumDates();//Sat Apr 29 2021
 console.log(albumDates);//ReferenceError: albumDates is nor defined 
/*
Görmüş olduğunuz gibi getAlbumDates adlı fonksiyonumuz 
içerisinde tanımlamış olduğumuz albumDates değişkenini,
 getAlbumDates fonksiyonu içerisinde bulunan modifyAlbumDates
  fonksiyonu içerisinde de kullanabiliyoruz. toDateString()
   bize daha okunaklı bir tarih formatı sunar.
*/

/*
Şimdi başka bir örnek ile detaylandıralım.
 Örneğin bir restoran düşünelim. Bu restorandaki
  yemeklerin fiyatları artırılmak isteniyor.

İlk olarak, yemeklerin fiyatlarını bir array’e atalım.
 Bir de eklenecek olan değeri belirleyelim. 
 Yeni yemek fiyatlarını hesaplayacak fonksiyonu yazalım.
 */
function foodPrice(prices, addValue){
   var newPriceList =[];
   
   for(var i=0; i<prices.length; i++){
       var finalPrice = prices[i] + addValue;
       newPriceList.push(finalPrice);
   }
   return newPriceList;
}
const result = foodPrice([10,20,30],10);
console.log(result);//[20,30,40]
//for döngüsüne baktığımızda, tanımlanan değişkenleri 
//scope dışarısında da kullanabildiğimizi görürüz
// çünkü var ile tanımlanan değişkenler 
//function scope özelliği taşımaktadır.

/*
var-let-const ve Farkları:
var vs let
İlk olarak, var ve let’i karşılaştıralım.
var ve let arasında ki fark, 
var function scope özelliği taşırken,
let block scope özelliği taşımaktadır.
Yani let ile oluşturulan bir değişken 
sadece oluşturulduğu yerdeki süslü parantezler içerisinde
erişilebilirdir ve dışarısında kullanılamaz.

Peki var yerine let yazarsak ne olur?
ReferenceError: i is not defined hatası alırız.
Bunu almamızın sebebi let keyword’ü block scope özellikli olmasıdır.
let keyword’ü ile oluşturulan bir değişkeni, 
oluşturulduğu süslü parantezler dışarısında 
çağırmaya çalışırsak hata alırız.
*/

/*
Tekrar tanımlama ve güncelleme durumu:
var keyword’ü ile değişkenler tekrar tanımlanabilir 
ve değerleri güncellenebilir.*/
var greeter = "Hey hello";
var greeter = "Say hello instead";
console.log(greeter);//"Say hello instead"

//veya şu şekilde kullanabiliriz
var greeter = "Hey hello";
greeter = "Say hello instead";
console.log(greeter);//"Say hello instead"

/*
let ile tanımlanan bir değişkeni tekrar tanımlayamayız 
ancak değerini güncelleyebiliriz.*/
let saySomething = "Selam";
saySomething = "Merhaba";
console.log(saySomething);//"Merhaba"

//Şu şekilde tekrar tanımlama durumunda hata alırız.
let saySomething = "Selam";
let saySomething = "Merhaba";
console.log(saySomething);//"SyntaxError: Identifier(tanimlayici) 'saySomething'
// has already been declared at 

/*Hoisting:
JavaScript’de bir değişkeni önce kullanıp, 
daha sonra tanımlayabiliriz. 
Yazdığımız kod derlenmeden önce değişken ve
fonksiyon tanımlamaları scope’un başına alınır.
Bu durum Hoisting olarak adlandırılmaktadır. 
Örnekler ile daha anlaşılmasını sağlamaya çalışalım.*/
greeter = "Say Hello";
console.log(greeter);//"Say Hello"
var greeter;
//Bu durum let ve const için geçerli değildir.
//Eğer değişkeni let veya const keyword’ü ile 
//tanımlamış olsaydık, hata alırdık.
greeter = "Say Hello";
console.log(greeter);
let greeter;//greeter is not defined.(tanimlanamadi)

greeter = "Say Hello";
console.log(greeter);
const greeter;//Missing initializer in const declaration
//Const bildiriminde eksik başlatıcı

/*
let-const arasındaki farklar:
const ile oluşturulan bir değişkene 
daha sonrasında tekrar değer ataması yapılamaz.*/
let name = "John";
const handle = "Cash";
name :"John Lee";// ok ==> "=" yerine ":" kullanilir
handle="Cash Lie";//Type Error: Assignment to constant variable.
// Sabit değişkene atama.

/*
let ile oluşturduğumuz bir değişkene daha sonrasında
 yeni bir değer atayabiliriz ancak const ile 
 oluşturulan değişkene yeni bir değer tekrar atanamaz. 
 Bu durum immutable(Değişmez) olarakta tanımlanmaktadır.
const’un ne gibi durumlarda immutable ne gibi
durumlarda mutable olduğuna bir bakalım.*/
const person ={
    name:' Brad Pitt'
}
person.name='Angelina Jolie';
person={};//"TypeError: Assignment to constant variable.
/*Bir nesne içerisinde ki bir özelliği değiştirmek 
veya özellik eklemek, tekrar atama yapmak değildir.
 Immutable(degismez) durumu, oluşturulan nesnenin kendisine
  yeni bir değer ataması yapılamama durumuna denir.

  
  /*
Dikkat Edilmesi Gereken Durumlar:
1- Bir block scope içerisinde var keyword’ü ile
tanımlanan bir değişkenin scope dışına sızma durumu
bulunmaktadır bu da istenmeyen durumlara yol açabilir.*/
var bodyWeight =50;
if(bodyWeight>49){
    var water =1.4;
    console.log(`For body weight of ${bodyWeight}kg,
     you should drink water atleast ${water} litre`);
}
console.log(water);//1.4

/*2-Let ve const block scope özellikli oldukları için
 herhangi bir şekilde scope dışında kullanılamazlar.*/
 const bodyWeight =50;
if(bodyWeight>49){
    const water =1.4;
    console.log(`For body weight of ${bodyWeight}kg,
     you should drink water atleast ${water} litre`);
}
console.log(water);//Uncaught Reference Error: water is not denined

/*
3- Global olarak tanımlanan bir değişkeni, 
fonksiyon içerisinde tekrar tanımlayıp yeni bir değer atamak,
de bulunan değişkenin değerinin de değişmesine sebep olabilir.*/
var greeter="hey hi";
var times =4;
if(times>3){
    var greeter = "say Hello instead";
}
console.log(greeter);//"say Hello instead"

/*
4-let ve const block scope özellikte oldukları için, 
greeting, yer aldığı scope’a göre farklı değer gösterir.*/
let greeting="hey Hi";
if(true){
    let greeting = "say Hello instead";
    console.log(greeting);// "say Hello instead"
}
console.log(greeting);//"hey Hi"

/*
Genel olarak özetleyecek olursak:
1-var function scope özelliği taşımaktadır.
 let ve const block scope özelliklidir.

2-Oluşturulan değişken önce kullanılıp
 daha sonra var keyword’ü ile tanımlanırsa
  herhangi bir hata oluşmaz(Hoisting). 
  let ve const için bu durum geçerli değildir.

3-let ve const ile oluşturduğunuz değişkenlere
 değer atadığımızda, const ile oluşturduğunuz 
 değişken’e tekrar atama yapamayız, ancak 
 let değişkenine yeni bir değer ataması yapabilirsiniz.*/













