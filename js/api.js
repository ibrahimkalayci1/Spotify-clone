import { renderSearchMusic, renderSongs } from "./ui.js";

//inputa girilen veriye göre aratacağımız api nim keyi
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0d3510bb57msha248fbede81a5e0p17028fjsn0730b4798126',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};


//popüler müzikleri getireceğimiz api key
const optionsTop = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0d3510bb57msha248fbede81a5e0p17028fjsn0730b4798126',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

export class API {  //obje yapısı değişkenlerimizi tuttugumz yapı değişkenleri ve metodları bir arada tutuyrz
    constructor(){
        this.songs = [];
    }


    //inputa girilen veriye göre api den cevabı getirir
   async searcMusic(query){
    try{
        const res = await fetch(
            `https://shazam.p.rapidapi.com/search?term=${query}=&locale=tr-TR&limit=5`, 
            options
            );
        const data = await res.json();
        let newData = data.tracks.hits;
        newData =  newData.map((song) => ({... song.track})); //dizinin içindekini yaydı .ÖNEMLİ
        this.songs = newData
        // ekrana api den gelen her bir şarkıyı yazdırcgmz metod
    
            renderSearchMusic(this.songs); 
    } 
    
    catch(err){
        console.log(err)
    }
   
   }// metod ile fonksiyon farkı fonksiyn başına function yazyrz java içinde , metod ise apı içinde fonksiyn ile aynı amaç


 async topPopular(){
    const url = 
    'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    try {
            //api ye fetch isteği at
        const response = await fetch(url,optionsTop)
   //veriyi json formatına çevir
 const result = await response.json();
        // gelen cvabı song dizisine aktar
 this.songs = result.tracks;
 renderSongs(this.songs);
    } catch (error) {
        console.log(error)
    }

}


}