function timer() {
// Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
    }, 1000);
}  
    
    
function start() {
    var theme = $("input[type=radio][name=theme]:checked" ).val();

    var timerhours = $("input#timerhours" ).val();
    var timerminutes = $("input#timerminutes" ).val();
    var timerseconds = $("input#timerseconds" ).val();
    var intervalhours = $("input#intervalhours" ).val();
    var intervalminutes = $("input#intervalminutes" ).val();
    var intervalseconds = $("input#intervalseconds" ).val();
    //var rounds = $("input#rounds" ).val();

var time = ((timerhours * 60 * 60) + (timerminutes * 60) + timerseconds)*1000;
var interval = ((intervalhours * 60 * 60) + (intervalminutes * 60) + intervalseconds)*1000;

//delete this when rounds is configured
var rounds = 1;

// validate the form

//get the video length

// add video length to timer

//start timer
timer(time, rounds, interval);
//play video in popup

//remove video after expired
}
    
$( document ).ready(function() {
    $( "#start" ).click(function() {
        start();
    });
    $( "#auto" ).click(function() {
        $( "#interval" ).css( "display", "block");
    });
    $( "#manual" ).click(function() {
        $( "#interval" ).css( "display", "none");
    });
});