let steps=0;
let maxSteps = 8;

var y= 60;
var d= 80;



function setup() {
  createCanvas(600, 200);
}

function draw () {
    background(220);
    fill("#ff0000");
ellipse(50, y, d, d);
ellipse(150, y, d, d);
ellipse(250, y, d, d);
    let sectionWidth = width / maxSteps;


    // sections

    noStroke();
    fill("#0044ff")
    for (let i = 0; i <steps; i++) {
     rect(i * sectionWidth, 0, sectionWidth, height);   
}





if (steps>= maxSteps) {
    textSize(24);
fill (0);
text ("State: All Done", width -200, height -30);
} else{
    textSize(16);
fill (70);
text ("State: Almost There", width -200, height -30);
}
}

function mousePressed() {
    if (steps <maxSteps){
        steps+= 1;
}
}