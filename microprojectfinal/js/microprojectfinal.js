// colors for each section of the rainbow
let colors = ["#FF0000", "#ff9900", "#ffff00", "#00ff00", "#0400ff", "#480368", "#f405a0"];

// level 1: scrambled letters shown + correct order
const originalLetters1 = ["R", "F", "I", "E", "N", "S", "D"];
const allowedLetters1 = ["F", "R", "I", "E", "N", "D", "S"];
// level 2: scrambled letters shown + correct order
const originalLetters2 = ["A", "I", "N", "R", "W", "O", "B"];
const allowedLetters2 = ["R", "A", "I", "N", "B", "O", "W"];

const originalLetters3 = ["U", "A", "D", "T", "P", "S", "E"];
const allowedLetters3 = ["U", "P", "D", "A", "T", "E", "S"];
// current level data (these will change depending on level)
let originalLetters;
let allowedLetters;
let letters;

let wrongCount = 0;
let steps = 0;
let maxSteps = 7;

let screen = "start";
let level = 1;


function loadLevel() {
  if (level === 1) {
    originalLetters = [...originalLetters1];
    allowedLetters = [...allowedLetters1];
  } else if (level === 2) {
    originalLetters = [...originalLetters2];
    allowedLetters = [...allowedLetters2];
    letters = [...originalLetters2];
  } else if (level === 3) {
      originalLetters = [...originalLetters3];
      allowedLetters = [...allowedLetters3];
      letters = [...originalLetters3];
  }


  steps = 0;
  wrongCount = 0;
 maxSteps = allowedLetters.length;
}

function setup() {
    createCanvas(800,800);
    textSize(24);
    loadLevel();
    letters = [...originalLetters]; // start with scrambled letters visible
}


function draw() {
    // clears screen every frame (black background)
    background(0);
 
    if (screen === "start") {
      drawStartScreen();
    } else if (screen === "game") {
      drawGameScreen();
    }
  }
  function drawStartScreen() {
    fill(255);
    textAlign(CENTER, CENTER);
   textSize(50);
    text("Click Anywhere to Start", width / 2, height / 2 + 20);
  }
  
  // divides the canvas into equal vertical sections
      function drawGameScreen() {
        background(0); 
  let sectionWidth = width / maxSteps;
        noStroke();
    
 // draw sections left-to-right in order
  for (let i = 0; i < steps; i++) {
    fill(colors[i]); // color matches the section number
    rect(i * sectionWidth, 0, sectionWidth, height);

  }
  fill(0);
rect(0, 0, width, 60); 
 fill(255);
  textAlign(CENTER, TOP);
    text("Unscramble the letters to Complete the Rainbow", width/2, 20);
   
    let message = letters.join(" "); // turns array into "S F R D I E N"
let x = 100;
  let y = 120;

  textSize(32);

  let w = textWidth(message);
  let h = textAscent() + textDescent();

  fill(255);
  rect(0, 100, w + 20, h + 20); // background for text

  fill(0);
  text(message, x, y);


      if (steps === maxSteps) {
        fill (0);
        textAlign(CENTER, CENTER);
textSize(80);

if (level === 1){
  text("FRIENDS!", width / 2, height / 2);
  textSize(80);
  text("Click to continue", width / 2, height / 2 + 70);
    } else if (level === 2) {
      text("RAINBOW!", width / 2, height / 2);
       text("Click to continue", width / 2, height / 2 + 70);
    } else if (level === 3) {
      text("UPDATES!", width / 2, height / 2);
      textSize(40);
      text("You completed all levels!", width / 2, height / 2 + 70);
  }
}
      }


      
    function mousePressed() {
      if (screen === "start") {
        screen = "game";
      } else if (screen === "game" && steps === maxSteps) {
        if (level < 2) {
          level++;
        loadLevel();
      } else if (level < 3) {
        level++;
        loadLevel();
    }
    }
  }

        
    
       
function keyPressed() {
  if (screen !== "game") return;
  if (steps === maxSteps) return;

  let pressed = key.toUpperCase();

  // ignore special keys
  if (pressed.length !== 1) return;

  // correct next letter
  if (pressed === allowedLetters[steps]) {
    steps++;
    wrongCount = 0;

    // remove correct letter from scrambled display
    let index = letters.indexOf(pressed);
    if (index !== -1) {
      letters.splice(index, 1);
    }
  } else {
    wrongCount++;

    // reset current level after 2 wrong inputs
    if (wrongCount >= 2) {
      letters = [...originalLetters];
      steps = 0;
      wrongCount = 0;
    }
  }
}