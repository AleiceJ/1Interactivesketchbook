let steps=0;
let maxSteps = 6;

var y= 60;
var d= 80;



function setup() {
  createCanvas(900, 700);
}

function draw () {
    background("#ffea07");
    fill("#8b0673");
rect(200, y, d, d);
rect(400, 200, 200,200);
rect(600, y, d, d);
    let sectionWidth = width / maxSteps;


    // sections

    noStroke();
    fill("#0044ff")
    for (let i = 0; i <steps; i++) {
     rect(i * sectionWidth, 0, sectionWidth, height);   
}





if (steps>= maxSteps) {
    fill ("#b007ce");
ellipse(400, 200, 200,200);
} else{
        fill ("#068b3b");
        ellipse(200, y, d, d);
}}


function mousePressed() {
    if (steps <maxSteps){
        steps+= 1;
}
}