function removeTransition(e) {
  e.target.classList.remove('playing');
}

function playSound(e) {
  var audio = document.querySelector(`audio[id="${e.keyCode}"]`);
  var key = document.querySelector(`div[id="${e.keyCode}"]`);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

var keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener("keydown", playSound);










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
