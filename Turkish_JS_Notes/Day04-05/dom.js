//const r = document.getElementById("r").value;

//Classlara erisim icin =>> (".Class adi")
//id'li bir html elemanina erisim icin ("#id Adi") yazilir.
//const h = document.querySelector(".h").value;

//const hacim = document.querySelector(".hacim").value;

// console.log(r);
// console.log(h);

function hesapla(){
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;
  const hacim = document.querySelector(".hacim");

   const sonuc = (Math.PI*r*r*h).toFixed(2);
   console.log()
   hacim.innerHTML= sonuc;
};
const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "blue";






