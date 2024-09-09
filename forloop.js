let furby

function preload(){

}

function setup(){
createCanvas(windowWidth, windowHeight)
//i is a local variable


for(let i = 0; i < 100; i++){
ellipse(random(windowWidth), random(windowHeight), 20 , 20)
//print(i)
}
}

function draw(){
background(100, 100, 200)
for(let i = 0; i<windowWidth;i=i+30){
line(0, 0, i, windowHeight)
}
for(let i = 0; i<windowHeight; i=i+10){
line(0, i, windowWidth, 0)
}
}