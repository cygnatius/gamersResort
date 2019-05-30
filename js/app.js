var x;

function countdown(eventTime) {
    var now = new Date();

    var currentTime = now.getTime();
    //var eventTime = currentTime + 0;
        //alert (eventTime);
    

    var remTime = eventTime - currentTime;
    //alert (remTime);


    var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
    var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remTime % (1000 * 60)) / 1000);
    
    h = ( h < 10) ? "0" + h : h;
    m = ( m < 10) ? "0" + m : m;
    s = ( s < 10) ? "0" + s : s;

    document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;

    x = setTimeout(countdown, 1000, eventTime);

}
    
function start() {
    console.log("Timer started...");





    var theme = $("input[type=radio][name=theme]:checked" ).val();

    var timerhours = $("input#timerhours" ).val();
    var timerminutes = $("input#timerminutes" ).val();
    var timerseconds = $("input#timerseconds" ).val();
    var intervalhours = $("input#intervalhours" ).val();
    var intervalminutes = $("input#intervalminutes" ).val();
    var intervalseconds = $("input#intervalseconds" ).val();
    //var rounds = $("input#rounds" ).val();

    //calculate time
    var now = new Date();

    var currentTime = now.getTime();

    var time = ((timerhours * 60 * 60) + (timerminutes * 60) + timerseconds)*100;
    var eventTime = currentTime + time;
    var interval = ((intervalhours * 60 * 60) + (intervalminutes * 60) + intervalseconds)*100;




//delete this when rounds is configured
var rounds = 1;

// validate the form

//get the video length

// add video length to timer

$( "#settings" ).css( "display", "none");
$( "#banner" ).css( "display", "none");
$( "#glhf" ).css( "display", "block");
playVid();

//start timer
countdown(eventTime);

//setTimeout(start(), 1000);
//play video in popup

//remove video after expired
}

var glhf = document.getElementById("glhf");

function playVid() {
    glhf.play();
}


function openFullscreen() {
    if (glhf.requestFullscreen) {
        glhf.requestFullscreen();
    } else if (glhf.mozRequestFullScreen) { /* Firefox */
        glhf.mozRequestFullScreen();
    } else if (glhf.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        glhf.webkitRequestFullscreen();
    } else if (glhf.msRequestFullscreen) { /* IE/Edge */
        glhf.msRequestFullscreen();
    }
  } 
  /* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
  }

    
$( document ).ready(function() {
    //openFullscreen();
    //closeFullscreen();
    $( "#start" ).click(function() {
        clearTimeout(x);
        start();
    });
    $( "#auto" ).click(function() {
        $( "#interval" ).css( "display", "block");
    });
    $( "#manual" ).click(function() {
        $( "#interval" ).css( "display", "none");
    });
    $( "#vid" ).click(function() {
        playVid();
        //openFullscreen();
        //vid = document.getElementById("glhf");
        //vid.autoplay = true;
        //vid.load();
        //closeFullscreen();
    });
});