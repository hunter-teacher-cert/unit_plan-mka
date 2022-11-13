// Variables here:
let player;
let redCircle;
let blueRect;

let poly1;
let poly2;

let playerMove;


function setup() {
  createCanvas(600, 600);
  // player = new Sprite(); // creating a Sprite
  // // default: square, center of screen, 50 pixels per side, random color
  
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
  redCircle = new Sprite(400, 100, 70);
  redCircle.color = color(255, 0, 0); 

  // blue rectangle
  blueRect = new Sprite(500, 150, 10, 80); 
  blueRect.color = color(0, 0, 255); 

  // Challenge: create two polygon sprites at the bottom left and right corners of your sketch
  // polygon 1
  poly1 = new Sprite(100, 450, 80, "hexagon");

  // polygon 2
  poly2 = new Sprite(450, 450, 80, "octagon");
  
  // will move with keyboard
  playerMove = new Sprite();
  
}

function draw() {
  background(220);
  // player = new Sprite(); - will keep generating Sprites because draw() is a loop

  // player.vel.x = -5; // sets x-velocity; will move left by 5
  // player.vel.y = cos(frame); // sets y-velocity of Sprite - moves back and forth with trig motion (cosine)
  // player.rotationSpeed = 1; // rotates around center at set speed


  player.direction = 45; // sets direction of Sprite
player.speed = cos(frame); // sets speed, will move back and forth in set direction


  //Challenge: Make your blue rectangle move straight down in your sketch.
  blueRect.vel.y = 5;
  
  // Challenge: Make your red circle move towards the bottom left corner of the sketch.
  redCircle.direction = 135;
  redCircle.speed = 3;
  
  // Two polygon sprites that rotate in opposite directions. 
  poly1.rotationSpeed = 2;
  poly2.rotationSpeed = -2;


  if(kb.pressing("w")) {
    playerMove.vel.y = -3;
  } else if(kb.pressing("s")) {
    playerMove.vel.y = 3;
  } else {
    playerMove.vel.y = 0;
  }
  
  
  
  
  
  // helper code, feel free to comment out
	textSize(15);
	fill(255);
	stroke(0);
	strokeWeight(2);
	text("x: " + int(mouseX) + " y: " + int(mouseY), 30, 30);
  
}