/*GLOBALS*/

var interval = 60;
var shotsdrunk = get_shots_drunk();
var playing = false;

var div;
var shotdiv;
var seconds_span;
var sound;
var star_1;
var star_2;
var seconds = get_seconds();
var thisshot = 0;
var html5 = true;
var flashing = false;

/*START THE GAME*/

function get_shots_drunk() {
	if(window.location.hash) {
		var shotsdrunk = window.location.hash.substr(1);
		shotsdrunk = parseInt(shotsdrunk);
		shotsdrunk = shotsdrunk - 1;
	} else {
		var shotsdrunk = 0;
	}
	return shotsdrunk;
}

function get_seconds() {
	if(window.location.hash) {
		var seconds = 5;
	} else {
		var seconds = interval;
	}
	return seconds;
}

function startgame() {
	playing = true;
	div = document.getElementById('intro_screen');
	div.style.top = '99999px';
}


/*EVERY SECOND*/

setInterval(function(){tick()},1000);

function tick() {
	if (playing) {
		seconds = seconds - 1;
		document.getElementById('seconds').innerHTML = pad2(seconds);
		if (seconds == 4) {
			playsound("tick");
		}
		if (seconds < 5 && seconds > 0) {
			seconds_span = document.getElementById('seconds');
			seconds_span.style.color = "#FF0000";
		} else {
			seconds_span = document.getElementById('seconds');
			seconds_span.style.color = "#000000";
		}

/*EVERY MINUTE*/
		if (seconds == 0) {
			restart();
			milestone();
		}
	}
}

function restart() {
	shotsdrunk = shotsdrunk + 1;
	thisshot = shotsdrunk;
	document.getElementById('shots_drunk_number').innerHTML = shotsdrunk;
	seconds = interval;
}

function milestone() {
	switch(thisshot) {
		case 10:
			flash_special(5);
			break;
		case 20:
			flash_special(4);
			break;
		case 25:
			flash_special(7);
			break;
		case 30:
			flash_special(7);
			break;
		case 40:
			flash_special(10);
			break;
		case 50:
			flash_special_50(13);
			break;
		case 60:
			flash_special(12);
			break;
		case 70:
			flash_special(5);
			break;
		case 75:
			flash_special(7);
			break;
		case 80:
			flash_special(7);
			break;
		case 90:
			flash_special(12);
			break;
		case 100:
			flash_special(120);
			playing = false;
			break;
		default:
			flash_normal();
			break;
	}
}

function flash_special(seconds) {
	flashing = true;
	playsound(thisshot);
	i = seconds*1000;
	id = "screen_" + thisshot;
	div = document.getElementById(id);
	div.style.top = '-7px';
	setTimeout(function(){unflash()},i);
	if (thisshot != 100 && thisshot != 75 && thisshot != 25) {karl_subs(thisshot);}
}

function flash_special_50(seconds) {
	setTimeout(function(){karlappears()},8500);
	playsound(thisshot);
	i = seconds*1000;
	id = "screen_" + thisshot;
	div = document.getElementById(id);
	div.style.top = '-7px';
	setTimeout(function(){unflash()},i);
	karl_subs(thisshot);
}
	
function flash_normal() {
	flashing = true;
	playsound("shot");
	shotdiv = document.getElementById("shot_screen");
	shotdiv.style.top = '-7px';
	setTimeout(function(){unflash()},1500);
}

function unflash() {
	div.style.top = '99999px';
	shotdiv.style.top = '99999px';
	flashing = false;
}

function karlappears() {
	var karldiv = document.getElementById('karl50');
	karldiv.style.marginBottom = '20px';
	var karlcaption = document.getElementById('caption_50');
	karlcaption.style.marginBottom = '50px';
}

/*OTHER HAPPENINGS*/
setInterval(function(){change_colour()},50);
function change_colour() {
	if(flashing) {
		var shot_screen_colour = document.getElementById('shot_screen_colour');
		var screen_colour_25 = document.getElementById('screen_colour_25');
		var screen_colour_75 = document.getElementById('screen_colour_75');
		var screen_colour_100 = document.getElementById('screen_colour_100');
		var j = Math.floor(Math.random() * 4) + 1;
		switch(j) {
			case 1:
				shot_screen_colour.style.backgroundColor = '#00FFFF';
				screen_colour_25.style.backgroundColor = '#00FFFF';
				screen_colour_75.style.backgroundColor = '#00FFFF';
				screen_colour_100.style.backgroundColor = '#00FFFF';
				break;
			case 2:
				shot_screen_colour.style.backgroundColor = '#7CFC00';
				screen_colour_25.style.backgroundColor = '#7CFC00';
				screen_colour_75.style.backgroundColor = '#7CFC00';
				screen_colour_100.style.backgroundColor = '#7CFC00';
				break;
			case 3:
				shot_screen_colour.style.backgroundColor = '#FFFF00';
				screen_colour_25.style.backgroundColor = '#FFFF00';
				screen_colour_75.style.backgroundColor = '#FFFF00';
				screen_colour_100.style.backgroundColor = '#FFFF00';
				break;
			case 4:
				shot_screen_colour.style.backgroundColor = '#FF4500';
				screen_colour_25.style.backgroundColor = '#FF4500';
				screen_colour_75.style.backgroundColor = '#FF4500';
				screen_colour_100.style.backgroundColor = '#FF4500';
				break;
		}
	}
}

var star_switch = true;
setInterval(function(){stars()},500);

function stars() {
	star_switch = !star_switch;
	star_1 = document.getElementById('star_1');
	star_2 = document.getElementById('star_2');
	
	if (star_switch) {
		star_1.style.marginTop = "190px";
		star_2.style.marginTop = "350px";
	} else {
		star_1.style.marginTop = "350px";
		star_2.style.marginTop = "190px";
	}
}

function pad2(number) {
     return (number < 10 ? '0' : '') + number  
}

function karl_subs(thisshot) {
	var phrase_arr = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array());
	switch(thisshot) {
	case 10:
		phrase_arr[0][0] = 0;
		phrase_arr[1][0] = 100;
		phrase_arr[2][0] = 150;
		phrase_arr[3][0] = 900;
		phrase_arr[4][0] = 1100;
		phrase_arr[5][0] = 1150;
		phrase_arr[6][0] = 1500;
		phrase_arr[7][0] = 3250;
		phrase_arr[8][0] = 3500;
		phrase_arr[9][0] = 3900;
		phrase_arr[10][0] = 4000;
		phrase_arr[0][1] = "On ";
		phrase_arr[1][1] = "a ";
		phrase_arr[2][1] = "seriously, ";
		phrase_arr[3][1] = "on ";
		phrase_arr[4][1] = "a ";
		phrase_arr[5][1] = "serious ";
		phrase_arr[6][1] = "note, ";
		phrase_arr[7][1] = "any ";
		phrase_arr[8][1] = "hole's ";
		phrase_arr[9][1] = "a ";
		phrase_arr[10][1] = "goal";
		break;
	case 20:
		phrase_arr[0][0] = 0;
		phrase_arr[1][0] = 400;
		phrase_arr[2][0] = 700;
		phrase_arr[3][0] = 1300;
		phrase_arr[4][0] = 1600;
		phrase_arr[5][0] = 2300;
		phrase_arr[6][0] = 2850;
		phrase_arr[7][0] = 3250;
		phrase_arr[8][0] = 3400;
		phrase_arr[9][0] = 3550;
		phrase_arr[0][1] = "I'm ";
		phrase_arr[1][1] = "trying to ";
		phrase_arr[2][1] = "riverside ";
		phrase_arr[3][1] = "it ";
		phrase_arr[4][1] = "man, ";
		phrase_arr[5][1] = "going ";
		phrase_arr[6][1] = "get ";
		phrase_arr[7][1] = "on ";
		phrase_arr[8][1] = "with ";
		phrase_arr[9][1] = "it";
		break;
	case 30:
		phrase_arr[0][0] = 0;
		phrase_arr[1][0] = 900;
		phrase_arr[2][0] = 1000;
		phrase_arr[3][0] = 1400;
		phrase_arr[4][0] = 1700;
		phrase_arr[5][0] = 2000;
		phrase_arr[6][0] = 2200;
		phrase_arr[7][0] = 3500;
		phrase_arr[8][0] = 5650;
		phrase_arr[0][1] = "Seriously, ";
		phrase_arr[1][1] = "you're ";
		phrase_arr[2][1] = "either ";
		phrase_arr[3][1] = "one ";
		phrase_arr[4][1] = "way, ";
		phrase_arr[5][1] = "or ";
		phrase_arr[6][1] = "its, ";
		phrase_arr[7][1] = "its, ";
		phrase_arr[8][1] = "no";
		break;
	case 40:
		phrase_arr[0][0] = 150;
		phrase_arr[1][0] = 300;
		phrase_arr[2][0] = 350;
		phrase_arr[3][0] = 650;
		phrase_arr[4][0] = 850;
		phrase_arr[5][0] = 1200;
		phrase_arr[6][0] = 2200;
		phrase_arr[7][0] = 2700;
		phrase_arr[8][0] = 3000;
		phrase_arr[9][0] = 3300;
		phrase_arr[10][0] = 4600;
		phrase_arr[11][0] = 5500;
		phrase_arr[12][0] = 6200;
		phrase_arr[13][0] = 6400;
		phrase_arr[14][0] = 6700;
		phrase_arr[15][0] = 6900;
		phrase_arr[16][0] = 7600;
		phrase_arr[17][0] = 8100;
		phrase_arr[18][0] = 8300;
		phrase_arr[19][0] = 8600;
		phrase_arr[20][0] = 8700;
		phrase_arr[21][0] = 8900;
		phrase_arr[22][0] = 9000;
		phrase_arr[23][0] = 9350;
		phrase_arr[0][1] = "To ";
		phrase_arr[1][1] = "be ";
		phrase_arr[2][1] = "honest, ";
		phrase_arr[3][1] = "I've ";
		phrase_arr[4][1] = "watched ";
		phrase_arr[5][1] = "Hollyoaks, ";
		phrase_arr[6][1] = "and ";
		phrase_arr[7][1] = "for ";
		phrase_arr[8][1] = "one ";
		phrase_arr[9][1] = "episode ";
		phrase_arr[10][1] = "[Argentine footballer] ";
		phrase_arr[11][1] = "has ";
		phrase_arr[12][1] = "turned ";
		phrase_arr[13][1] = "around ";
		phrase_arr[14][1] = "and ";
		phrase_arr[15][1] = "said ";
		phrase_arr[16][1] = "\"Yeah, ";
		phrase_arr[17][1] = "I ";
		phrase_arr[18][1] = "fancy ";
		phrase_arr[19][1] = "a ";
		phrase_arr[20][1] = "bit ";
		phrase_arr[21][1] = "of ";
		phrase_arr[22][1] = "c*** ";
		phrase_arr[23][1] = "tonight.\"";
		break;
	case 50:
		phrase_arr[0][0] = 8500;
		phrase_arr[1][0] = 8600;
		phrase_arr[2][0] = 8900;
		phrase_arr[3][0] = 9500;
		phrase_arr[4][0] = 9900;
		phrase_arr[5][0] = 10400;
		phrase_arr[6][0] = 10600;
		phrase_arr[7][0] = 11000;
		phrase_arr[8][0] = 11700;
		phrase_arr[9][0] = 12100;
		phrase_arr[0][1] = "I would ";
		phrase_arr[1][1] = "be ";
		phrase_arr[2][1] = "s**t ";
		phrase_arr[3][1] = "b******s ";
		phrase_arr[4][1] = "if ";
		phrase_arr[5][1] = "I ";
		phrase_arr[6][1] = "(??) ";
		phrase_arr[7][1] = "(??) ";
		phrase_arr[8][1] = "this ";
		phrase_arr[9][1] = "(??)";
		break;
	case 60:
		phrase_arr[0][0] = 0;
		phrase_arr[1][0] = 300;
		phrase_arr[2][0] = 350;
		phrase_arr[3][0] = 400;
		phrase_arr[4][0] = 600;
		phrase_arr[5][0] = 1200;
		phrase_arr[6][0] = 1600;
		phrase_arr[7][0] = 2000;
		phrase_arr[8][0] = 2100;
		phrase_arr[9][0] = 2200;
		phrase_arr[10][0] = 2800;
		phrase_arr[11][0] = 3000;
		phrase_arr[12][0] = 3500;
		phrase_arr[13][0] = 3600;
		phrase_arr[14][0] = 4000;
		phrase_arr[15][0] = 4200;
		phrase_arr[16][0] = 4800;
		phrase_arr[17][0] = 4900;
		phrase_arr[18][0] = 5100;
		phrase_arr[19][0] = 5300;
		phrase_arr[20][0] = 5600;
		phrase_arr[21][0] = 6100;
		phrase_arr[22][0] = 7600;
		phrase_arr[23][0] = 7800;
		phrase_arr[24][0] = 8100;
		phrase_arr[25][0] = 8400;
		phrase_arr[26][0] = 10100;
		phrase_arr[27][0] = 10300;
		phrase_arr[0][1] = "I'm ";
		phrase_arr[1][1] = "going ";
		phrase_arr[2][1] = "to ";
		phrase_arr[3][1] = "go ";
		phrase_arr[4][1] = "sideways ";
		phrase_arr[5][1] = "and ";
		phrase_arr[6][1] = "then ";
		phrase_arr[7][1] = "(??) ";
		phrase_arr[8][1] = "(??) ";
		phrase_arr[9][1] = "sideways ";
		phrase_arr[10][1] = "and ";
		phrase_arr[11][1] = "(??) ";
		phrase_arr[12][1] = "(??) ";
		phrase_arr[13][1] = "and ";
		phrase_arr[14][1] = "the ";
		phrase_arr[15][1] = "sideways ";
		phrase_arr[16][1] = "and ";
		phrase_arr[17][1] = "(??) ";
		phrase_arr[18][1] = "up ";
		phrase_arr[19][1] = "your ";
		phrase_arr[20][1] = "f***king ";
		phrase_arr[21][1] = "(????)";
		phrase_arr[22][1] = "<br />The ";
		phrase_arr[23][1] = "Rock ";
		phrase_arr[24][1] = "says ";
		phrase_arr[25][1] = "that... ";
		phrase_arr[26][1] = "hey ";
		phrase_arr[27][1] = "baby";
		break;
	case 70:
		phrase_arr[0][0] = 200;
		phrase_arr[1][0] = 400;
		phrase_arr[2][0] = 600;
		phrase_arr[3][0] = 700;
		phrase_arr[4][0] = 800;
		phrase_arr[5][0] = 1100;
		phrase_arr[6][0] = 1500;
		phrase_arr[7][0] = 1550;
		phrase_arr[8][0] = 1800;
		phrase_arr[9][0] = 2100;
		phrase_arr[10][0] = 2400;
		phrase_arr[11][0] = 2700;
		phrase_arr[12][0] = 3500;
		phrase_arr[13][0] = 3800;
		phrase_arr[0][1] = "To ";
		phrase_arr[1][1] = "be ";
		phrase_arr[2][1] = "fair ";
		phrase_arr[3][1] = "about ";
		phrase_arr[4][1] = "the ";
		phrase_arr[5][1] = "poster ";
		phrase_arr[6][1] = "with ";
		phrase_arr[7][1] = "the ";
		phrase_arr[8][1] = "c**k ";
		phrase_arr[9][1] = "on ";
		phrase_arr[10][1] = "its ";
		phrase_arr[11][1] = "pretty, ";
		phrase_arr[12][1] = "pretty ";
		phrase_arr[13][1] = "safe";
		break;
	case 80:
		phrase_arr[0][0] = 400;
		phrase_arr[1][0] = 600;
		phrase_arr[2][0] = 800;
		phrase_arr[3][0] = 1050;
		phrase_arr[4][0] = 1700;
		phrase_arr[5][0] = 1900;
		phrase_arr[6][0] = 2000;
		phrase_arr[7][0] = 2200;
		phrase_arr[8][0] = 2400;
		phrase_arr[9][0] = 3100;
		phrase_arr[10][0] = 3400;
		phrase_arr[11][0] = 3600;
		phrase_arr[12][0] = 3800;
		phrase_arr[13][0] = 4600;
		phrase_arr[14][0] = 6000;
		phrase_arr[15][0] = 6100;
		phrase_arr[16][0] = 6200;
		phrase_arr[17][0] = 6400;
		phrase_arr[0][1] = "And ";
		phrase_arr[1][1] = "I'm ";
		phrase_arr[2][1] = "not ";
		phrase_arr[3][1] = "being, ";
		phrase_arr[4][1] = "I'm ";
		phrase_arr[5][1] = "not ";
		phrase_arr[6][1] = "not ";
		phrase_arr[7][1] = "being ";
		phrase_arr[8][1] = "dangerous, ";
		phrase_arr[9][1] = "I'm ";
		phrase_arr[10][1] = "not, ";
		phrase_arr[11][1] = "I'm ";
		phrase_arr[12][1] = "not ";
		phrase_arr[13][1] = "(??????)";
		phrase_arr[14][1] = "<br />I'm ";
		phrase_arr[15][1] = "not ";
		phrase_arr[16][1] = "being ";
		phrase_arr[17][1] = "dangerous";
		break;
	case 90:
		phrase_arr[0][0] = 200;
		phrase_arr[1][0] = 300;
		phrase_arr[2][0] = 400;
		phrase_arr[3][0] = 550;
		phrase_arr[4][0] = 1300;
		phrase_arr[5][0] = 1600;
		phrase_arr[6][0] = 1800;
		phrase_arr[7][0] = 3000;
		phrase_arr[8][0] = 3800;
		phrase_arr[9][0] = 4400;
		phrase_arr[10][0] = 5800;
		phrase_arr[11][0] = 9500;
		phrase_arr[0][1] = "Can ";
		phrase_arr[1][1] = "I ";
		phrase_arr[2][1] = "just ";
		phrase_arr[3][1] = "say ";
		phrase_arr[4][1] = "that ";
		phrase_arr[5][1] = "one ";
		phrase_arr[6][1] = "thing... ";
		phrase_arr[7][1] = "<br />Riverside ";
		phrase_arr[8][1] = "Mother ";
		phrase_arr[9][1] = "F***a, ";
		phrase_arr[10][1] = "<br />[sings Sidney Samson],";
		phrase_arr[11][1] = "<br />(????)";
		break;
	default:
		break;
	}
	
	for(i=0; i<phrase_arr.length; i++) {
		word = phrase_arr[i][1];
		stamp = phrase_arr[i][0];
		if(phrase_arr[i][1]) {
			add_word(thisshot,stamp,word);
		}
	}
}

function add_word(thisshot,stamp,word) {
	var thisword = word;
	setTimeout(function(){add_word_function(thisshot,thisword)},stamp);
}
	function add_word_function(thisshot,thisword) {
		var subs = "subs_" + thisshot;
		document.getElementById(subs).innerHTML = document.getElementById(subs).innerHTML + thisword;
	}
		
		
// Sound		
try {
	var snd01 = new Audio('sounds/10.mp3');
	var snd02 = new Audio('sounds/20.mp3');
	var snd03 = new Audio('sounds/25.mp3');
	var snd04 = new Audio('sounds/30.mp3');
	var snd05 = new Audio('sounds/40.mp3');
	var snd06 = new Audio('sounds/50.mp3');
	var snd07 = new Audio('sounds/60.mp3');
	var snd08 = new Audio('sounds/70.mp3');
	var snd09 = new Audio('sounds/75.mp3');
	var snd10 = new Audio('sounds/80.mp3');
	var snd11 = new Audio('sounds/90.mp3');
	var snd12 = new Audio('sounds/100.mp3');
	var snd13 = new Audio('sounds/shot.mp3');
	var snd14 = new Audio('sounds/tick.mp3');
	var snd15 = new Audio('sounds/10.ogg');
	var snd16 = new Audio('sounds/20.ogg');
	var snd17 = new Audio('sounds/25.ogg');
	var snd18 = new Audio('sounds/30.ogg');
	var snd19 = new Audio('sounds/40.ogg');
	var snd20 = new Audio('sounds/50.ogg');
	var snd21 = new Audio('sounds/60.ogg');
	var snd22 = new Audio('sounds/70.ogg');
	var snd23 = new Audio('sounds/75.ogg');
	var snd24 = new Audio('sounds/80.ogg');
	var snd25 = new Audio('sounds/90.ogg');
	var snd26 = new Audio('sounds/100.ogg');
	var snd27 = new Audio('sounds/shot.ogg');
	var snd28 = new Audio('sounds/tick.ogg');
} catch(err) {
	html5 = false;
}
function playsound(thisshot) {
	var format = "mp3";
	var browser = BrowserDetect.browser;
	var wavfile = "";
	
	//work out if oggs are needed	
	if (browser == "Opera") {
		format = "ogg";
	}
	if (browser == "Firefox") {
		format = "ogg";
	}	
	switch(thisshot) {
		case "shot":
			wavfile = "sounds/shot."+format;
			break;
		case 25:
			wavfile = "sounds/25."+format;
			break;
		case 50:
			wavfile = "sounds/50."+format;
			break;
		case 100:
			wavfile = "sounds/100."+format;
			break;
		case "tick":
			wavfile = "sounds/tick."+format;
			break;			
		default:
			wavfile = "sounds/" + thisshot + "."+format;
			break;
	}
	//alert("the html5 status is " + html5 + " and the format is " + format);
	if(html5){
		sound = new Audio(wavfile);
		sound.play();
	} else {
		document.getElementById("sound_element").innerHTML="<embed src='"+wavfile+"' hidden=true autostart=true loop=false>";
	}
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
