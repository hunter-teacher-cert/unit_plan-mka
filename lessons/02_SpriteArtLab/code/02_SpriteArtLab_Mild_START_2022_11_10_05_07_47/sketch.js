//create a variable for the player and the costume
let p1, costume;

//this loads the image before the program starts.
function preload() {
  costume = loadImage('./costumes/kirby.png');
}

function setup() {
  createCanvas(200, 200);
  
  //sets the sprite’s appearance to be an image.
  
  //for each step make note of p1's width. How does it change?
  console.log("p1's width:", p1.width);
}

function draw() {
  background(255);
}
