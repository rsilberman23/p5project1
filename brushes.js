
let ellipseBrushBool = false
let rectBrushBool = false

function setup(){
createCanvas(windowWidth, windowHeight)
rectMode(CENTER)

}


function draw(){

	if(ellipseBrushBool == true){
		ellipseBrush();
	}

	if(rectBrushBool == true){
		rectBrush()
	}
}

function keyPressed(){
	if(key === 'e'){
		ellipseBrushBool = true
		rectBrushBool = false
	}

	if(key === 'r'){
		ellipseBrushBool = false
		rectBrushBool = true
	}
	if(key === 'c'){
		ellipseBrushBool = false
		rectBrushBool = false
	}
}

function ellipseBrush(){
 fill(random(255), random(255), random(255))
 ellipse(mouseX, mouseY, 50, 50)
}


function rectBrush(){
 fill(random(255), random(255), random(255))
 rect(mouseX, mouseY, 40, 40)
}