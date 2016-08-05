<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Online timer for the Centurion drinking game. This clock will automatically beep when it's time to drink a shot. Reach 100 shots to win! Good luck!">
<meta name="keywords" content="Centurion clock timer online drinking game">
<title>DrinkingClock.com - Home of The Centurion Challenge</title>
<link rel="stylesheet" type="text/css" href="./style.css" />
<script src="script.js" type="text/javascript"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34689475-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>

<body>
	<div id="wrapper">
    	<div id="clock_graphic">
            <div id="clock" class="centre">
                <span id="seconds">60</span>
            </div>
        </div>
        <div id="panel_graphic">
            <div id="shots_drunk" class="centre">
                <span id="shots_drunk_number">0</span>
            </div>
        </div>
    </div>
    
    <div id="author"><a href="/credit.php" target="_blank" style="color:#000000";>Credits</a></div>
    
    <div id="intro_screen" class="flasher" style="top:-7px">
    	<div id="title">
        	The Centurion Challenge
        </div>
        <div id="x100" class="centre">
        </div>
        <div id="instructions">
        	Drink one shot of beer every minute for 100 minutes
        </div>
        <a href="javascript:startgame()" style="display:block;" id="play_button" class="centre">
        </a>
        <div id="disclaimer">
        	P.S. Every ten shots brings words of wisdom from the world's smartest man</div>
    </div>
    <bgsound src="sounds/tick.mp3" volume = -10000 />
	<bgsound src="sounds/shot.mp3" volume = -10000 />
	<bgsound src="sounds/10.mp3" volume = -10000 />
	<bgsound src="sounds/20.mp3" volume = -10000 />
	<bgsound src="sounds/25.mp3" volume = -10000 />
	<bgsound src="sounds/30.mp3" volume = -10000 />
	<bgsound src="sounds/40.mp3" volume = -10000 />
	<bgsound src="sounds/50.mp3" volume = -10000 />
	<bgsound src="sounds/60.mp3" volume = -10000 />
	<bgsound src="sounds/70.mp3" volume = -10000 />
	<bgsound src="sounds/75.mp3" volume = -10000 />
	<bgsound src="sounds/80.mp3" volume = -10000 />
	<bgsound src="sounds/90.mp3" volume = -10000 />
	<bgsound src="sounds/100.mp3" volume = -10000 />
	<bgsound src="sounds/tick.ogg" volume = -10000 />
	<bgsound src="sounds/shot.ogg" volume = -10000 />
	<bgsound src="sounds/10.ogg" volume = -10000 />
	<bgsound src="sounds/20.ogg" volume = -10000 />
	<bgsound src="sounds/25.ogg" volume = -10000 />
	<bgsound src="sounds/30.ogg" volume = -10000 />
	<bgsound src="sounds/40.ogg" volume = -10000 />
	<bgsound src="sounds/50.ogg" volume = -10000 />
	<bgsound src="sounds/60.ogg" volume = -10000 />
	<bgsound src="sounds/70.ogg" volume = -10000 />
	<bgsound src="sounds/75.ogg" volume = -10000 />
	<bgsound src="sounds/80.ogg" volume = -10000 />
	<bgsound src="sounds/90.ogg" volume = -10000 />
	<bgsound src="sounds/100.ogg" volume = -10000 />
    <div id="shot_screen" class="flasher">
    	<div id="shot_screen_colour" class="centre colourchanger">
            <div id="shot_sign" class="centre">
                Shot
            </div>
        </div>
    </div>
    
    <div id="screen_10" class="flasher">
    	<div id="milestone_sign_10" class="milestone_sign">
        	10
        </div>
        <div class="karl_pic">
        	<img src="images/karl_10.jpg" height="299" width="238"/>
        </div>
        <div id="caption_10" class="caption">
        	<span id="subs_10"></span>
        </div>
    </div>
    
    <div id="screen_20" class="flasher">
    	<div id="milestone_sign_20" class="milestone_sign">
        	20
        </div>
        <div class="karl_pic">
        	<img src="images/karl_20.jpg" height="299" width="238"/>
        </div>
        <div id="caption_20" class="caption">
        	<span id="subs_20"></span>
        </div>
    </div>
    
    <div id="screen_25" class="flasher">
    	<div id="screen_colour_25" class="centre colourchanger">
            <div id="sign_25" class="centre">
                25
            </div>
        </div>
    </div>
    
    <div id="screen_30" class="flasher">
    	<div id="milestone_sign_30" class="milestone_sign">
        	30
        </div>
        <div class="karl_pic">
        	<img src="images/karl_30.jpg" height="299" width="238"/>
        </div>
        <div id="caption_30" class="caption">
        	<span id="subs_30"></span>
        </div>
    </div>

    <div id="screen_40" class="flasher">
    	<div id="milestone_sign_40" class="milestone_sign">
        	40
        </div>
        <div class="karl_pic">
        	<img src="images/karl_40.jpg" height="299" width="238"/>
        </div>
        <div id="caption_40" class="caption">
        	<span id="subs_40"></span>
        </div>
    </div>

    <div id="screen_50" class="flasher">
    	<div id="milestone_sign_50" class="milestone_sign">
        	50
        </div>
        <div id="karl50" class="karl_pic" style="margin-bottom:-99999px;">
        	<img src="images/karl_50.jpg" height="299" width="238"/>
        </div>
        <div id="caption_50" class="caption" style="margin-bottom:-99999px;">
        	<span id="subs_50"></span>
        </div>
    </div>
    
    <div id="screen_60" class="flasher">
    	<div id="milestone_sign_60" class="milestone_sign">
        	60
        </div>
        <div class="karl_pic">
        	<img src="images/karl_60.jpg" height="299" width="238"/>
        </div>
        <div id="caption_60" class="caption">
        	<span id="subs_60"></span>
        </div>
    </div>
    
    <div id="screen_70" class="flasher">
    	<div id="milestone_sign_70" class="milestone_sign">
        	70
        </div>
        <div class="karl_pic">
        	<img src="images/karl_70.jpg" height="299" width="238"/>
        </div>
        <div id="caption_70" class="caption">
        	<span id="subs_70"></span>
        </div>
    </div>
    
    <div id="screen_75" class="flasher">
    	<div id="screen_colour_75" class="centre colourchanger">
            <div id="sign_75" class="centre">
                75
            </div>
        </div>
    </div>
    
    <div id="screen_80" class="flasher">
    	<div id="milestone_sign_80" class="milestone_sign">
        	80
        </div>
        <div class="karl_pic">
        	<img src="images/karl_80.jpg" height="299" width="238"/>
        </div>
        <div id="caption_80" class="caption">
        	<span id="subs_80"></span>
        </div>
    </div>
    
    <div id="screen_90" class="flasher">
    	<div id="milestone_sign_90" class="milestone_sign">
        	90
        </div>
        <div class="karl_pic">
        	<img src="images/karl_90.jpg" height="299" width="238"/>
        </div>
        <div id="caption_90" class="caption">
        	<span id="subs_90"></span>
        </div>
    </div>
    
    <div id="screen_100" class="flasher">
    	<div id="screen_colour_100" class="centre">
            <div id="sign_100" class="centre">
                Centurion
            </div>
            <div id="trophy">
            	<img src="images/trophy.png" height="402" width="205"/>
            </div>
            <div id="star_1" class="star">
            </div>
            <div id="star_2" class="star">
            </div>
        </div>
    </div>
<div id="sound_element"></div>
</body>
</html>
