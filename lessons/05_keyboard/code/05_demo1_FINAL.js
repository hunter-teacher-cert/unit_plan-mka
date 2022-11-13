//PROVIDE: starter code with a preload, setup and draw function;
let p1, kirby;

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
  //REVIEW: How can I create a sprite? How can I make the appearance be the kirby animation?
  p1 = new Sprite(kirby);

  //PLAY: See the sprite in the middle of the screen, with animation applied
  //Too Fast, review how to to slow down an animation.
  p1.animation.frameDelay = 8;
  
  console.log(kb);
  //debugger;
}

function draw() {
  //REVIEW: What does this do? What happens if I delete it?
  clear();
  

  //VERSION 1 : Make the sprite move left
  // if(kb.pressing('right')){
  //   p1.vel.x = 1; //ASK: How could I make Kirby move faster?
  // }

  //OOPS! How to I get Kirby to stop?
  //VESION 2 : right only when pressing
  // if(kb.pressing('right')){
  //    p1.vel.x = 1; //ASK: How could I make Kirby move faster?
  // } else {
  //   p1.vel.x = 0;
  // }

  //VERSION 3 : left and right
  //ASK : I want kirby to als be able to move left and right, anyone got an idea?
  // if (kb.pressing("right")) {
  //   p1.vel.x = 5; //ASK: How could I make Kirby move faster?
  // } else if (kb.pressing("left")) {
  //   //ASK : what should the velocity be to make Kirby move left?
  //   p1.vel.x = -5;
  // } else {
  //   p1.vel.x = 0;
  // }

  //ASK : What changes would you want to make? Start/Stop Animation, flip directions.
  //VERSION 4 : Bells and whistles!
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
