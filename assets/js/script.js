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


// Intialize Game when start button clicked

$(startButton).on("click", function() {
  clearInterval(intervalId);
  playGame();
});

// This function runs when it is time for the computer to generate a sequence. 


function playGame() {
  intervalId = 0;
  win = false;
  $(turnCounter).text("1");
  playerOrder = [];
  turn = 1;
  flash = 0;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gamePlay, 800);
}

/* A function to identify if it is the player's turn or the computer's turn. 
The amount of flashes must match the number in the turn counter - sequence stops and is logged.
The comptuer reproduces a sequence and checks light id and applies correct light and sound function */

function gamePlay() {

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
  }

  if (compTurn) {
    clearColor();
    setTimeout(function() {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

// Functions that generate lights and sounds for all four pads

function one() {
  if (volume) {
    let audio = document.getElementById("sound-green");
    audio.play();
  }
  volume = true;
  greenPad.style.backgroundColor = "#39ff14";
}

function two() {
  if (volume) {
    let audio = document.getElementById("sound-red");
    audio.play();
  }
  volume = true;
  redPad.style.backgroundColor = "#B22222";
}

function three() {
  if (volume) {
    let audio = document.getElementById("sound-yellow");
    audio.play();
  }
  volume = true;
  yellowPad.style.backgroundColor = "#FFFF00";
}

function four() {
  if (volume) {
    let audio = document.getElementById("sound-blue");
    audio.play();
  }
  volume = true;
  bluePad.style.backgroundColor = "#0000ff";
}

// Returns pads to their original state

function clearColor() {
  greenPad.style.backgroundColor = "#4CBB17";
  redPad.style.backgroundColor = "#a30b0b";
  yellowPad.style.backgroundColor = "#daa520";
  bluePad.style.backgroundColor = "#00008b";
}