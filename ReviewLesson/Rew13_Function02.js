
function rasgeleIsimveSoyisism(){
 
var isimler = ["Ali ", "Hasan ", "Omer ","Fahri "];
var soyisimler = ["Can", "Kaya", "Yilmaz", "Gulmez"];
var isim_index,soyIsim_index;

for(var num=0; num<isimler.length;num++){
 isim_index = Math.floor(Math.random()*4);
 soyIsim_index = Math.floor(Math.random()*4);
 console.log(isim_index);
console.log(isimler[isim_index] + soyisimler[soyIsim_index]);
    }
}

for(var counter =0; counter<100; counter++){
    rasgeleIsimveSoyIsim();
}




//Bu fonksiyonda array icersindeki isim ve soyisimlerden rastgele isim urettik.
//In this function, we generate a random name from the names and surnames in the array.