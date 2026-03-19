// colors for each section of the rainbow
let colors = ["#FF0000", "#ff9900", "#ffff00", "#00ff00", "#0400ff", "#480368", "#f405a0"];

// original letter set shown in the text box when the rainbow resets
// this controls what the user sees in the box
const originalLetters = ["R", "F", "I", "E", "N", "S", "D"];

// copy of letters displayed in the text box
let letters = [...originalLetters]; // copy of original letters to modify during game
let allowedLetters = ["F", "R", "I", "E", "N", "D", "S"];
let wrongCount = 0;
// keeps track of how many correct letters have been pressed
let steps = 0;
// maximum number of rainbow sections (7 colors)
let maxSteps = 7;
// creates drawing size and text size
function setup() {
    createCanvas(800,800);
    textSize(24);
    
}

function draw() {
    // clears screen every frame (black background)
    background(0);
 
    
  // divides the canvas into equal vertical sections
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
    text("Click The Correct Letter to Complete the Rainbow", width/2, 20);
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
}

        
    
       
function keyPressed() {
  let pressed = key.toUpperCase();

  // ignore keys like Shift/Arrow/etc.
  if (pressed.length !== 1) return;

  // correct next letter
  if (pressed === allowedLetters[steps]) {
    steps++;
    wrongCount = 0;

    // remove letter from text box
    let index = letters.indexOf(pressed);
    if (index !== -1) letters.splice(index, 1);

    if (steps > maxSteps) steps = maxSteps;

  } else {
    wrongCount++;

    if (wrongCount >= 2) {
      steps = 0;
      wrongCount = 0;
      letters = [...originalLetters];
      
    }
  }
}