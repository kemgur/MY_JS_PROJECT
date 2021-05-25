
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

//console.log(hours+":"+minutes+":"+seconds);

//Bu fonksiyonda saat, dakika ve saniye tek basamakli oldugunda yanin "0" koyar
function changeFormat(unit){
    if(unit<9){
        return "0"+unit
    }else{
        return unit
    }
}
hours =changeFormat(hours);
minutes=changeFormat(minutes);
seconds=changeFormat(seconds);
console.log(hours+":"+minutes+":"+seconds);

//setInterval() methodu belirli saniyelerde tekrar edilecek
//olan kodlari calistirir.
