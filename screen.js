// http://keycode.info/

var keysNodeList = document.querySelectorAll(".key");
var keysArray = Array.from(keysNodeList);

document.addEventListener("keydown", function(e) {
    var keyCode = e.keyCode
    var audio = document.querySelector("audio[id='" + keyCode + "']");
    var key = document.querySelector(".key[id='" + keyCode + "']");

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

});

keysArray.forEach(function(key) {
    key.addEventListener('transitionend', function(e) {
        console.log(e.target);


    })
})


