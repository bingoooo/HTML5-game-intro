var defaultPlaylist = [
	"02 恋愛♥ライダー.m4a",
	"10 Cliffs of Dover.m4a",
	"10 ロッタラ ロッタラ.m4a",
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
} else {
	var request = new XMLHttpRequest;
	request.open('GET', './playlist.json', false);
	request.send(null);
	if (request.status == 200) {
		dump(request);
	}
}
// playlist = defaultPlaylist;
var current = 0;
var audio;
var title;
var notify;

window.onload = function(){
	notify = Notification.permission;
	console.log('Notifications :', notify);
	if(notify !== "granted"){
		Notification.requestPermission().then(function(permission){
			notify = permission;
			console.log('Notify ?', notify);
		});
	}
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
			}
			if (e.keyCode === 80) {
				audio.play();
			}
			if (e.keyCode === 78) {
				Next(audio);
			}
			if (e.keyCode === 66) {
				Back(audio);
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
		current++;
	} else current = 0;
	console.log('Next Track');
	audio.src = "audio/" + playlist[current];
	audio.play();
	Display();
}

var Back = function(){
	if (current > 0) {
		current--;
	} else current = playlist.length -1;
	console.log('Previous Track');
	audio.src = "audio/" + playlist[current];
	audio.play();
	Display();
}

var Display = function(){
	document.getElementById('title').innerHTML = playlist[current];
	document.getElementById('onglet').innerHTML = playlist[current] + "HTML5 Game in Dev";
	Notify(playlist[current]);
}

var Notify = function (title) {
	var permission = Notification.permission;
	if(!Notification){
		console.log('Desktop notifications not available in this browser, try chromium');
		return;
	}
	if(permission === "granted") {
		var notification = new Notification('Bingo Player', {
			icon: './favicon.png',
			body: title
		});
	}
	setTimeout(function(){
		notification.close();
	}, 10000);
}