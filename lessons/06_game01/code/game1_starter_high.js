//OBJECTIVE: 
// - An obstacle sprite falls from the top of the screen
// - A player sprite tries to avoid the enemy
// - When the obstacle its the bottom of the screen, points go up and the obstacles falls again from a new location.

// Create variables for obstacle, player, and the score.

function setup() {
  createCanvas(800, 400);
 
  //create the obstacle sprite
  //set the y velocity so it falls down. TEST!
  //set its y position to the top of the screen. TEST!
  //set its x position to a random position.
 
  //create the player sprite.
  //set it location to the bottom of the screen. TEST!
}

function draw() {

  clear();
  //display the score
  
  //use the keyboard to move the player left and right.
  //if the keys are not being pressed, the player should stay still.
  

  // If the obstacle gets to the bottom of the screen:
  // reset y position to be at the top of the screen
  // reset x position to a new random postion.
  // add a point to the score.

  // If the player overlaps with the obstacle, game is over!
  // remove both sprites
  // display text that says game over
  // Stop the loop.
}

// Did you get this far?
// Add wall sprites with static colliders to keep the sprite in the screen.
// Add a coin sprite that also falls, but if the player overlaps with it they get points!