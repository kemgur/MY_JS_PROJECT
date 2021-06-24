
//Renkleri bir dizide tanimlamak icin;
const renkler= ["red","blue", "green","yellow","black","pink","purple"];

//Dizininin eleman sayisina gore rastgele bir sayi turetmek icin;
const rasgeleSayi = Math.floor(Math.random()*(renkler.length));

//Sayfanin arka planina bu secilen rasgele sayiyi aktarmak icin
document.querySelector("body").style.backgroundColor = renkler[rasgeleSayi];

//Her buton tiklandiginda degisiklik olacagi icin bir fonksion tanimlamaliyiz
document.querySelector(".renk").addEventListener("click", ()=>{
    const renkler= ["red","blue", "green","yellow","black","pink","purple"];
    const rasgeleSayi = Math.floor(Math.random()*(renkler.length));
    document.querySelector("body").style.backgroundColor = renkler[rasgeleSayi];
    document.querySelector(".renk-yazi").innerHTML =renkler[rasgeleSayi];
    document.querySelector("h1").style.color=renkler[rasgeleSayi];
});