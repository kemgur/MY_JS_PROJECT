for(var counter =0; counter<100; counter+5){
    console.log(counter);
}
for(var counter1 =0; counter1<30; counter1++){
    if(counter1 % 6 == 0){
    console.log(counter);
}
}
for(var counter2 =0; counter2<30; counter2++){
    console.log(counter2**2);

}

for(var counter3 =0; counter3<30; counter3++){
    console.log(Math.sqrt(counter3));//Karekokunu alir.

}
var array = ["Merhaba", "Nasilsin", "Iyimisin","Uzun","zaman","oldu"];
for(var counter4=0; counter4<array.length; counter4++){
    console.log(array[counter]);

}
//Random sayi uretme
//Random sayilar 0 ile 1 arasindadir. Tam sayi olmasi icin 10 ile carpariz.
for(var counter5=0; counter5<10; counter5++){
    var random = Math.random()*10;
    console.log(random);
}

