/*
MAP:  Creates a new array with each item in that array
      Map takes a function parameter
      Bu dizideki her öğeyle yeni bir dizi oluşturur
      Harita bir fonksiyon parametresi alır 
*/
var  numbers=[3,56,2,48,5]
//Combination 1:
function double(x){
  return x*2;
}
//Result:map is looping through the numbers.
//map,  sayılar arasında dolaşıyor.
const newNumbers = numbers.map(
  function double(x){
  return x*2; 
}
);
console.log(newNumbers);//[6, 112, 96, 10]

//2.Way
//We can pass double function inside the map to get the new array
//Yeni diziyi elde etmek için map'in içine çift işlevi geçirebiliriz
//Daha kolay bir sekilde ayni sonucu alabiliriz

const newNumbers1=numbers.map(double);
console.log(newNumbers1);//[6, 112, 4, 96, 10]


//Combination 2:
//We can use function directly inside map
const newNumbers=numbers.map(
  //     3*2=6,56*2,2*2,48*2,5*2
function double(x){
  return x*2;
})
console.log(newNumbers);//[6, 112, 4, 96, 10]

//3.Way 
//We can use Arrow Function inside the map
const newNumbers2 = numbers.map(x=>x*2);
console.log(newNumbers2);////[6, 112, 4, 96, 10]

//NOT RELATED TO MAP. THIS IS TO SHOW HOW WE WOULD DO WITH FOR EACH LOOP
//How can we write the same code with forEach loop
const newNumbers3 =[];//1.We have to creat an empty array
//2. use push to add items inside this empty array
//Because forEach doesn't automatically add.
//But map function automatically creates an array and add
numbers.forEach(
   (x)=> newNumbers3.push(x*2)
)
console.log(newNumbers3);//[6, 112, 4, 96, 10]


















