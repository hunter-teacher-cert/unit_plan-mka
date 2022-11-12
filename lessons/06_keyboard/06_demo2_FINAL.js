//PROVIDE: kirby can already move, we are going to make walls to keep kirby in the screen.

//SAY : We have a problem! Kirby can leave the game forever!
let p1, kirby;

let obstacle;

//ADD variables for the walls.
let leftWall, rightWall; //variable for the whiles.

function preload() {
  kirby = loadAnimation(
    "assets/kirby_walking_0001.png",
    "assets/kirby_walking_0002.png",
    "assets/kirby_walking_0003.png",
    "assets/kirby_walking_0004.png",
    "assets/kirby_walking_0005.png",
    "assets/kirby_walking_0000.png"
  );

  //if you are using replit, you can load an animation like this:
  //starAni = loadAnimation('./assets/pixil-frame-1.png', 8);
}

function setup() {
  createCanvas(800, 400);
  
  //SAY : on day 1, you create sprites that didn't move
  //ASK : how could we create an obstacle that stops kirby?
  //generate this will students!
  //VERSION 1 : something in the way
  //obstacle = new Sprite(100, 200, 20, 50);
  //obstacle.collider = 'static';
  
  //VERSION 2 : move the change the size of the obstacle to make it a wall at the left side of the screen.
  //Generate the size and position of the wall with the students.
  obstacle = new Sprite(-5, height/2, 10, height);
  obstacle.collider = 'static';
  
  
  p1 = new Sprite(kirby);
  p1.animation.frameDelay = 8;  
}

function draw() {
  clear();

  //PROVIDE : Kirby can move!
  if (kb.pressing("right")) {
    p1.vel.x = 5; //ASK: How could I make Kirby move faster?
    p1.animation.play();
    p1.mirror.x = false;
  } else if (kb.pressing("left")) {
    //ASK : what should the velocity be to make Kirby move left?
    p1.animation.play();
    p1.vel.x = -5;
    p1.mirror.x = true; //flip direction, OOPS! : now he won't turn around
  } else {
    p1.vel.x = 0; 
    p1.animation.stop(); //stop animation when not moving
    p1.animation.frame = 0; //set to the first frame
  }

  p1.debug = mouse.holding();
}
