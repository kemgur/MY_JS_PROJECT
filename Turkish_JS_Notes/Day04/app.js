let i =1;
while(i<=10){
console.log(i +":" + "Merhaba");
i++
}

//?====================
//! 1.Yontem: Function Declaration
//1.Way:Parametresiz
function yazdir(){
    console.log('Ahmet');
}
yazdir();//Fonk. Cagrisi

//2.Way:Parametreli
function yazdirAd(ad, yas){
    console.log(`Addiniz ${ad} Yasiniz ${yas}`);
}
yazdirAd("Ali", 23);//Fonk. Cagrisi

//2.Way:Parametreli, Donus degerli
function yasHesaplama(dogumYil){
    return 2021-dogumYil;
}
console.log(yasHesaplama(2000));

//?====================
//! 2.Yontem: Function Expression
const evenOdd = function(num){
    return num %2==0 ? "Even" :"Odd";
}
console.log(evenOdd(5));

//?====================
//! 2.Yontem: Arrow Function
const sum = (a,b) => a+b;
console.log(sum(2,4));//6

const isEven=(num)=>num%2==0 ? "Even" : "Odd";
console.log(isEven(6));