//create a variable for the sprite and the animation
let star, starAni;

//it is smart to preload images so there is no delay.
function preload() {
  // create an animation from a sequence of numbered images
  //if you are using the p5 web editor you have to loadAnimation like this:
  starAni = loadAnimation(
                    'assets/pixil-frame-0.png',
                     'assets/pixil-frame-1.png',
                     'assets/pixil-frame-2.png',
                     'assets/pixil-frame-3.png',
                     'assets/pixil-frame-4.png',
                     'assets/pixil-frame-5.png',
                     'assets/pixil-frame-6.png',
                     'assets/pixil-frame-7.png');
  
  //if you are using replit, you can load an animation like this:
  //starAni = loadAnimation('./assets/pixil-frame-1.png', 8);
}

function setup() {
  createCanvas(200, 200);
  //create a new sprite, add the star animation
  star = createSprite(starAni);
  
  //defines how many p5 frames before the next animation image.
  //star.animation.frameDelay = 10;
  
  //stop the animation
  // star.animation.stop();
}

function draw() {
 clear();
  // if the user presses p, start the animation
  // if the user presses s, stop the animation.
	if (kb.presses('p')) {
		star.animation.play();
	} else if (kb.presses('s')) {
		star.animation.stop();
	}
  
  //magic sauce! this will replace the animation with the rect or circle representing the sprite.
  star.debug = mouse.holding();
}


