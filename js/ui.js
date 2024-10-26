import { elements } from "./helpers.js";
//ekrana gönderlen müzikleri aktarır
export const renderSearchMusic = (songs) => {
    elements.list.innerHTML = "";
    songs.forEach((song) => {
        console.log(song);
    const div = document.createElement("div");
        

        // kart datasına kart elemanına bazı verileri ekledik
    div.dataset.url = song.hub.actions.pop().uri;
    console.log(song);
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;
    div.className = "card";
    console.log(div);

    div.innerHTML = `
    
    <figure>
        <img src="${song.images.coverart}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
        <h4>${song.subtitle}</h4>
        <h4>${song.title.slice(0, 15) + "..."}</h4>

    `;
    elements.list.appendChild(div);
    });
};
//başlıgı aldığı parametreye göre günceller
export const updateTitle = (message) => {
elements.title.innerText = message; //inner genelde h ve p text contenet buton
};
//popüler müzikleri erana yazdrır
export const renderSongs = (songs) => {
    elements.list.innerHTML = "";// map döndukten sonra dizi döndürür for each döndurmez
songs.forEach((song) => {
   const div =  document.createElement("div") 
   div.dataset.url = song.preview_url;
   div.dataset.title = song.name;
   div.dataset.img = song.album.images[1].url;
   
   div.className = "card";
   div.innerHTML = `
    <figure>
        <img 
        src="${song.album.images[1].url}" 
        alt=""
        />
        <div class="play">
            <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.album.artists[0].name}</h4>
    <h4>${song.name.slice(0,15) +"..."}</h4>
   
    `;
   elements.list.appendChild(div);
    



});
};
//playıng info kısmına resmi ve title ı aktrdk
export const renderPlayingInfo = (song) => {
console.log(song);
console.log(elements.playingInfo);
elements.playingInfo.innerHTML = `

<img 
  src="${song.img}" 
  class="animate" 
  id="info-img" 
  alt=""
/>
<div>
    <p>şu an oynatılıyor...</p>
    <h3>${song.title}</h3>
</div>
`
} 