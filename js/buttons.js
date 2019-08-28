$(document).ready(function(){

    var activeDigit = 1;

    var tenHours = document.getElementById("tenhrVal");
    var singleHours = document.getElementById("hrVal");
    var tenMinutes = document.getElementById("tenmVal");
    var singleMinutes = document.getElementById("mVal");

    function resetDigits(digit) {
      $("#tenhrVal").addClass("inputDigit");
      $("#hrVal").addClass("inputDigit");
      $("#tenmVal").addClass("inputDigit");
      $("#mVal").addClass("inputDigit");
      $("#tenhrVal").removeClass("activeDigit");
      $("#hrVal").removeClass("activeDigit");
      $("#tenmVal").removeClass("activeDigit");
      $("#mVal").removeClass("activeDigit");
      
      $(digit).addClass("activeDigit");
      $(digit).removeClass("inputDigit");

      switch(digit) {
        case "#tenhrVal":
          activeDigit = 1;
          break;
        case "#hrVal":
          activeDigit = 2;
          break;
        case "#tenmVal":
          activeDigit = 3;
          break;
        case "#mVal":
          activeDigit = 4;
          break;
      }

    }

    

    function nextDigit(activeDigit) {
      switch(activeDigit) {
        case 1:
          resetDigits("#hrVal");
          break;
        case 2:
          resetDigits("#tenmVal");
          break;
        case 3:
          resetDigits("#mVal");
          break;
        case 4:
          resetDigits("#tenhrVal");
          break;
      }
    }

    function previousDigit(activeDigit) {
      switch(activeDigit) {
        case 1:
          resetDigits("#mVal");
          break;
        case 2:
          resetDigits("#tenhrVal");
          break;
        case 3:
          resetDigits("#hrVal");
          break;
        case 4:
          resetDigits("#tenmVal");
          break;
      }

    }

    function changeDigit(value, activeDigit) {
      switch(activeDigit) {
        case 1:
          $("#tenhrVal").val(value);
          break;
        case 2:
          $("#hrVal").val(value);
          break;
        case 3:
          $("#tenmVal").val(value);
          break;
        case 4:
          $("#mVal").val(value);
          break;
      }
      nextDigit(activeDigit);
    }

    function submitTimer(time) {
      $("#timeVal").val(time);
      $("#playBtn").click();
    }

    function quickstart(time) {
      $( ".interface" ).css( "display", "none" );
      submitTimer(time);
    }

    function manualTimer() {
      var minutes = (($("#tenhrVal").val() * 10 * 60 ) + ($("#hrVal").val() * 60 ) + ($("#tenmVal").val() * 10 ) + $("#mVal").val());
      if ( minutes > 0) {
        $( ".interface" ).css( "display", "none" );
        submitTimer(minutes);
      } else {
        alert("Please enter at least 1 minute...");
      }
    }

    $("#tenhrVal").click(function(){
      resetDigits("#tenhrVal");
    });

    $("#hrVal").click(function(){
      resetDigits("#hrVal");
    });

    $("#tenmVal").click(function(){
      resetDigits("#tenmVal");
    });

    $("#mVal").click(function(){
      resetDigits("#mVal");
    });

    $("#key1").click(function(){
      changeDigit(1, activeDigit);
    });

    $("#key2").click(function(){
      changeDigit(2, activeDigit);
    });

    $("#key3").click(function(){
      changeDigit(3, activeDigit);
    });

    $("#key4").click(function(){
      changeDigit(4, activeDigit);
    });

    $("#key5").click(function(){
      changeDigit(5, activeDigit);
    });

    $("#key6").click(function(){
      changeDigit(6, activeDigit);
    });

    $("#key7").click(function(){
      changeDigit(7, activeDigit);
    });

    $("#key8").click(function(){
      changeDigit(8, activeDigit);
    });

    $("#key9").click(function(){
      changeDigit(9, activeDigit);
    });

    $("#key0").click(function(){
      changeDigit(0, activeDigit);
    });

    $("#keyBack").click(function(){
      previousDigit(activeDigit);
    });

    $("#keyForward").click(function(){
      nextDigit(activeDigit);
    });

    $("#Q50").click(function(){
      quickstart(50);
    });

    $("#Q40").click(function(){
      quickstart(40);
    });

    $("#manualTimer").click(function(){
      manualTimer();
    });





});
  