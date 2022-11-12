let p1, p2, flappy;

function preload() {
  flappy = loadAnimation(
    "assets/flappy-1.png",
    "assets/flappy-2.png",
    "assets/flappy-3.png",
    "assets/flappy-4.png"
  );

  //if you are using replit, you can load an animation like this:
  //starAni = loadAnimation('./assets/pixil-frame-1.png', 8);
}

function setup() {
  createCanvas(800, 400);

  //1 - Create a new sprite for p1, give it the flappy animation.
  p1 = new Sprite(flappy, 200, height/2);
  
  //for boss!
  p2 = new Sprite(flappy, width - 200, height/2);
  p2.mirror.x = true;
}

function draw() {
  clear();

  // 2 - Make the bird move up and down with the keyboard.
  // Challenge - Stop and Stop animation when the keys are being pressed.
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
  
  // Boss Level!
  // In setup() - Create a second sprite for a second player.
  // give player 2 the same animation, but point it the other way.

  // in draw() - Make this new sprite also move up and down but different keys.
  // HINT: JIKL are used for player 2 movement.
  // a is set to "left", and is usually used for player 1
  // j is set to "left2" and can be used to move player 2
  if (kb.pressing("up2")) {
    p2.vel.y = -5;
    p2.animation.frameDelay = 2; //flap faster!
  } else if (kb.pressing("down2")) {
    p2.vel.y = 5;
    p2.animation.stop(); //make it look like sprite is falling!
  } else {
    p2.vel.y = 0;
    p2.animation.play();
    p2.animation.frameDelay = 10;
  }
}
