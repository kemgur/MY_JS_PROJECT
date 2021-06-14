var  numbers=[3,56,2,48,5]

//1.Way
const newNumbers = numbers.map(
  function double(x){
  return x*2;
}
);
console.log(newNumbers);////[6, 112, 4, 96, 10]

//======================

//2.Way
const newNumbers2 = numbers.map(x=>x*2);
console.log(newNumbers2);////[6, 112, 4, 96, 10]

//========================
//3.Way:
const newNumbers1=numbers.map(double);
console.log(newNumbers1);//[6, 112, 4, 96, 10]

//How can we write the same code with forEach loop
const newNumbers3 =[];//1.We have to creat an empty array
//2. use push to add items inside this empty array
//Because forEach doesn't automatically add.
//But map function automatically creates an array and add
numbers.forEach(
   (x)=> newNumbers3.push(x*2)
)
console.log(newNumbers3);//[6, 112, 4, 96, 10]
