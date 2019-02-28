// functions
function removeTransition(e) {
  var key = e.target; // variables
  key.classList.remove('playing'); // methods/function
}

function playSound(e) {
  var keyCode = e.keyCode;

  // dom manipulation
  var audio = document.querySelector("audio[id='" + keyCode + "']");
  var key = document.querySelector("div[id='" + keyCode + "']");

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

var keysNodeList = document.querySelectorAll(".key");
var keys = Array.from(keysNodeList);

// event listener
document.addEventListener("keydown", playSound);

// array method
keys.forEach(function (key) {
  key.addEventListener('transitionend', removeTransition);
});











// make toggle button work
var moon = document.getElementsByClassName("fa-moon")[0];
var sun = document.getElementsByClassName("fa-sun")[0];

moon.addEventListener("click", function() {
  if (moon.classList.contains("far")) {
    moon.classList.remove("far");
    moon.classList.add("fas", "disabled");

    sun.classList.remove("fas", "disabled");
    sun.classList.add("far");
  }
});

sun.addEventListener("click", function() {
  if (sun.classList.contains("far")) {
    moon.classList.remove("fas", "disabled");
    moon.classList.add("far");

    sun.classList.remove("far");
    sun.classList.add("fas", "disabled");
  }
});
