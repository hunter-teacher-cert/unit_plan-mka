// Variables here
let ball;
let level1;
let level2;
let level3;
let block;
let coin;
let post;





/*** COMPLETE MILD FIRST, THEN TRY MEDIUM OR SPICY ***/

/** MILD **
* Set world gravity to simulate Earth's gravity.
* Create a static floor sprite that takes up the bottom part of your sketch.
* Create a dynamic sprite that will collide with the floor sprite.  When this sprite and the floor collide, change 1 attribute of either sprite.
* Create a static sprite that is between your dynamic sprite and your floor sprite.  When the dynamic sprite overlaps the static sprite, change one attribute of either sprite.
**/

/** MEDIUM **
* Set world gravity to simulate Earth's gravity.
* Create a dynamic circle sprite that will fall to collide with a static rectangle sprite.  Make the sprites change 2 attributes each when they collide.
* Create a dynamic polygon sprite that will fall to overlap with a static circle sprite.  Make the static circle sprite change or disappear when the polygon overlaps with it.
**/

/** SPICY ** 
Recreate challenge: 
https://01Sprite-LabPt3.kmaschm.repl.co
**/


function setup() {
  createCanvas(600, 600);

  world.gravity.y = 10;

  ball = new Sprite(60, 80, 50);
  ball.color = color(222, 49, 99);

  level1 = new Sprite(120, 150, 240, 10, "static");
  level1.color = color(121, 85, 72);

  level2 = new Sprite(300, 300, 240, 10, "static");
  level2.color = color(121, 85, 72);

  block = new Sprite(380, 270, 50, 50);
  
  coin = new Sprite(270, 280, 10, "static");
  coin.color = color(238, 204, 45);
 
  post = new Sprite(72, 630, 80, 400, "static");
  post.color = color(121, 85, 72);


}

function draw() {
  background(220);


  if(ball.collides(level1)) {
    ball.color = color(255, 127, 80);
    level1.rotation = 15;
  }

  if(ball.collides(block)) {
    ball.color = color(255, 191, 0);
    block.vel.x = 10;
  }

  if(ball.collides(level2)) {
    level2.rotation = -15;
  }
  
  if (ball.overlaps(coin)) {
    coin.remove();
  }

  if(ball.collides(post)) {
    ball.color = color(223, 255, 0);
    post.collider = "dynamic";
  }
  
  
  
  // helper code, feel free to comment out
	textSize(15);
	fill(255);
	stroke(0);
	strokeWeight(2);
	text("x: " + int(mouseX) + " y: " + int(mouseY), 30, 30);
  
}
