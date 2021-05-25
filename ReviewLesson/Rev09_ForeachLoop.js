
var array =["bir", "iki","uc", "dort"];
for(element in array){
    console.log(array[element]);//"bir" "iki" "uc" "dort"
}

var array01 ={"key":"value"};// like json code
for(element in array01){
    console.log(array01[element]);//"value"
}

var array02 ={"key":"value"};
for(element in array02){
    console.log(array02);//  key: "value"
}

var array03 ={"key":"value"};
for(element in array03){
    console.log(element);// "key"
}

