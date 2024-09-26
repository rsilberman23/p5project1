
let xPos 
let yPos

let xSpeed = 2
let ySpeed = 2

let r = 255
let g = 255
let b = 255

let ballDiameter = 75

let furby
function preload(){
 furby = loadImage('furby.png')
}

function setup(){
createCanvas(windowWidth, windowHeight)

xPos = windowWidth/2
yPos = windowHeight/2
imageMode(CENTER)

}


function draw(){
	background(0)
	fill(255)
	text('Bouncing Ball Screensaver', 100, 100)

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	fill(r, g, b)
	image(furby, xPos, yPos, ballDiameter, ballDiameter )
	//ellipse(xPos, yPos, ballDiameter, ballDiameter)
	//ellipse(windowWidth, windowHeight/2, 50, 50)
	if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
		r = random (255)
		g = random (255)
		b = random (255)
		xSpeed = xSpeed * -1
	
	}

	if(yPos >= windowHeight - ballDiameter/2 || yPos <= ballDiameter/2){
		r = random (255)
		g = random (255)
		b = random (255)
		ySpeed = ySpeed * -1
	
	}
	//fill(255)
	ellipse(mouseX, mouseY, 50, 50)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

