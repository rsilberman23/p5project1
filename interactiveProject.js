
let showStartScreen = true
let x = [];
let y = [];

//incorpoorates media files
function preload(){

spaceFilms = loadImage('spaceFilms.png')
desertFilms = loadImage('desertFilms.png')
oceanFilms = loadImage('oceanFilms.png')
space = loadImage('space.png')
ocean = loadImage('ocean.png')
desert = loadImage('desert.png')
startScreen = loadImage('screen1.png')
popcorn = loadImage('popcorn.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER)

  //incorporates for loop
  //randomizes position (for popcorn image)
  for(let i = 0; i < 50; i++){
    x.push(random(windowWidth))
    y.push(random(windowHeight))
  }
}

//incorporates conditional statements, mouse inputs, and media files
function draw() {
  //start screen shows initially
  if (showStartScreen){
    image(startScreen, 0, 0, windowWidth, windowHeight)
    //places popcorn image
    for(let i = 0; i < x.length; i++){
      image(popcorn, x[i], y[i], 20, 20)
    }
  } else {
    //app code once key function is activated
    background(255)
    let rectHeight = windowHeight/3

  //space 
    fill(138, 140, 161)
    rect(0, 0, windowWidth)
    //if mouse hovers over the space area, 
    //spaceFilm image appears
    image(space, 0, 0, windowWidth, rectHeight)
    if (mouseY < rectHeight){
      image(spaceFilms, 0, 0, windowWidth, rectHeight)
    }

  //ocean
    fill(5, 117, 245)
    rect(0, rectHeight, windowWidth, rectHeight)
    image(ocean, 0, rectHeight, windowWidth, rectHeight)
    //if mouse hovers over the ocean area, 
    //oceanFilm image appears
    if(mouseY > rectHeight && mouseY < rectHeight * 2){
      image(oceanFilms, 0, rectHeight, windowWidth, rectHeight)
    }



  //desert
    fill(250, 207, 142)
    rect(0, rectHeight * 2, windowWidth, rectHeight)
    image(desert, 0, rectHeight * 2, windowWidth, rectHeight)
    //if mouse hovers over the desert area, 
    //desertFilms image appears
    if(mouseY > rectHeight * 2){
      image(desertFilms, 0, rectHeight * 2, windowWidth, rectHeight)
    }

  }
  
}


//incorporates key inputs & conditional statement
function keyPressed(){
  //if B is pressed, app begins
  if(key === 'B'|| key === 'b'){
    showStartScreen = false;
  //if R is pressed, start screen reappears
  } else if (key === 'R'|| key === 'r'){
    showStartScreen = true;
  }
}



//NEEDED: for loop, conditional statement, 
//media file, key input, AND mouse input

//x, y, w, h








