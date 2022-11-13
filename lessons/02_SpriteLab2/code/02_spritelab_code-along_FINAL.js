// Variables here:
let player;
let ball;
let floor;

let dot;


function setup() {
  createCanvas(600, 600);

  player = new Sprite(); // square sprite as player
  ball = new Sprite(100, 120, 80); // circle sprite
  floor = new Sprite(width/2, 500, width, 10, "static"); // rectangular sprite near bottom of sketch, floor can't be moved by sprites or affected by gravity

  dot = new Sprite(100, 200, 10, "static");
  
  
  world.gravity.y = 10; // simulate Earth's gravity

  //floor.collider = "static"; // floor can't be moved by sprites or affected by gravity

}

function draw() {
  background(220);

  // if the player collides with the floor
  if(player.collides(floor)) { 
    player.w = 100; // change the player's width
    floor.rotation = 15; // rotate the floor by 15 degrees
  }

  if (ball.overlaps(dot)) {
   dot.remove();
  }

  
  
  // helper code, feel free to comment out
	textSize(15);
	fill(255);
	stroke(0);
	strokeWeight(2);
	text("x: " + int(mouseX) + " y: " + int(mouseY), 30, 30);
  
}