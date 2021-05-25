//array sort(), includes(), reverse(), join(), lastIndexOf(), finIndex()

let fruit=["orange", "apple", "banana", "Kiwi","grapes","melon"];
console.log(fruit);

fruit.sort();
console.log(fruit);

fruit.push("watermelon");
fruit.push("pineapple");
console.log(fruit);

fruit.sort();
console.log(fruit);

//=======================
var num=[5,10,1,19,100];
console.log(num);
console.log(typeof(num));

num.sort();
console.log(num);

//======================
let fruit=["orange", "apple", "banana", "ciwi","grapes","melon"];
console.log(fruit);

fruit.sort();
console.log(fruit);
fruit.reverse();
console.log(fruit);

//=================
let arr=[
    5,
    10,
    "javascript",
    {
        name:"Ali",
        id:101
    },
    {
        name:"Can",
        surname:"Yildiz"

    }
];//json datatype
console.log(arr);
console.log(typeof(arr));//"object"
console.log(typeof(arr[0]));//"number"
console.log(typeof(arr[1]));//"number"
console.log(typeof(arr[2]));//"string"
console.log(arr[3]);
console.log(arr[3].name);//"Ali"
console.log(arr[3][1]);//"undefined"

//=======================
let arr=[30, "alican",[1,2,3], ["halil","levent","isa"],{name:"asli",id:101}];
console.log(arr);
console.log(arr[2]);//[1, 2, 3]
console.log(arr[2][1]);//2
console.log(arr[4][0]);//undefined
console.log(arr[4].id);//101

arr.sort();
console.log(arr);

//=====================
let person=["ali","pinar", "john", "bush"];
console.log(person.includes("ali"));
console.log(person.includes("bush"));

//join use for remove averting between items and put what you want
let arr=["car", "computer", "laptop", "pc","plane"];
console.log(arr);
console.log(arr.join());
console.log(arr.join("buy"));//"carbuycomputerbuylaptopbuypcbuyplane"
console.log(arr.join("_"));//"car_computer_laptop_pc_plane"

//=====================
//slice()
//slice(index no) start from index no and take elements up to end of array
//slice(starting index, finishing index) taking elements from starting index up to finisihing index
//includes, excludes
let car=["toyota","bmw","mercedes","audia","nissan","mazda"];
console.log(car);
console.log(car.slice(1));
console.log(car.slice(2));//["bmw", "mercedes", "audia", "nissan","mazda"]
console.log(car.slice(1));//["mercedes", "audia", "nissan","mazda"]
console.log(car.slice(2,4));//["mercedes", "audia"]
console.log(car.slice(2,5));//["mercedes", "audia", "nissan"]

//==================
//lastIndexOf
let arr=["orange","apple","melon","apple"];
console.log(arr);
console.log(arr.indexOf("apple"));//returning index no(first index)
console.log(arr.indexOf("apple"));//1
console.log(arr.indexOf("orange"));//0
console.log(arr.lastIndexOf("apple"));//3

//=============
//findIndex()
var num=[1,4,60,130,55,85,57];
console.log(num);
//var num1=(item)=>item>50;
//console.log(num.findIndex(num1));
console.log(num.findIndex(function num1(item){
  return item==60;//2
}
        ));

//2.way 
let ar=(item) =>item==60;//   

/**
 / Arrow function
findIndex((element) => { ... } )
findIndex((element, index) => { ... } )
findIndex((element, index, array) => { ... } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function callbackFn(element) { ... })
findIndex(function callbackFn(element, index) { ... })
findIndex(function callbackFn(element, index, array){ ... })
findIndex(function callbackFn(element, index, array) { ... }, thisArg)
 
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3
*/



