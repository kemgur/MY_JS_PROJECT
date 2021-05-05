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
friendList.pop();
console.log(friendList);//["marry", "sam", "tom", "tim", "jacob"]
//4. shift: deletes the FIRST item form the array
friendList.shift();
console.log(friendList);//["sam", "tom", "tim", "jacob"]
var ages=[10,34,21,19];
console.log(ages)
console.log(typeof(ages));
//5.isArray
