/**
 * Created by Oksana on 30.05.2019.
 */
(function () {
    var video = document.getElementById("video"),
        video2 = document.getElementById("video2"),
        playBtn = document.getElementById('playBtn'),
        myForm = document.getElementById('form'),
        myBanner = document.getElementById('banner'),
        countDownTimer = document.getElementById('counterDownTimer'),
        counterDownBlock = document.getElementById('counterDownBlock'),
        overlay = document.getElementById('overlay'),
        rounds, time, delay, condition, globalTime, videoDuration, timerDuration, delayDuration, roundIterator = 0,
        overlayDuration,
        iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


    playBtn.addEventListener("click", initialize, false);

    function initialize() {
        getDataFromForm();
        if (checkForm()) {
            startRounds();
        }
        else {
            alert("Please fill in all fields!");
        }
    }

    function getDataFromForm() {
        rounds = parseInt(document.getElementById('roundsVal').value);
        // convert to s
        time = parseInt(document.getElementById('timeVal').value) * 60;
        //convert to s
        delay = parseInt(document.getElementById('intervalVal').value) * 60;
        condition = $("input[name=videoRadio]:checked").val();
    }

    function checkForm() {
        if (rounds && time && delay >= 0) {
            return true;
        }
    }

    function startRounds() {
        hideForm();
        // video.duration in s, convert to ms
        videoDuration = video.duration * 1000;
        // convert to ms + 2000 on animations
        timerDuration = time * 1000 + 2000;
        delayDuration = delay * 1000 + 2000;
        if (delay === 0) {
            delayDuration = 0;
        }
        iOS ? overlayDuration = 0 : overlayDuration = 2000;


        if (condition === "option3") {
            globalTime = timerDuration + delayDuration + overlayDuration + 1000;
        }
        else {
            globalTime = videoDuration + timerDuration + delayDuration + overlayDuration + 1000;
        }

        for (var i = 0; i < rounds; i++) {
            (function () {
                setTimeout(function () {
                    showRound();
                }, globalTime * i);
            })(i);
        }
    }

    function hideForm() {
        myForm.style.display = 'none';
    }

    function showRound() {
        roundIterator++;
        if (!iOS) {
            showOverlay();
            hideOverlay();
        }

        if (condition === "option1") {
            if (iOS) {
                showVideo();
            }
            else {
                setTimeout(showVideo, overlayDuration);
            }
            setTimeout(showCounter, videoDuration + overlayDuration);

            if (!(roundIterator === rounds) && !(rounds === 1) && !(delay === 0)) {
                setTimeout(showDelay, videoDuration + timerDuration + overlayDuration);
            }
        }
        else if (condition === "option2") {
            if (roundIterator === 1) {
                if (iOS) {
                    showVideo();
                }
                else {
                    setTimeout(showVideo, overlayDuration);
                }
                setTimeout(showCounter, videoDuration + overlayDuration);
                if (!(roundIterator === rounds) && !(rounds === 1) && !(delay === 0)) {
                    setTimeout(showDelay, videoDuration + timerDuration + overlayDuration);
                }
                globalTime = timerDuration + delayDuration + overlayDuration + 1000;
            }
            else {
                setTimeout(showCounter, overlayDuration);
                if (!(roundIterator === rounds) && !(rounds === 1) && !(delay === 0)) {
                    setTimeout(showDelay, timerDuration + overlayDuration);
                }
            }
        }
        else {
            setTimeout(showCounter, overlayDuration);
            if (!(roundIterator === rounds) && !(rounds === 1) && !(delay === 0)) {
                setTimeout(showDelay, timerDuration + overlayDuration);
            }
        }
    }

    function showOverlay() {
        // overlay.style.display = "flex";
        overlay.style.display = "none";
        setTimeout(function () {
            overlay.style.opacity = "1";
        }, 300);
        overlay.innerHTML = "Round " + roundIterator;
    }

    function hideOverlay() {
        setTimeout(function () {
            overlay.style.opacity = "0";
        }, overlayDuration - 300);
        setTimeout(function () {
            overlay.style.display = "none";
        }, overlayDuration);
    }

    function hideVideo() {
        video.style.opacity = "0";
        setTimeout(function () {
            video.style.display = "none";
        }, 300);
    }

    function hideVideo2() {
        video2.style.opacity = "0";
        setTimeout(function () {
            video2.style.display = "none";
        }, 300);
    }

    function showVideo() {
        video.style.display = "block";
        setTimeout(function () {
            video.style.opacity = "1";
            play();
        }, 300);
    }

    function showVideo2() {
        video2.style.display = "block";
        setTimeout(function () {
            video2.style.opacity = "1";
            play2();
        }, 300);
    }

    function play() {
        video.play();
    }

    function play2() {
        video2.play();
    }

    function showCounter(e) {
        hideVideo();
        var delayTime = time,
            display = $('#counterDownTimer'),
            name = '';
        startTimer(delayTime, display, name);
    }

    function showDelay(e) {
        var delayTime = delay,
            display = $('#counterDownTimer'),
            name = 'The next round will start in';
        startTimer(delayTime, display, name);
    }

    function startTimer(duration, display, name) {
        var timer = duration, hours, minutes, seconds;
        var delay = setInterval(function () {
            hours = parseInt(timer / 60 / 60, 10);
            minutes = parseInt(timer / 60 % 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 && (minutes+hours) > 0 ? "0" + seconds : seconds;

            var displayBlock = $('#counterDownBlock');
            var counterDownLabel = $('#counterDownLabel');
            displayBlock.show();
            counterDownLabel.text(name);
            counterDownLabel.show();
            display.show();
            if (hours > 0) {
                display.text(hours + ":" + minutes + ":" + seconds);
            } else if (minutes > 0) {
                display.text(minutes + ":" + seconds);
            } else {
                display.text(seconds);
            }
            if (--timer < 0) {
                // start next raund(delay) or end
                clearInterval(delay); // stop the interval
                setTimeout(function () {
                    display.hide();
                    counterDownLabel.hide();
                    displayBlock.hide();
                    showVideo2();
                }, 1000);

                //timer = duration;
            }

        }, 1000);
    }

// Restricts input for the given textbox to the given inputFilter.
    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    }

    setInputFilter(document.getElementById("roundsVal"), function (value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) > 0);
    });
    setInputFilter(document.getElementById("timeVal"), function (value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) > 0);
    });
    setInputFilter(document.getElementById("intervalVal"), function (value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) >= 0);
    });
})();

