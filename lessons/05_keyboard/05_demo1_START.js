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
 
  //PLAY: See the sprite in the middle of the screen, with animation applied
  //Too Fast?!, review how to to slow down an animation.

}

function draw() {
  //REVIEW: What does this do? What happens if I delete it?
  clear();
  
  //VERSION 1 : Make the sprite move left
  
  //VESION 2 : right only when pressing
 
  //VERSION 3 : left and right
  
  //VERSION 4 : Bells and whistles!
  
  //This is helpful! When the mouse is down sprite's bounding box only.
  p1.debug = mouse.holding();
}
