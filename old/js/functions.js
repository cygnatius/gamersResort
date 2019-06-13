function isLeapYear() {
    var today = new Date();
      var year = today.getFullYear();
      if((year & 3) != 0) return false;
      return ((year % 100) != 0 || (year % 400) == 0);
  }
  
  function getDOY() {
    var today = new Date();
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = today.getMonth();
    var dn = today.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && isLeapYear()) {
      dayOfYear++;
    }
    if (dayOfYear < 100) {
      if (dayOfYear < 10) {
        dayOfYear = "00" + dayOfYear;
      } else {
        dayOfYear = "0" + dayOfYear;
      }
    }
    return dayOfYear;
  };
  
  function startDate() {
    var today = new Date();
    var y = today.getFullYear();
    var mo = today.getMonth()+1;
    var d = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = "";
    switch (new Date().getDay()) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
    }
  
    var dayOfYear = getDOY();
  
    var julian = y.toString().charAt(3) + dayOfYear;
  
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('scoreboardDate').innerHTML =
  day + " " + d + "/" + mo + "/" + y;
    var t = setTimeout(startDate, 500);
  }
  
  function startJulian() {
    var today = new Date();
    var y = today.getFullYear();
    var mo = today.getMonth()+1;
    var d = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = "";
    switch (new Date().getDay()) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
    }
  
    var dayOfYear = getDOY();
  
    var julian = y.toString().charAt(3) + dayOfYear;
  
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('scoreboardJulian').innerHTML = julian;
    var t = setTimeout(startJulian, 500);
  }
  
  function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var mo = today.getMonth()+1;
    var d = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = "";
    switch (new Date().getDay()) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
    }
  
    var dayOfYear = getDOY();
  
    var julian = y.toString().charAt(3) + dayOfYear;
  
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('scoreboardTime').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  
  function refreshScoreboard() {
  startTime();
  startDate();
  startJulian();
  }