let p1, flappy;

function preload() {
  flappy = loadAnimation(
    "assets/flappy-1.png",
    "assets/flappy-2.png",
    "assets/flappy-3.png",
    "assets/flappy-4.png",
  );

  //if you are using replit, you can load an animation like this:
  //starAni = loadAnimation('./assets/pixil-frame-1.png', 8);
}

function setup() {
  createCanvas(800, 400);
  
  //1 - Create a new sprite for p1, give it the flappy animation.
  p1 = new Sprite(flappy);
}

function draw() {
  clear();
  
  // 2 - Make the bird move up and down with the keyboard.
  
  // Challenge - Stop and Stop animation when the keys are being pressed.
  
  // Boss Level!
  // In setup() - Create a second sprite for a second player. 
  // give player 2 the same animation, but point it the other way.
  
  // in draw() - Make this new sprite also move up and down but different keys.
  // HINT: JIKL are used for player 2 movement.
  // a is set to "left", and is usually used for player 1
  // j is set to "left2" and can be used to move player 2
}
