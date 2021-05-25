
var dice1 = Math.random();
var dice2 =Math.random();

if(dice1<1 && dice2<1){
    dice1=(dice1+1)*10;
    dice2=(dice2+1)*10;

    dice1=Math.floor(dice1);
    dice2=Math.floor(dice2);
}
if(dice1>6){
    dice1=dice1%6;
}
if(dice2>6){
    dice2=dice2%6;
}
console.log(dice1);
console.log(dice2);
