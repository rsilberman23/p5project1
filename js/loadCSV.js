let table;
let submitButton
let canvas
let companyMenu

let imageArray = []


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header', loadImageArray);

}

function loadImageArray(){
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'image'))
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")

  background(0);
  fill(255)

  submitButton = createButton('Submit')
  submitButton.position(150, 50)
  companyMenu = createSelect()
  companyMenu.option('Select Company')
  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
    let date = table.getString(i, 'date');
    let location = table.getString(i, 'location')
    let company = table.getString(i, 'company')

    companyMenu.option(company)
    
    submitButton.mousePressed(changeData)
  }

}

function changeData(){

  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)
  for (let i = 0; i < table.getRowCount(); i++){
      if(companyMenu.value() == table.getString(i, 'company')){
        text(table.getString(i, 'company'), windowWidth/2, 50)
        text(table.getString(i, 'date'), windowWidth/2, 90)
        text(table.getString(i, 'location'), windowWidth/2, 130)
        text(table.getString(i, 'service'), windowWidth/2, 170)
        text(table.getString(i, 'frequency'), windowWidth/2, 200)
        for(let j = 0; j < table.getString(i, 'frequency'); j++){
          image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)
        }
      }
  }

}

function draw(){
//submitButton = createButton('Submit')
}


//let movieTitle = table.getString(i, 'Movie Title')
    //let director = table.getString(i, 'Director')
    //let dateOfRelease = table.getString(i, 'Date of Release');
    //let genre1 = table.getString(i, 'Genre (1)')
    //let genre2 = table.getString(i, 'Genre (2)')
    //let genre3 = table.getString(i, 'Genre (3)')
    //let rottenTomatoes = table.getString(i, 'Rotten Tomatoes')
    //let castMember1 = table.getString(i, 'Cast Member (1)')
    //let castMember2 = table.getString(i, 'Cast Member (2)')
    //let castMember3 = table.getString(i, 'Cast Member (3)')
    //let streamingService1 = table.getString(i, 'Streaming Service (1)')
    //let streamingService2 = table.getString(i, 'Streaming Service (2)')
    //let franchise = table.getString(i, 'Franchise?')
    //let suggestedMovie = table.getString(i, 'Suggested Movie')