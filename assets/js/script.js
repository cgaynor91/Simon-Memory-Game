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
  if (strictButton.checked === true) {
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
The comptuer reproduces a sequence and checks light id and applies correct light and sound function
Code here is partly taken from a tutorial on youtube by freecodecamp(credits & link in Readme)*/

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
    }, 350);
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

// Function to cause all colours to flash at the same time

function flashColor() {
  greenPad.style.backgroundColor = "#39ff14";
  redPad.style.backgroundColor = "#FF0000";
  yellowPad.style.backgroundColor = "#FFFF00";
  bluePad.style.backgroundColor = "#0000FF";
}

// Functions for wqhen each pads are clicked. 
// By clicking one pad, a number is pushed into the player sequence array
// Colour clears after set time 

$(greenPad).on('click', function() {
  playerOrder.push(1);
  check();
  one();
  if (!win) {
    setTimeout(function() {
      clearColor();
    }, 300);
  }
});

$(redPad).on('click', function() {
  playerOrder.push(2);
  check();
  two();
  if (!win) {
    setTimeout(function() {
      clearColor();
    }, 300);
  }
});

$(yellowPad).on('click', function() {
  playerOrder.push(3);
  check();
  three();
  if (!win) {
    setTimeout(function() {
      clearColor();
    }, 300);
  }
});

$(bluePad).on('click', function() {
  playerOrder.push(4);
  check();
  four();
  if (!win) {
    setTimeout(function() {
      clearColor();
    }, 300);
  }
});

// Function created to check and see if 
// 1. The colour sequence is followed incorrectly
// 2. If player sequence matches the turn counter
// 3. If the player has completed 20 levels to win game
// 4. Also if strict mode is actve and the player has lost a game

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 20 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    $(turnCounter).text("NO!");
    let audio = document.getElementById("game-over");
    audio.play();
    setTimeout(function() {
      $(turnCounter).text((turn) - 1);
      clearColor();

      if (strict) {
        playGame();
      }
      else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gamePlay, 800);
      }
    }, 800);

    volume = false;
  }

  else if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    $(turnCounter).text((turn) - 1);
    intervalId = setInterval(gamePlay, 800);
  }
}

// Function is called upon if the player wins the game - displaying "WIN!" in the counter and playing audio

function winGame() {
  flashColor();
  $(turnCounter).text("WIN!");
  win = true;
  setTimeout(function() {
    let audio = document.getElementById("game-win");
    audio.play();
  }, 800);
}
