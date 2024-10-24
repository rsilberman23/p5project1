let table;
let submitButton
let canvas
let movieMenu

let imageArray = []


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  //table = loadTable('js/rebPersonalData.csv', 'csv', 'header', loadImageArray);
 table = loadTable('js/rebPersonalData.csv', 'csv', 'header')
}

//function loadImageArray(){
  //for (let i = 0; i < table.getRowCount(); i++){
    //imageArray[i] = loadImage("images/" + table.getString(i, 'image'))
  //}
//}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")

  background(0);
  fill(255)

  // submitButton = createButton('Submit')
  // submitButton.position(150, 50)
  movieMenu = createSelect()
  movieMenu.option('Select Movie')
  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
    let date = table.getString(i, 'Date of Release');
   // let location = table.getString(i, 'location')
    let movie = table.getString(i, 'Movie Title')

    movieMenu.option(movie)
    //checkbox = createCheckbox(' white');
   // submitButton.mousePressed(changeData)
    movieMenu.changed(changeData)
  }

}
 function draw(){

 }

function changeData(){
  // movieSelections ++
  //  if(movieSelections == 5){
  //   profileFunction
  // }
  background(0)
  textSize(30)
  textAlign(RIGHT)
  imageMode(CENTER)
  for (let i = 0; i < table.getRowCount(); i++){
      if(movieMenu.value() == table.getString(i, 'Movie Title')){
        text("Movie Title: " + table.getString(i, 'Movie Title'), windowWidth/2, 50)
        text("Director: " + table.getString(i, 'Director'), windowWidth/2, 90)
        text("Date of Release: " + table.getString(i, 'Date of Release'), windowWidth/2, 130)
        text("Genre (1): " + table.getString(i, 'Genre (1)'), windowWidth/2, 170)
        text("Genre (2): " + table.getString(i, 'Genre (2)'), windowWidth/2, 210)
        text("Genre (3): " + table.getString(i, 'Genre (3)'), windowWidth/2, 250)
        text("Rotten Tomatoes: " + table.getString(i, 'Rotten Tomatoes'), windowWidth/2, 290)
        text("Cast Member (1): " + table.getString(i, 'Cast Member (1)'), windowWidth/2, 330)
        text("Cast Member (2): " + table.getString(i, 'Cast Member (2)'), windowWidth/2, 370)
        text("Cast Member (3): " + table.getString(i, 'Cast Member (3)'), windowWidth/2, 410)
        text("Streaming Service (1): " + table.getString(i, 'Streaming Service (1)'), windowWidth/2, 450)
        text("Streaming Service (2): " + table.getString(i, 'Streaming Service (2)'), windowWidth/2, 490)
        text("Franchise?: " + table.getString(i, 'Franchise?'), windowWidth/2, 530)
        text("Suggested Movie: " + table.getString(i, 'Suggested Movie'), windowWidth/2, 570)
        for(let j = 0; j < table.getString(i, 'frequency'); j++){
          image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)
        }
      }
  }

}