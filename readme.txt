Counter Down. Provided by Oksana Korobanova
----------------------------------------
File structure:
counterDown
    css
      counterDown
    media
      counterDown.mp4
    js
      counterDown.js
    counterDown.html
    readme.txt
-----------------------------------------
   Steps to make it work:
   1. Copy the entire folder 'counterDown' to your project root directory

   2. Include CSS files
   Place the code below to your html/php inside the <head></head> part of your code

   <!-- Bootstrap CSS  -->
    <link rel="stylesheet" href="/counterDown/css/bootstrap.min.css">
   <!-- Bootstrap CSS  EOF-->

   <!-- Counter Down CSS  -->
      <link rel="stylesheet" href="/counterDown/css/counterDown.css">
   <!-- Counter Down CSS EOF -->

   2. HTML part
   Place the code below to your html/php file inside <body> tag

   <!-- Counter Down   -->

           <section id="counterDown" class="counterDown">
               <form id="form" class="counterDown__form">
                   <div class="form-group">
                       <label for="roundsVal">Rounds</label>
                       <input type="text" class="form-control" id="roundsVal" required aria-describedby="roundsHelp"
                              placeholder="Enter the number of rounds">
                       <small id="emailHelp" class="form-text text-muted">How many rounds do you want to have?</small>
                   </div>
                   <div class="form-group">
                       <label for="timeVal">Time (mins)</label>
                       <input type="text" class="form-control" id="timeVal" required placeholder="Time">
                   </div>
                   <div class="form-group">
                       <label for="intervalVal">Interval (mins)</label>
                       <input type="text" class="form-control" id="intervalVal" required placeholder="Interval">
                   </div>
                   <div class="form-check">
                       <input class="form-check-input" type="radio" name="videoRadio" id="radio1" value="option1" checked>
                       <label class="form-check-label" for="radio1">
                           Start the video for the each round
                       </label>
                   </div>
                   <div class="form-check">
                       <input class="form-check-input" type="radio" name="videoRadio" id="radio2" value="option2">
                       <label class="form-check-label" for="radio2">
                           Start the video only once
                       </label>
                   </div>
                   <div class="form-check">
                       <input class="form-check-input" type="radio" name="videoRadio" id="radio3" value="option3">
                       <label class="form-check-label" for="radio3">
                           Not to start the video
                       </label>
                   </div>
                   <button id="playBtn" type="button" class="btn">Submit</button>
               </form>
               <div id="counterDownBlock" class="counterDownBlock">
                   <div id="counterDownLabel" class="counterDownLabel"></div>
                   <div id="counterDownTimer" class="counterDownTimer"></div>
               </div>
               <div id="overlay" class="overlay"></div>
               <video id="video" src="/counterDown/media/counterDown.mp4"></video>
           </section>

   <!-- Counter Down  EOF  -->

   3. Include JS files
   Place the code below to your html/php file right before </body> tag

   <!-- Jquery -->
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
           integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
           crossorigin="anonymous"></script>
   <!-- Jquery EOF-->

   <!-- Counter Down JS -->
   <script src="/counterDown/js/counterDown.js"></script>
   <!-- Counter Down JS EOF  -->
----------------------------------------------




