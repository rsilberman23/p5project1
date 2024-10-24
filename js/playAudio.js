
let modem
let audioButton
let modemSlider
let modemRateSlider
let canvas
let audioLevel
let modemAmplitude
let mappedAmplitude
let t1000Video
let videoPlaying = false



function preload(){
modem = loadSound('audio/ModemSound.mp3')
}


function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0)
canvas.style("z-index", "-1")

audioButton = createButton('Play Modem')
audioButton.mousePressed(playToggle)

videoButton = createButton('Play Video')
videoButton.mousePressed(playVideo)

modemAmplitude = new p5.Amplitude()
micInput = new p5.AudioIn()

modemSlider = createSlider(0, 3, 1, 0.01)

modemRateSlider = createSlider(0, 2, 1, 0.01)
t1000Video = createVideo(['t1000Video'])
t1000Video.style("width", "540px")
t1000Video.style("height", "360px")


}

function playToggle(){
if(!modem.isPlaying()){
modem.loop()
audioButton.html("Pause Audio")

}else{
modem.pause()
audioButton.html("Play Audio")
}
}

function playVideo(){
	if(videoPlaying){
		t1000Video.pause()
		videoButton.html('Play Video')
	} else{
		t1000Video.play()
		videoButton.html('Pause Video')
	}

	videoPlaying !=
}

function draw(){
let audioMapped = map(mouseX, 0, windowWidth, 0, 2)
modem.setVolume(modemSlider.value())
modem.rate(modemRateSlider.value())

mappedAmplitude = modemAmplitude.getLevel() * 1000
ellipse(windowWidth/2, windowHeight/2, mappedAmplitude)

micInput = modemAmplitude.getLevel()




// if(mouseX> windowWidth/2 && !modem.isPlaying()){
// modem.loop()
// }else if(mouseX< windowWidth/2 && modem.isPlaying()){
// modem.pause()
// }


}