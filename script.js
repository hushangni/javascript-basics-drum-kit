var keysNodeList = document.querySelectorAll(".key");
var keysArray = Array.from(keysNodeList);

// event listener
document.addEventListener("keydown", function(e) { // explain this placeholder better
  var keyCode = e.keyCode;

  // dom manipulation
  var audio = document.querySelector("audio[id='" + keyCode + "']");
  var key = document.querySelector(".key[id='" + keyCode + "']");

  if (moon.classList.contains("far")) {
    key.classList.add('dayplaying');
  } else if (sun.classList.contains("far")) {
    key.classList.add('playing');
  }
  audio.currentTime = 0;
  audio.play();
});

// array method
keysArray.forEach(function (key) {
  key.addEventListener('transitionend', function(e) {
    var key = e.target;
    if (moon.classList.contains("far")) {
      key.classList.remove('dayplaying');
    } else if (sun.classList.contains("far")) {
      key.classList.remove('playing');
    }
  });
});






// make toggle button work
var moon = document.getElementsByClassName("fa-moon")[0];
var sun = document.getElementsByClassName("fa-sun")[0];
var body = document.getElementsByTagName("body")[0];
var modes = document.querySelectorAll('i');
var modesArray = Array.from(modes);
var keyWords = document.querySelectorAll('.key span');
var keyWordsArray = Array.from(keyWords);
var kit = document.getElementsByClassName("future")[0];
var drum = document.getElementsByClassName("cop")[0];


moon.addEventListener("click", function() {
  if (moon.classList.contains("far")) {
    // to night mode
    moon.classList.remove("far");
    moon.classList.add("fas", "disabled");

    sun.classList.remove("fas", "disabled");
    sun.classList.add("far");

    kit.classList.remove('day');
    drum.classList.remove('day');

    body.classList.remove('day');

    keysArray.forEach(function (key) {
      key.classList.remove('day');
    });

    modesArray.forEach(function (mode) {
      mode.classList.remove('day');
    })

    keyWordsArray.forEach(function (word) {
      word.classList.remove('day');
    })

  }
});

sun.addEventListener("click", function() {
  if (sun.classList.contains("far")) {
    // to day mode
    moon.classList.remove("fas", "disabled");
    moon.classList.add("far");

    sun.classList.remove("far");
    sun.classList.add("fas", "disabled");

    kit.classList.add('day');
    drum.classList.add('day');

    body.classList.add('day');

    keysArray.forEach(function (key) {
      key.classList.add('day');
    });

    modesArray.forEach(function (mode) {
      mode.classList.add('day');
    })

    keyWordsArray.forEach(function (word) {
      word.classList.add('day');
    })


  }
});
