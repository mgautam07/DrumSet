var crash = new Audio('drum_sounds/crash.mp3');
var kick_bass = new Audio('drum_sounds/kick-bass.mp3');
var snare = new Audio('drum_sounds/snare.mp3');
var tom_1 = new Audio('drum_sounds/tom-1.mp3');
var tom_2 = new Audio('drum_sounds/tom-2.mp3');
var tom_3 = new Audio('drum_sounds/tom-3.mp3');
var tom_4 = new Audio('drum_sounds/tom-4.mp3');
var rec = false;
var keyStroke = [];
var x = 0;
var counter = 0;
var delay = 500;
document.addEventListener("keypress", start);

function start(key) {
        onhit(key.keyCode);
        if (rec === true) {
                keyStroke.push(key.keyCode);
                counter = counter + 1;
        }
}

function onhit(key) {

        if (key === 106) {
                crash.play();
                document.getElementById("j").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("j").style.backgroundColor = 'rgb(106, 151, 39, 0.3)'}, 500);
        }
         else if (key === 107) {
                snare.play();
                document.getElementById("k").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("k").style.backgroundColor = 'rgba(106, 151, 39, 0.3)'}, 500);
        }
         else if (key === 32) {
                kick_bass.play();
                document.getElementById("key5").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("key5").style.backgroundColor = 'rgba(106, 151, 39, 0.3)'}, 500);
        }
         else if (key === 119) {
                tom_1.play();
                document.getElementById("w").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("w").style.backgroundColor = 'rgba(106, 151, 39, 0.3)'}, 500);
        }
         else if (key === 97) {
                tom_2.play();
                document.getElementById("a").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("a").style.backgroundColor = 'rgba(106, 151, 39, 0.3)'}, 500);
        }
         else if (key === 115) {
                tom_3.play();
                document.getElementById("s").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("s").style.backgroundColor = 'rgba(106, 151, 39, 0.3)'}, 500);
        }
         else if (key === 100) {
                tom_4.play();
                document.getElementById("d").style.backgroundColor = 'rgba(0, 0, 170, 0.4)';
                setTimeout(function (){document.getElementById("d").style.backgroundColor = 'rgba(106, 151, 39, 0.3)'}, 500);
        }
        else {
                // alert(key + "was pressed");
        }
}

function record(){
        rec = true;
        var rec_button = document.getElementById("record");
        rec_button.classList.add("hide");
        var stop_button = document.getElementById("stopRecord");
        stop_button.classList.remove("hide");
}

function stop_record(){
        rec = false;
        var rec_button = document.getElementById("record");
        rec_button.classList.remove("hide");
        var stop_button = document.getElementById("stopRecord");
        stop_button.classList.add("hide");  
        var stop_button = document.getElementById("clearRecord");
        stop_button.classList.remove("hide");  

}

function clear_record() {
        console.log("bot");
        var stop_button = document.getElementById("clearRecord");
        stop_button.classList.add("hide");
        keyStroke = [];
        counter = 0;
        x = 0;
}

function play() {

        delay = Number(document.getElementById("delay").value);
        console.log("delay = " + delay);
        var bot = setInterval(function(){
                onhit(keyStroke[x]);
                x = x + 1;
                console.log("x = " + x);
                console.log("counter = "+ counter)
                if (x === counter || counter === 0) {
                        console.log("trying to clear");
                        clearInterval(bot);
                        x = 0;
                }
                if (counter === 0) {
                        alert("Nothing has been recorded yet or might have been cleared");
                }
        }, delay);
}