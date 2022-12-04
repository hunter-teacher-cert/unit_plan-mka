var sprite1

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  sprite1 = new Sprite(200,200,50,80) //new square sprite in the middle of the canvas
  
}

function draw() {
  background(220);
  
 //Let's make a square sprite in the middle of the canvas.
  
  //When the mouse is hovering over the sprite, let's get it's color to change.
  
  if (sprite1.mouse.hovering()) { //checks IF the mouse is currently hovering over the sprite
    console.log("Mouse hovering over sprite1")
    
    sprite1.color = color(300,50,100) //changes the color to pink
    
    sprite1.width = 100 //changes the width of the sprite to 100
  }
  else { // all other situations -- not hovering.
    sprite1.color = color(100,50,100) //changes the color back to green
    
    sprite1.width = 50 //changes the width of the sprite back to 50
  }
  
  
  //Let's also get it's width to increase (still when the mouse is hovering over the sprite)
  
  
  
}
