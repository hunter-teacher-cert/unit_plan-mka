//create a variable to hold your sprite
let cat;

function setup() {
  createCanvas(500, 500);

  //type out the "8 Bit" Character you designed as a string
  let txt = `
.y....y.
yyy..yyy
yyyyyyyy
yyyyyyyy
yybyybyy
yyyyyyyy
.yyrryy.
..yyyy..
`;
  
//Extension, create a custom color palette
  let palette = {
  'y': color(255, 225, 53),
  'b': color(50),
  'r': color(255, 69, 0),
};

//create an variable called 'img' which will hold the image that the text was converted to.
let img = spriteArt(txt, 16, palette);
  
  //create a new sprite and store it in the variable you created in step 1, pass in the img as a property..
  cat = new Sprite(img);

  //run the code! You should see your sprite!
}

function draw() {
  clear();
}
