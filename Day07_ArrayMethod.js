/*
Arrays Methods:::::
*/
var friendList=['sam','tom','tim','jacob'];
console.log(typeof(friendList));
console.log(friendList);
//1. push(): add element AT THE END of the array
friendList.push('alex');
console.log(friendList);
//2. unshift: add element AT THE BEGINNIG of the array
friendList.unshift('marry');
console.log(friendList);//["marry", "sam", "tom", "tim", "jacob", "alex"]
//3. pop(): deletes the LAST item from the array
//4. shift(): deletes the FIRST item form the array
console.clear();
var fruits=['apple','orange','banana',false,10];
//index.     0.       1.       2.      3.    4
console.log(fruits);//["apple", "orange", "banana", false, 10]
//8. splice(startindex,number of item you want to delete )
fruits.splice(2,1);//start index=2,number of item to be deleted =1
console.log(fruits);
//fruits.splice(0,2);//remove the first 2 items
//INSERTING with splice method
//8. splice(startindex,number of item you want to delete,additem1,additem2,.. )
fruits.splice(1,0,'kiwi','peach');//deleting 0 item, inserting 2 items
/*
start index = 1
how many items will be deleted at index 1= 0
intert items in index of 1 = 'kiwi','peach'
*/
console.log(fruits);//["apple", "kiwi", "peach", "orange", false, 10]
fruits.splice(1,2,'strawberry','cherry','ananas');
/*
1 -> start index
2 -> delete 2 items: ["apple", "orange", false, 10]
'strawberry','cherry','ananas' -> insert these item
["apple",'strawberry','cherry','ananas', "orange", false, 10]
*/
console.log(fruits);//["apple", "strawberry", "cherry", "ananas", "orange", false, 10]

/**
 We can use negative index
 it means start from the last index
 */
//9. concat -> combines arrays
var drinks = ['water', 'coke','soda','fanta'];
var snacks= ['doritos','sunchips','lays','ruffles'];
var shoppingList = drinks.concat(snacks);
console.log(shoppingList);//["water", "coke", "sode", "doritos", "sunchips", "lays"]
//10. slice (start-INCLUDED, end-EXCLUDED);
const favDrinks=drinks.slice(1,3);
console.log(favDrinks);//["coke", "soda"]
const favSnacks=snacks.slice(1);
console.log(favSnacks);//["sunchips", "lays", "ruffles"]
//NOTE: negative index meant start from the last
const leastFavSnacks=snacks.slice(-2);//copy last 2 index
console.log(leastFavSnacks);//["lays", "ruffles"]
//11. reverse() -> reverses the array
var myNums=[4,2,6,1,7,5,-7];
console.log(`ORIGINAL : ${myNums}`);//"ORIGINAL : 4,2,6,1,7,5,-7"
myNums.reverse();
console.log(`REVERSED : ${myNums}`);//"REVERSED : -7,5,7,1,6,2,4"
//12. sort() -> sorts an array in ascending(smallest to greatest) order
myNums.sort();
console.log(myNums);//[-7, 1, 2, 4, 5, 6, 7]
//getting the array in decending order
//sort() + reverse()  = Decending Order
myNums.reverse();
console.log(myNums);//[7, 6, 5, 4, 2, 1, -7]
