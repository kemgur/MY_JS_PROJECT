//For Each Loop
console.clear();
console.log('1. For Each Loop');
/**
 Array.forEach( function parameter );
 Foor loop doesn't take a function parameter, but forEach does
 For each gives us the entire data from an array
 If we need to get certain index, or stating 

 Array.forEach(işlev parametresi);
 Foor döngüsü bir fonksiyon parametresi almaz, ancak forEach alır
 Her biri için bize bir dizideki tüm verileri verir
 Belirli bir indeks almamız gerekirse veya belirtmemiz gerekirse
 */
const array1 =['a','b','c'];
const array2 =[1,2,3,4,5];

array1.forEach(
    function(element){
        console.log(element)
    });

//I can use arrow function inside forEach
//We can use any variable name 
array1.forEach(
    eachItem=>{console.log(eachItem);}//a, b, c
)
console.log('2.For Each Loop');



todos=[
    {
        id:1,
        text:'take out dog',
        isCompleted:true
    },
    {
        id:2,
        text: 'doctor appointment',
        isCompleted: true
    },
    {
        id:3,
        text: 'go to shopping',
        isCompleted: true
    }
];
todos.forEach(
    function (myTodoItems){
        console.log(myTodoItems)
        console.log(myTodoItems.id)
        console.log(myTodoItems.text)
    }
)

console.log('3.For Each Loop With Arrow Function');
todos.forEach(
    (myTodoItem)=>{
        console.log(myTodoItems)
        console.log(myTodoItems.id)
        console.log(myTodoItems.text) 
    }
)

//For Of Loop-This is not very common
console.log('4.For of loop')
for (var todo of todos){//String todo : todos -> java version
    console.log(todo);
}


//Example:
//Get the sum of all the values in the array:
//Dizideki tüm değerlerin toplamını alın:
var numbers = [65,44,12,4];
numbers.forEach(myFunction);

function myFunction(item, index, arr){
    arr[index]=item*10;
};
/**
 <!DOCTYPE html>
<html>
<body>
<p>Get the sum of the numbers in the array.</p>
<p id="demo"></p>
<script>
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  sum += item;
  document.getElementById("demo").innerHTML = sum;
}
</script>
</body>
</html>
 */
//===========================
//Example
//For each element in the array: update the value with 10 times the original value:
//Dizideki her eleman için: değeri orijinal değerin 10 katı ile güncelleyin:
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}/**
<!DOCTYPE html>
<html>
<body>
<p>For each element in the array: multiply the value with 10 and update the element value:</p>
<p id="demo"></p>
<script>
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
document.getElementById("demo").innerHTML = numbers;
</script>
</body>
</html>
*/

