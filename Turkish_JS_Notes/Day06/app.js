//getElementById()
const paragraf = document.getElementById("par");
paragraf.style.backgroundColor="black";
paragraf.style.color="white";
paragraf.style.fontSize="15px";

const button = document.getElementById("btn");
button.style.width="100px";
button.style.height="30px";
button.style.backgroundColor="black";
button.style.color="yellow";
button.style.fontSize="18px";
button.innerHTML = "ARA"; 

//getElementByTagName()
const resim = document.getElementsByTagName("img");
resim[0].style.width = "150px";
resim[0].style.height="200px";
resim[1].style.border="3px solid red";

//getElementByClassName()
const h1 = document.getElementsByClassName("h1");
h1[0].style.color="red";
h1[0].style.textAlign ="center";

