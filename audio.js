var defaultPlaylist = [
	"02 恋愛♥ライダー.m4a",
	"10 Cliffs of Dover.m4a",
	"10 ロッタラ ロッタラ.m4a",
	"Far from love.mp3",
	"Globalization.mp3",
	"Journey.mp3",
	"Leavin.mp3",
	"Stuck at home.mp3",
	"Static space.mp3",
	"Alexand.mp3",
	"BoyceAvenue.mp3",
	"Can You Dig It  Thee Emergency.MP3",
	"Colourslide.mp3",
	"David Newbould  Goldmines.MP3",
	"InvisibleMan.mp3",
	"Lansdowne.mp3",
	"Leavin.mp3",
	"LondonEgg.mp3",
	"MariavilleCattleCompanyBand.mp3",
	"Tantric Cycle.mp3",
	"TheRefinedGentlemen&Gezele.mp3",
	"Thee Emergency  Total Energy.MP3",
	"Trailer77.mp3",
];
var playlist = [];
if(self.fetch){
	fetch('./playlist.json').then(function(datas){
		datas.json().then(function(json){
			playlist = json.list;
			console.log(playlist);
		})
	});
} else playlist = defaultPlaylist;
var current = 0;
var audio;
var title;

window.onload = function(){
	setTimeout(function(){
		audio = document.getElementById('audio');
		title = document.getElementById('title');
		title.innerHTML = playlist[0];
		audio.onload = function(){
			console.log('Loading File');
		}
		audio.src = "audio/" + playlist[0];
		document.onkeydown = function (e) {
		    'use strict';
		    console.log('Key Code', e.keyCode);
		    console.log('Ended ?', audio.ended)
		    if (e.keyCode === 83) {
				audio.pause();
			} else if (e.keyCode === 80) {
				audio.play();
			} else if (e.keyCode === 78) {
				Next(audio);
			}
		}
		var autoplay = setInterval(function(){
			if (audio.ended) {
				console.log('Ended');
				Next();
			}
		}, 1000);
	}, 500);
};

var Next = function(){
	if (current < playlist.length -1) {
		current += 1;
	} else current = 0;
	console.log('Next Track');
	audio.src = "audio/" + playlist[current];
	audio.play();
	document.getElementById('title').innerHTML = playlist[current];
}