//Map
/**
 Map: Creates a new array with each item in that array
      Map takes a function parameter
 */
var numbers=[3,56,2,48,5];
function double(x){
    return x*2;
}

const newNumbers = numbers.map(
    function double(x){
        return x*2;
    }
)
console.log(newNumbers);//[6, 112, 4, 96, 10]