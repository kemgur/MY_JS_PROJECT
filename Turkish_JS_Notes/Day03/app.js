/*
const s1 =prompt('Birinci Sayi:');
const islem =prompt('Islem turunu giriniz');
const s2 = prompt('Ikinci sayi');
let result =0;

if(islem=='+'){
    result =s1+s2;
}else if(islem=='-'){
    result =s1-s2;
}else if(islem=='*'){
    result =s1*s2;
}else if(islem=='/'){
    result =s1/s2;
}else{
    alert('You have done wrong.');
}
console.log(`${s1} ${islem} ${s2} = ${result}`);//5 - 3 = 2
*/
//?=============================
/*
const age = prompt('Yasinizi giriniz');
const healt = prompt('Saglikli misiniz e/h');

alert(age>18 && healt=='e'? 'Askere gidebilir' : 'Askere gidemez');
*/
//?=============================

//Basit Hesap Makinasi
/*
const sayi1 = 15, sayi2 =3;
let islem ='/' , sonuc =0;

if(islem =='+'){
    sonuc = sayi1 + sayi2;
}else if(islem =='-'){
    sonuc = sayi1 - sayi2;
}else if(islem =='/'){
    if(!sayi2){
        alert('Bolen sifir olamaz');
    }else{
        sonuc = sayi1 / sayi2; 
    }
}else if(islem=='*'){
   sonuc = sayi1 * sayi2;
}else{
    console.log('Yanlis islem yaptiniz');
}
console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);
*/
//?=============================
/*
let clickButton = document.getElementById("button");
clickButton.addEventListener("click", function weekDay() {

  let day = Number(document.getElementById("numberDay").value);

  switch (day) {

    case 0:
      alert("It's Sunday!")
      break;
    case 1:
      alert("It's Monday");
      break;
    case 2:
      alert("It's Tuesday");
      break;
    case 3:
      alert("It's Wednesday");
      break;
    case 4:
      alert("It's Thursday");
      break;
    case 5:
      alert("It's Friday");
      break;
    case 6:
      alert("It's Saturday");
      break;
      default:{
          alert('Lutfen 0 ile 6 arasinda bir sayi giriniz');
      }
  }
})
HTML Codes:
 Enter a number: <input type="text" id="numberDay">
<button id="button">OK</button>
*/
  //?=============================
/*
var p1 = 5;
var p2 = 7;
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
});
function myFunction(a, b) {
    var sonuc = a * b;
    document.getElementById("demo").innerHTML = sonuc;
}
*/
//?=============================
/*
const borc =0;
const maas =3000;
console.log(!borc && maas>2825.6 ? "Kredi Alabilir ": "Kredi alamaz ??\_(???)_/??");
*/
//?=============================
//Asal Sayi2
const number = 7//Number(prompt('Sayi giriniz'));

let asal=true;
for(let i =2; i<number;i++){
    if(number%i==0){
        asal=false;
        break;

    }else{
        asal=true;
    }
}
const result = asal ? "ASAL":"ASAL DEgIL";
console.log(result);