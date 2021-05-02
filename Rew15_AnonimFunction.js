//Anonim Fonsiyonlarda isim tanimlanmiyor.
//Anonim Fonsiyon icersindeki yazli olan kodu isim vermeden calistirir.
//var function_name = function (x,y){//seklinde tanimlanabilir.

/*
var toplam = function(x,y){
    return x+y;
}(5,6);
console.log(toplam);//11
*/

setInterval(function(){//icerisine bir fonksiyon alir ve onu calistirir.
    console.log("1 saniye gecti");
},1000)//Saniyenin 10.000 de biri ile calistirir.

  var toplam =function(x,y){
      return x+y;
  };
  var toplam1 = toplam;
  console.log(toplam1(10,11));//21