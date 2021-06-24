const dogum =1960;

const yaslar = [30, 44, 55, 65]
const isimler = [
    true,
    "Ali",
    "Veli", 
    "Hasan", 
    "Bekir",
    "Ayse", 
    false, 
    20 ,
    false, 
    12.3,
    2021-1990,
    2021-dogum,
    yaslar
];
console.log(isimler);
console.log(isimler[0]); //Ali
//isimleri degistirme
console.log(isimler[0]="Canan");
console.log(isimler);//Degistigini console da gorebiliriz.

isimler[isimler.length-2]=true;
console.log(isimler);
console.log(isimler[12]);
console.log(isimler[12][0]);//30

//Non-primitive(obje) const degerleri degisebilir.
//Primitivlerde const degeri degismez

//-------DIZIYI DEGISTIREN METHODLAR-----------
const h1 = document.getElementById("meyveler");
let meyveler =["Elma","Armut","Kayisi","Muz","Kivi"];

//pop() son elemani siler
meyveler.pop();//Kivi silindi

//push() dizinin sonuna eleman ekler
meyveler.push("Karpuz","Cilek");//Array(6) =>dizenin son eleman sayisini dondurur

//shift() dizinin ilk elemanini siler ve return eder.
meyveler.shift();//elma silindi

//shift() dizinin basina elemanini ekler son eleman sayisini return eder.
meyveler.unshift("Incir");//(6)

//splice() dizeye ait elemanlari siler ve yeni elemanlar ekler
meyveler.splice(1,0,"Erik");//(7) ["Incir", "Erik", "Armut", "Kayisi", "Muz", "Karpuz", "Cilek"]
//Dizinin indexi 1 ile 2.index arasina "Erik" ekledi

//Karpuzu sil onun yerine "Mango" yaz.
meyveler.splice(5,1,"Mango");

console.log(meyveler);
h1.innerHTML =meyveler;

//==========Dizi Ersim Methodlari===========
const sayilar = [3,4,6,"bes", 2, "bir","2",5];
console.log(sayilar.includes(5));//true

//join() dizinini elemanlarini birlestirip stringe cevirir
const sayilar1 = sayilar.join(" ");
console.log(sayilar1);

//toString() elemanlarin arasina virgul koyarak strige cevirir.
const sayilar1 = sayilar.toString();
console.log(sayilar1);

//indexOf() ilk eslesen indexi dondurur







