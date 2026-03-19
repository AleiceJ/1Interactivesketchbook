let steps=0;
let maxSteps = 8;

var y= 60;
var d= 80;



function setup() {
  createCanvas(600, 200);
}

function draw () {
    background(220);
ellipse(50, y, d, d);
ellipse(150, y, d, d);
ellipse(250, y, d, d);
    let sectionWidth = width / maxSteps;


    // sections

    noStroke();
    fill("#8800ff")
    for (let i = 0; i <steps; i++) {
     rect(i * sectionWidth, 0, sectionWidth, height);   
}





if (steps>= maxSteps) {
    textSize(16);
fill (0);
text ("State: Complete", width -150, height -20);
}
}

function mousePressed() {
    if (steps <maxSteps){
        steps+= 1;
    }
}
