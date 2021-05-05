
var divSecond, divMinute, divHour;
divSecond = document.getElementById("second");
divMinute = document.getElementById("minute");
divHour = document.getElementById("hour");

var date = new Date();
var hours,minutes, seconds;

function changeFormat(unit){
    if(unit<=9){
        return "0"+unit
    }else{
        return unit
    }
}
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

function increase_second(seconds){
    seconds+=1;
    if(seconds>59){
        increase_minute(minutes);
        seconds=0;

    }
    return seconds;

}
function increase_minute(minutes){
    minutes+=1;
    if(minutes>59){
        hours= increase_minute(hours);
        minutes=0;
    }
    return minutes;
}
function increase_hours(hours){
    hours+=1;
    if(hour>23){
        hours=0;

    }
   
    return hours;
}
for(var counter =0; counter<seconds; counter++){ 
    divSecond.innerText +="S";
}
for(var counter1 =0; counter1<minutes; counter1++){ 
    divMinute.innerText +="M";
}
for(var counter2 =0; counter2<hours; counter2++){ 
    divHour.innerText +="H";
}

setInterval(function(){
   seconds = increase_second(seconds);
   if(seconds==0){
    divSecond.innerText +="";
    divMinute.innerText +="M";

   }
   if(minutes==0){
    divMinute.innerText +="";
    divHour.innerText +="H";

   }
   if(hours==0){
    divHour.innerText +="";

   }
   divSecond.innerText +="S";
   console.log(seconds);

},1000);
