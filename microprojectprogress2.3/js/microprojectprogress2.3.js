let steps = 0;
let maxSteps = 7;

let allowedLetters = ["f", "r", "e", "d", "s", "i", "n"];



function setup() {
    createCanvas(800,800);
    textSize(24);
}

function draw() {
    background(0);
   
    

        let sectionWidth = width / maxSteps;
noStroke();
    fill("#FF0000")
    for (let i = 0; i < steps; i+= 1) 
        rect(i * sectionWidth, 0, sectionWidth, height);
    
        fill("#ff9900")
        for (let i = 0; i < steps; i+= 2) 
            rect(i * sectionWidth, 0, sectionWidth, height);
        
            fill("#ffff00")
            for (let i = 0; i < steps; i+= 3) 
                rect(i * sectionWidth, 0, sectionWidth, height);
            
                fill("#00ff00")
                for (let i = 0; i < steps; i+= 4) 
                    rect(i * sectionWidth, 0, sectionWidth, height);

                    fill("#0400ff")
                    for (let i = 0; i < steps; i+= 5) 
                        rect(i * sectionWidth, 0, sectionWidth, height);
                    
                        fill("#480368")
                        for (let i = 0; i < steps; i+= 6) 
                            rect(i * sectionWidth, 0, sectionWidth, height);
                        
                            fill("#f405a0")
                            for (let i = 0; i < steps; i+= 7) 
                                rect(i * sectionWidth, 0, sectionWidth, height);
                                
                            fill (255);
                            stroke(0, 0, 0)
    textAlign(CENTER, TOP);
    text("Click The Correct Letter to Complete the Rainbow", width/2, 20);

        }
    

function keyPressed() {
    let pressed = key.toLowerCase();

    if (allowedLetters.includes(pressed) && steps < maxSteps) {
        steps++;
    }
}