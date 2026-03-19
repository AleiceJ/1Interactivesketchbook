function setup() {
createCanvas(500, 500);
background(100, 150, 255);
}

function draw() {


    // direct manipulation

    triangle(mouseX, mouseY, 50);

    // Constraint

    let x = constrain(mouseX, 200, 300);
}