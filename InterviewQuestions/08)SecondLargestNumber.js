/**
 Create a function that takes an array of numbers and returns the second number
 
 */
var arr =[10,40,30,20,50];
function secondLargest(arr){
    const sortedArr=arr.sort((a,b)=>{
        if(a>b){
            return 1;
        }else if(a<b){
            return -1;
        }else{
            return 0;
        }
    });
return sortedArr[sortedArr.lenght-2];
}