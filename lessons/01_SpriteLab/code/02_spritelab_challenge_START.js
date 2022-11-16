// Variables here


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
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
  
  

  // helper code, feel free to comment out
	textSize(15);
	fill(255);
	stroke(0);
	strokeWeight(2);
	text("x: " + int(mouseX) + " y: " + int(mouseY), 30, 30);
  
}