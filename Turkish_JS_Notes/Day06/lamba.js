document.querySelector(".on").onclick =  function(){
    document.querySelector(".resim").src = "./imgBulb/bulb on.jpeg";
};
document.querySelector(".off").onclick =  function(){
    document.querySelector(".resim").src = "./imgBulb/bulb off.jpeg";
};
//Resmin uzerine her geldiginde bulb_on resmini goster
document.querySelector(".resim").addEventListener("mouseover", ()=>{
    document.querySelector(".resim").src = "./imgBulb/bulb on.jpeg";
} )

//Resmin uzerinden ayrildiginda  bulb_off resmini goster
document.querySelector(".resim").addEventListener("mouseout",function(){
    document.querySelector(".resim").src = "./imgBulb/bulb off.jpeg"; 
})

// Klavyeden her tusa basildiginda bu fonksion calisacak
document.querySelector(".textbox").onkeyup =function(){
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if(checkbox.checked==true){
       textbox.value = textbox.value.toUpperCase();

    }else{
        
    }
}