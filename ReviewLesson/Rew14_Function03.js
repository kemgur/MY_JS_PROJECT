/*
Recirsive Fonksiyon.(icice fonksiyonlar);
isler1'i islem2'nin icersinde, 
islem2'yi de islem1'in icersinde calistirarak 
sonsuz bir dongu olusturduk. 
Toplam kac dongu oldugunu gormek icinde counter a saydirdik.

*/
var counter =0;
var stop =20;
function islem1(stoppage){
 if(stoppage<=counter){
     return 0;
 } else{
    islem2(counter++);
 }  
}function islem2(counter){
console.log(counter + " . Dongu");
islem1(stop);
}
//islem1(stop);
for( var sayac =0; sayac<stop; sayac++){
    console.log(sayac+ ". Dongu");
}