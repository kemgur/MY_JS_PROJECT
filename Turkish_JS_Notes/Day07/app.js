
function myFunction(){
const h1 = document.createElement("p");
const text = document.createTextNode("Programlama Dilleri");
h1.appendChild(text);
document.body.appendChild(h1);
h1.style.marginTop="10px";
h1.style.color="red";
};

//! appendChild(), createElement() ve createTextNode() u ogrendik;

//HTML'de butonun altina bir h1 olusturduk.
const sonBtn = document.querySelector(".btn");//Ekleyecegimiz yeri belirledik
const h1 = document.createElement("h1");
const text = document.createTextNode("Program languages.");
h1.appendChild(text);
sonBtn.after(h1);
h1.style.marginTop="20px";
h1.style.color="red";
h1.style.textAlign="left";
h1.style.marginLeft="20px";

//! after(),onclick  'u ogrendik

document.querySelector(".ekle").onclick = function(){
// ekleme yapilacak listeyi al
const liste = document.querySelector(".liste");
//input elemamnina girilen yeni satirin degerini al.
const satir = document.querySelector(".dil").value;
//yeni girilen satiri saklamak icin bir li olustur
const yeniLi = document.createElement("li");
//yeni li icin text node olustur
const textNode = document.createTextNode(satir);
//olusturulan yeniNode u li ye bagla
yeniLi.appendChild(textNode);
//yeni olusturulan satiri var olan listeye (ul) baglayalim.
liste.appendChild(yeniLi);
}

//sil butonu onclick
document.querySelector(".sil").onclick = function(){
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
}

//! onclick , removeChild() , lastElementChild,firstElementChild 'i ogrendik


