//file:///C:/Users/teo.tanaka27/stickfight/Stick-Fight/index.html
//git config --global user.email "teo.tanaka777@gmail.com" 
//git config --global user.name "Teo Tanaka" 
let p = new Point(250,250,1);
let console = "hello"
function setup(){
    createCanvas(500,500)
}

function draw(){
    background(0)
    fill(255); // Blue fill color for the text
    textSize(20); // Set text size
    textAlign(CENTER, CENTER); // Center text both horizontally and vertically
    text(console, 250, 20); 
    p.update(deltaTime/1000)
    
}
