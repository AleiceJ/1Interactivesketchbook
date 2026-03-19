let steps = 0;
let maxSteps = 13;

var y=60;
var d=80;



function setup() {
    createCanvas(800,800);
}
function draw () {
    background(0)

        let sectionWidth = width / maxSteps;
noStroke();
    fill("#FF0000")
    for (let i = 0; i < steps; i+= 1) {
        rect(i * sectionWidth, 0, sectionWidth, height);
    }
        fill("#ff9900")
        for (let i = 0; i < steps; i+= 2) {
            rect(i * sectionWidth, 0, sectionWidth, height);
            
        }
    }
function mousePressed() {
    if (steps <maxSteps){
        steps+= 1;
    }
}