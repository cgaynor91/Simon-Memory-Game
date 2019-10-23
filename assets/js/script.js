// Variables

let order = [];
let playerOrder = [];
let flash, turn, good, compTurn, intervalId, win;
let strict = true;
let volume = true;

// Variables targeted using jquery

const turnCounter = document.getElementById("turn");
const pad = document.getElementById("pad");
const greenPad = document.getElementById("greenpad");
const redPad = document.getElementById("redpad");
const yellowPad = document.getElementById("yellowpad");
const bluePad = document.getElementById("bluepad");
const strictButton = document.getElementById("strict");
const startButton = document.getElementById("start");



// Adapt game to play in strict mode if selected

$(strictButton).on('click', function() {
  if (strictButton.checked == true) {
    strict = true;
    turn = 1;
    clearInterval(intervalId);
    if ($(turnCounter).text() == "-") {
      $(turnCounter).text("-");
    }
    else {
      $(turnCounter).text("0");
    }
    setTimeout(function() {
      clearColor();
    }, 800);
  }
  else {
    strict = false;
  }
});
