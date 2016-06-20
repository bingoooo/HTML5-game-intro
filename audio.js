var playlist = [
	"Far from love.mp3",
	"Globalization.mp3",
	"Journey.mp3",
	"Leavin.mp3",
	"Stuck at home.mp3",
	"Static space.mp3"
];
var current = 0;
var audio;
var title;

window.onload = function(){
	audio = document.getElementById('audio');
	title = document.getElementById('title');
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
};

var Next = function(){
	if (current < playlist.length -1) {
		current += 1;
	} else current = 0;
	console.log('Next Track');
	audio.src = "audio/" + playlist[current];
	audio.play();
}