
//=========Sample-1==========
/**
const nums = [-5,15,22,-4,45,78,-25];

let sum = 0;

for(let i =0; i<nums.length; i++){//.length ile daha dinamik bir code oldu.
    sum+=nums[i];
}
console.log(sum);//126


//=========Sample-2==========
const num = [-5,15,22,-4,45,78,-25];

const sum =(num)=>{
    let negatif =0;
    let pozitif =0;
    for(let i =0; i<num.length;i++){
        if(num[i]>0){ 
            pozitif +=num[i];  
        }else{
            negatif +=num[i]; 
        } 
    }
    console.log(`Sum of positive numbers in string: ${pozitif}`);
    console.log(`Sum of negatif numbers in string: ${negatif}`);
}
sum(num);

//=========Sample-3 For in==========

const nums = [120,100,-150,220,300,-100];

let poz =0;
let neg =0;
//1.way
for(let i =0; i<nums.length; i++){
    nums[i]>0 ?  poz++ : neg++;
}
console.log(`Sum of positive numbers in string: ${poz}
             Sum of negatif numbers in string: ${neg}`);


//2.Way
for(let i in nums){
    nums[i]>0 ?  poz++ : neg++;
}
console.log(`Sum of positive numbers in string: ${poz}
             Sum of negatif numbers in string: ${neg}`);

//=========Sample-4 For Each Dongusu==========
let ogrenci =["Ali","Veli","Can"];
function yazdir(a){
    console.log(a);
}
ogrenci.forEach(yazdir);//Ogrencilerin her birini tek tek alir ve console yazdirir

//2.Way Arrow function
ogrenci.forEach((x)=> console.log(x));


//=========Sample-4 For Each Dongusu==========
 const fiyatlar=[200,300,125,450,333];
let sum=0;
 fiyatlar.forEach((f)=> (sum+=f));
 console.log(sum);
//  document.querySelector(".toplam").innerHTML =sum +" TL";
 document.querySelector(".toplam").innerHTML =`${sum} TL`;


 //=========Sample-4 For Each Indis Dongusu==========
 const fiyatlar=[200,300,125,450,333];
let sum=0;
 fiyatlar.forEach((f,i,d)=>{
     console.log(`${i} iterasyon : ${sum}`);

(sum+=f)
}); 
 console.log(sum);
 document.querySelector(".toplam").innerHTML =`${sum} TL`;


 //=========MAP METHODU==========
 //Map() her zaman bir deger dondurur.
 //Dizinin her bir elemanin 2 katini alin
  const num =[3,4,3,2,6,7,9];
  const double = num.map((x)=>x*2);
  console.log(double);
  console.log(num,double);
 */
//Isimler disizini her bir elemani buyuk harfle yazdir
const names = ["Ali","Veli", "Can", "Tomy","Bret"];

const upper = names.map((names)=>names.toUpperCase());
console.log(upper);
//Her bir ismi ayri ayri yazdir
upper.forEach((names)=> console.log(names));

//map() ile  forEach() birlestirip yazarsak upper a gerek yoktur.
names.map((names)=>names.toUpperCase()).forEach((names)=> console.log(names));