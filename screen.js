// http://keycode.info/
document.addEventListener("keydown", function(e) {
    var keyCode = e.keyCode
    var audio = document.querySelector("audio[id='" + keyCode + "']");
    console.log(audio);

    audio.play();

});


