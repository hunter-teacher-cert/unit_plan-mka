let enemy, hero, coins;
let playing = true;
let score = 0;
let leftWall, rightWall;

function setup() {
  createCanvas(800, 400);
  enemy = new Sprite();
  enemy.diameter = 40;
  
  leftWall = new Sprite(-10, height/2, 10, height);
  leftWall.collider = 'static';
  
  
  rightWall = new Sprite(width+10, height/2, 10, height);
  rightWall.collider = 'static';


  let c = color(0, 255, 0);
  enemy.color = c
  enemy.x = random(width);
  enemy.y = 0;
  enemy.vel.y = 5;

  hero = new Sprite();
  hero.width = 40;
  hero.height = 40;
  hero.y = height - 20;

  coin = new Sprite();
  coin.diameter = 20;
  c = color(255, 217, 0);

  coin.color = c;
  coin.x = random(width);
  coin.vel.y = 5;
}

function draw() {

  clear();

  //display the score
  text(score, 20, 20);


  if(playing){
    //follow the mouse x only
    // hero.moveTowards(
    //   mouse.x + hero.mouse.x,
    //   height - 20,
    //   0.1 //lower the tracking to make it somewhat difficult
    // )


    //keyboard movement
    if (kb.pressing('left')) {
      hero.vel.x = -10;
    } else if(kb.pressing('right')){
      hero.vel.x = 10;
    }
    //decelerate, playing on ice
    hero.vel.x = hero.vel.x * 0.95;

    // console.log(hero.vel.x);


    //is the enemy at the bottom of the screen?
    if(enemy.y > height){
      enemy.y = 0; //reset to the top of screen
      enemy.x = random(width); //new random postion

      enemy.vel.y += 0.1; //make it harder
      //limit the velocity to 30
      if(enemy.vel.y > 30) enemy.vel.y = 30;
    }


    if(coin.y > 2 * height){
      coin.y = 0;
      coin.x = random(width);
    }

    if(hero.colliding(enemy)) {
      playing = false;
      hero.remove();
      enemy.remove();
    }

    if(hero.overlaps(coin)) {
      coin.y = 0;
      coin.x = random(width);
      score++;
    }
  } else  {
    text("game over", width/2, height/2);
  }
}
