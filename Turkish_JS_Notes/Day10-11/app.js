
/*
! FILTER METHODU

const num =[100,200,250,300,500,700];

const lessThan250 =num.filter((num)=> num<250);
console.log(lessThan250);


//350 den kucuk olanlari tek tek yazdirin //Print smaller than 350 one by one
const num =[100,200,250,300,500,700];
num.filter((num) => num<350).forEach((num)=> console.log(num));

//sorting from smallest to largest
console.log(num.sort((a,b)=> a-b));

//sorting from largest tosmallest
console.log(num.sort((a,b)=> b-a));


!PIPELINE
const salary=[2500,3000,5000,3900,6000,6500];

//Maasi 4000 altinda olanlara %10 zam yapalim
const zamlimaaslar = salary.filter((salary)=>salary<4000)
                           .map((salary)=>salary*1.5);
console.log(salary,zamlimaaslar);

//Her birini ayri ayri yazdir
salary.filter((salary)=>salary<4000)
      .map((salary)=>salary*1.5)
      .forEach((salary)=> console.log(salary));

*/
//!REDUCE
const salary=[2500,3000,5000,3900,6000,6500];
const sumSalary = salary.reduce((a,b)=> a+b,0 );//Burdaki 0 x'in baslangic degeridir.
console.log(sumSalary);
