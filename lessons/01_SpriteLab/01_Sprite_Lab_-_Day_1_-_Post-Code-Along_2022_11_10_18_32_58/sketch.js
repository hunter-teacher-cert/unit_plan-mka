// Variables here:
let player;
let player2;
let player3;


function setup() {
  createCanvas(600, 600);
  // player = new Sprite(); // creating a Sprite
  // default: square, center of screen, 50 pixels per side, random color
  
  // player.x = 100; // set x-value of center of Sprite
  // player.y = 120; // set y-value of center of Sprite
  // //player.diameter = 80; // set diameter of Sprite to make a circle
  // player.w = 150; // set width of Sprite
  // player.h = 75; // set height of Sprite
  // player.rotation = 45; // rotate Sprite 45 degrees around center of Sprite

  // player = new Sprite(100, 120, 150, 75);
  // creates new Sprite with x: 100, y: 120, w: 200, h: 75

  player = new Sprite(100, 120, 150, "triangle");
  // creates new Sprite with x: 100, y: 120, sidelength 150 as a triangle
  
 player.color = color(255, 255, 0); // set color of Sprite using rgb values

  // red circle  
 player2 = new Sprite(400, 100, 70);
 player2.color = color(255, 0, 0); 

  // blue rectangle
  player3 = new Sprite(500, 150, 10, 80); 
  player3.color = color(0, 0, 255); 
  
}

function draw() {
  background(220);
  // player = new Sprite(); - will keep generating Sprites because draw() is a loop

  // player.vel.x = -5; // sets x-velocity; will move left by 5
  // player.vel.y = cos(frame); // sets y-velocity of Sprite - moves back and forth with trig motion (cosine)
  // player.rotationSpeed = 1; // rotates around center at set speed
  player.direction = 45; // sets direction of Sprite
player.speed = cos(frame); // sets speed, will move back and forth in set direction
  
  


  
  
  // helper code, feel free to comment out
	textSize(15);
	fill(255);
	stroke(0);
	strokeWeight(2);
	text("x: " + int(mouseX) + " y: " + int(mouseY), 30, 30);
  
}