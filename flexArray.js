

let x = []
let y = []

let furby
function preload(){
furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)

	for(let i = 0; i < 20; i++){
		x.push(random(windowWidth))
		y.push(random(windowHeight))
	}
}

function draw(){

	background(255)
	for(let i = 0; i < x.length; i++){
		image(furby, x[i], y[i], 40, 40)
		if(dist(mouseX, mouseY, x[i], y[i]) < 20){
			x.splice(i, 1);
			y.splice(i, 1);
		}
	}
}

function keyPressed(){
	
	// pressing a adds a furby
	if(key === 'a'){
		x.push(random(windowWidth))
		y.push(random(windowHeight))
	}
	// pressing x deletes all furbys
	if(key === 'x'){
		x.splice(0, x.length)
		y.splice(0, y.length)
	}

}

//check to see if mouse is over this object
