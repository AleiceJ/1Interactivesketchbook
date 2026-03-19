function setup(){
createCanvas(400, 600);
}

function draw() {
background(100, 50, 265);

 //direct manipulation

   ellipse(10,20, 30);

// constraint

let x = constraint(mouseX, 100, 500)


}