
//setInterval() methodu belirli saniyelerde tekrar edilecek
//olan kodlari calistirir.
//setInterval() ile saati her saniye guncellenme islevi katilir

var date = new Date();
var hours,minutes, seconds;

function changeFormat(unit){
    if(unit<=9){
        return "0"+unit
    }else{
        return unit
    }
}
setInterval(function(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hours =changeFormat(hours);
    minutes=changeFormat(minutes);
    seconds=changeFormat(seconds);
    console.log(hours+":"+minutes+":"+seconds);
    function change_time(hours,minutes,seconds){
        
    }
},1000);



