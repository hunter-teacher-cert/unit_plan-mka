var sprite1, sprite2, sprite3, sprite4

function setup() {
  createCanvas(400, 400);
  
  sprite1 = new Sprite()
  sprite2 = new Sprite()
  sprite3 = new Sprite()
  sprite4 = new Sprite()
}

function draw() {
  background(220);
  
/////////////////  MILD  /////////////////
  
  //1. Create a sprite called sprite1 and make its height change when your mouse is hovering over it.
  
  if (sprite1.mouse.hovering()) {
    
    console.log("sprite 1 hovered")
    sprite1.height += 5
    
  }
  else {
    sprite1.height = 50
  }
  

  
  
  //2. Create a sprite called sprite2 and make its color change when you click it.
  
  if (sprite2.mouse.pressing()) {
    
    console.log("click sprite2")
    sprite2.color = 0
    
  }
  else {
    sprite2.color = color(180,100,180)
  }
  
  //3. Make a sprite called sprite3, change its location by clicking and dragging it to a new location on the canvas.
  
  if (sprite3.mouse.dragging()) {
    
    sprite3.moveTowards(mouse.x, mouse.y)
    
  }
  
  
  
  
  /////////////////  SPICY  /////////////////
  
    //4. Create a sprite called sprite4, make the sprite get larger AFTER it has been clicked.

  
  if (sprite4.mouse.pressed()) {
    
    sprite4.width = 100
    sprite4.height = 100
    
  }
  else {
    sprite4.width = 50
    sprite4.height = 50
  }

  
  
  
}




