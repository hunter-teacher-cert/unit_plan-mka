//note, you will need the assets for this to work 

let p1, meteor, rock, flappy;
let playing = true;
let points = 0;


function preload() {
  flappy = loadAnimation(
    "assets/flappy-1.png",
    "assets/flappy-2.png",
    "assets/flappy-3.png",
    "assets/flappy-4.png"
  );

  rock = loadImage("./assets/rock.png");
}

function setup() {
  createCanvas(800, 400);

  //1 - Create a new sprite for p1, give it the flappy animation.
  p1 = new Sprite(flappy, 200, height / 2);

  meteor = new Sprite(rock, width, random(height));
  meteor.vel.x = -5;
}

function draw() {
  clear();

  if (playing) {
    background("#FFF");
    text(points, 20, 20)

    if (kb.pressing("up")) {
      p1.vel.y = -5;
      p1.animation.frameDelay = 2; //flap faster!
    } else if (kb.pressing("down")) {
      p1.vel.y = 5;
      p1.animation.stop(); //make it look like sprite is falling!
    } else {
      p1.vel.y = 0;
      p1.animation.play();
      p1.animation.frameDelay = 10;
    }

    //see if the rock has hit the edge
    if (meteor.x <= 0) {
      meteor.x = width + 50;
      meteor.y = random(height);
      points++; //increase the points
      meteor.vel.x -= 0.5; //moving left, this will make it a little faster
      //limit to a top speed
      if(meteor.vel.y > 30) meteor.vel.y = 30;
    }
    
    if(p1.colliding(meteor)) {
      playing = false;
      p1.remove();
      meteor.remove();
    }  
  } else {
    text("Game Over", width / 2, height / 2);
  }
}

