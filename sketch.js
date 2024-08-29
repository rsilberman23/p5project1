let sun = 320
let dragon

function preload(){
dragon = loadImage('dragon.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
}

function draw() {

  //blue background
  background(158, 223, 255);

  //dragon image
  image(dragon, 800, 200)
  
  //sun
  fill(255, 198, 117);
  noStroke();
  ellipse(sun, 50, 250);
  fill(246, 252, 126);
  ellipse(sun, 50, 225);
  
  //bridge stands
  fill(54, 10, 16);
  rect(0, 300, 100, 500);
  rect(550, 300, 100, 500);
  
  //bridge lines
  stroke(1);
  strokeWeight(2);
  line(100, 400, 550, 400);
  

  //bridge
  line(100, 350, 550, 350);
  rect(92,350,10,50);
  rect(120,350,10,50);
  rect(150,350,10,50);
  rect(180,350,10,50);
  rect(210,350,10,50);
  rect(240,350,10,50);
  rect(270,350,10,50);
  rect(300,350,10,50);
  rect(330,350,10,50);
  rect(360,350,10,50);
  rect(390,350,10,50);
  rect(420,350,10,50);
  rect(450,350,10,50);
  rect(480,350,10,50);
  rect(510,350,10,50);
  rect(540,350,10,50);
  

  // mouse
  fill(43, 147, 255);
  ellipse(mouseX, mouseY, 20, 20);
  
  // water
  fill(15, 51, 255);
  noStroke();
  rect(100, 500, 450, 500);

  //print(mouseY)
  
  // moves water up
  if(mouseY > 500){
    fill(15, 51, 255);
    rect(100, 450, 450, 500)
    noStroke();
  }
// mouse is pressed
//  if(keyIsPressed == true){
//    x = 100
//    fill(255, 25, 52);
//    rect(100, 450, 450, 500);
//    noStroke();
//  } else {
//    fill(15, 51, 255);
//    rect(100, 450, 450, 500);
//    noStroke();
//      x = 600
//  }


}
