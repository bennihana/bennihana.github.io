var audio = new Audio('resources/Music/hothotlava.m4a');
var soundFX = new Audio('resources/Sounds/ForwardText.m4a');
function stop() {
	audio.pause();
	audio.currentTime = 0;
}
function audio1() {
	var temp = audio.currentTime;
  	audio.pause();
  	audio = new Audio('resources/Music/hothotlava.m4a');
	audio.currentTime = temp;
	audio.loop = true;
 	audio.play();
}
function audio2() {
	var temp = audio.currentTime;
  	audio.pause();
  	audio = new Audio('resources/Music/dripdropdrop.m4a');
	audio.currentTime = temp;
	audio.loop = true;
     	audio.play();
}
function audio3() {
	var temp = audio.currentTime;
  	audio.pause();
  	audio = new Audio('resources/Music/citybigcity.m4a');
	audio.currentTime = temp;
	audio.loop = true;
     	audio.play();
}
function audio4() {
	var temp = audio.currentTime;
  	audio.pause();
  	audio = new Audio('resources/Music/snowsnowsnow.m4a');
	audio.currentTime = temp;
	audio.loop = true;
     	audio.play();
}
function audio5() {
	var temp = audio.currentTime;
  	audio.pause();
  	audio = new Audio('resources/Music/thinkthinkthink.m4a');
	audio.currentTime = temp;
	audio.loop = true;
     	audio.play();
}
function audio_txt() {
	soundFX = new Audio('resources/Sounds/ForwardText.m4a');
	soundFX.loop = false;
	soundFX.currentTime = 0.15;
	soundFX.play();
}
function audio_buy() {
	soundFX = new Audio('resources/Sounds/Buying.m4a');
	soundFX.loop = false;
	soundFX.currentTime = 0.15;
	soundFX.play();
}
function audio_hit() {
	soundFX = new Audio('resources/Sounds/Hitting.m4a');
	soundFX.loop = false;
	soundFX.currentTime = 0.15;
	soundFX.play();
}