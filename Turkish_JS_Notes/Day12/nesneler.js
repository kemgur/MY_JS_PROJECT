
//=====Nesneler(Objects)========
//Diziler sirali bellek bolgeleridir.Dolayisiyla dizilere erisim indisleme ile yapilir.
//Sirali bellekte ihtiyac varsa (strucred) dizi kullanmak mantiklidir.
//Eger veriler lomplekse ise o zaman dizilerde erisim guclugu cikar.

//JS =>proto type based dil
//Java=> class type based dil

// function constructor
function Person(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
// this will show Person's prototype property.
console.log(Person.prototype);

//Nesnelerde key-value(property-value )  yapisi lullanilir
//Nesnelerde aradigimiz veriyie erismek icin property adini kullanmak yeterlidir.

const insan ={
    adi :"Ali",
    soyadi: "Can",
    yas: 30,
    meslek: "developer",
    diller:["Java", "js", "C++","SQL","Phyton"],
};
console.log(insan);

//insan objesinin properties'lerine 2 yontemle ulasiriz
//1..dot notasyonu ile
console.log(insan.adi);//Ali

//2.[""] yontemi ile
console.log(insan["adi"]);//Ali

const yazi = "Adim";

console.log(`${yazi} ${insan.adi} ve yasim ${insan["yas"]}`);
//Adim Ali ve yasim 30

//const bilgiSecimi = prompt("insan hakkinda ne bilmek istersin?"
);

if(insan[bilgiSecimi]){
    console.log(insan[bilgiSecimi]);//adi//Ali

}else{
    console.log(
        "Yanlis secim.Lutfen dogru bilgi giriniz"
    );
}

//insan objesine nasil veri  eklenir.