let images = [];
let currentIndex = 0;

function preload() {
    images [0] = loadImage("img/image1.jpeg");
    images [1] = loadImage("img/image2.jpeg");
    images [2] = loadImage("img/image3.jpeg");
    images [3] = loadImage("img/image4.jpeg");
    images [4] = loadImage("img/image5.jpeg");
}

function setup(){
    createCanvas(600,600);
   
}

function draw(){
    background(0);




let img = images[currentIndex];
image(img,0, 0)
}

function keyPressed() {
    if(keyCode === 65) { // 65 is the keyCode for 'A'
        currentIndex++;
        if(currentIndex >= images.length) {
            currentIndex = 0;
        }
    }
    if(keyCode === 76) { // 76 is the keyCode for 'L'
        currentIndex--;
       
        if(currentIndex < 0) {
            currentIndex = images.length - 1;
        }
}

}