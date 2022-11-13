var dotList //variable to hold the group of dot sprites
var player1 //variable for sprite that is NOT part of a group

function setup() {
  new Canvas(800, 400);
  
  dotList = new Group() //creation of group
  
  // OPTION 1:
  //this for loop iterates and adds a new sprite to the dotList (30 in total because of the condition) and makes it appear on the canvas
  for (var i=0; i<30; i+=1) {
    new dotList.Sprite(i*20,25,10)
  }
  
  //OPTION 2
  //this for loop iterates and adds a new sprite to the dotList every 20 pixels along the x axis until there is no more room.
  for (var j=0; j<width; j+=20) {
    new dotList.Sprite(j,50,10)
  }
  
  //you can change a property of the sprites by using dot notation.
  dotList.color = "pink"
  
  //you can change a single sprite by using indexing and dot notation
  dotList[8].color = "blue"
  
  player1 = new Sprite()
}

  

function draw() {
  background(255); 
  
  //you can move dots just as you can move sprites -- this must happen in the draw function!
  // dotList.moveTowards(mouse.x, mouse.y)
  
  player1.moveTowards(mouse.x,mouse.y) //lets see how the sprite interacts with the group elements.

}

