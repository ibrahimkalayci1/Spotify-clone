import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";
import { renderPlayingInfo, updateTitle } from "./js/ui.js";

const api = new API();

//form gönderildiği anda api ye istek at ve gelen cevabı ekrana yazdır
elements.form.addEventListener("submit", (e) =>{
    e.preventDefault() // form gönderldiği anda sayfanın yenilenmesinin engeller
 const query = e.target[0].value; // inputun içerisindeki değere ulaştık

if(!query){
    alert("lütfen bir şeyler yazınız");
    return; // fonksiyona girilen değer boş ise burda durdurdu fonksiyonu
}


updateTitle(`${query} için sonuçlar`);
api.searcMusic(query);

});
// sayfa yüklendiği anda api ye istek atıp popüler müzikleri getir
document.addEventListener("DOMContentLoaded", async () => { 
    await api.topPopular()
});

const playMusic = (url) => {
    //müziğin urlsini html e aktarma
    elements.audioSource.src=url
    //audio elementinin müziği yuklemesini sagladk
    elements.audio.load();
    
    elements.audio.play();    
    
}
//listede tıklamalarda çalışır
const handleClick = (e) => {
    console.log("tiklanildi");
    if(e.target.id === "play-btn");{

      const parent = e.target.closest(".card");// parent element yerine kullanlr
        renderPlayingInfo(parent.dataset);
        console.log(parent.dataset);
        //müziği çalar
        playMusic(parent.dataset.url);
    }

};

//liste alanındaki tıklamaları izler
document.addEventListener("click", handleClick);
//fotoyu döndürür
const animatePhoto = () => {
   const img = document.querySelector(".info img");
   
   img.className = "animate";
}
//döneyi durdurur
const stopAnimation = () => {
    const img = document.querySelector(".info img");
    img.classList.remove("animate");
};
//müziği çalma ve durdurma olaylarnı izler
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation)