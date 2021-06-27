//YENI NESIL OPERATORLER:DESTRUCTURING(seklini bozma) (OBJECT)
//ES^ ile birlikte bir dizi ya da nesnelerin icersindeki elemanlar
// kolaylikla ayristirilabilir.

const birey={
adi:"Can",
konum:"Samsun",
email:"can@gmail.com",

};

//1.Way Klasik Yontem
const ad1 =birey.adi;
const konum1 =birey.konum;
console.log(ad1,konum1);//Can Samsun

//* 2.Way: Object DESTRUCTURING
/*  Destructing kullanilirken "Key" isimleri nesneninki ile
ayni olmalidir. aksi takdirde undefined degerler donerler */
const {adi, konum, email} =birey;//birey nesnesindeki property'leri ayristirir.
console.log(adi, konum, email);//Can Samsun can@gmail.com
//Hepsi birey objesinden gelir
birey.adi ="Mustafa";//birey nesnesindeki adi gunceller
console.log(birey);


//YENI NESIL OPERATORLER:DESTRUCTURING(seklini bozma) (ARRAY)
const isimler = ["Ali", "Veli","Can"];

//Klasik Yontem
const isim1 = isimler[0];
const isim2 = isimler[1];

//Dest
const [kisi1,kisi2,kisi3]=isimler;
console.log(kisi1,kisi2);//Ali Veli
console.log(kisi1, kisi3);//Ali Can