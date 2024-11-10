let table;
let submitButton
let canvas
let movieMenu

let imageArray = []
let movieDataArray = [];
let showTitleScreen = true
let startScreen;


function preload() {
 table = loadTable('js/rebPersonalData.csv', 'csv', 'header', loadImageArray)
 startScreen = loadImage('images/curateFilmScreen.png')


}

function loadImageArray(){
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'Poster'))
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
imageMode(CENTER)
  background(255, 124, 117);
  fill(255)

  //button
  for (let i = 0; i < table.getRowCount(); i++){
    title = String(table.getString(i, 'Movie Title'));
    director = String(table.getString(i, 'Director'));
    date = String(table.getString(i, 'Date of Release'));
    genre1 = String(table.getString(i, 'Genre (1)'));
    genre2 = String(table.getString(i, 'Genre (2)'));
    genre3 = String(table.getString(i, 'Genre (3)'));
    tomatoes = String(table.getString(i, 'Rotten Tomatoes'));
    castMember1 = String(table.getString(i, 'Cast Member (1)'));
    castMember2 = String(table.getString(i, 'Cast Member (2)'));
    castMember3 = String(table.getString(i, 'Cast Member (3)'));
    streamingService1 = String(table.getString(i, 'Streaming Service (1)'));
    streamingService2 = String(table.getString(i, 'Streaming Service (2)'));
    franchise = String(table.getString(i, 'Franchise?'));
    suggestedMovie = String(table.getString(i, 'Suggested Movie'));
    moviePoster = imageArray[i];
    movieDataArray.push(new movieData(title, director, date, genre1, genre2, genre3, tomatoes, castMember1, castMember2, castMember3, streamingService1, streamingService2, franchise, suggestedMovie,moviePoster));
  }

  //show each button for each data entry
  for (let i = 0; i < movieDataArray.length; i++){
    movieDataArray[i].show();
  }
}

//movie data class
class movieData{
  constructor(title, director, date, genre1, genre2, genre3, tomatoes, castMember1, castMember2, castMember3, streamingService1, streamingService2, franchise, suggestedMovie){
    this.title = title;
    this.director = director;
    this.date = date;
    this.genre1 = genre1;
    this.genre2 = genre2;
    this.genre3 = genre3;
    this.tomatoes = tomatoes;
    this.castMember1 = castMember1;
    this.castMember2 = castMember2;
    this.castMember3 = castMember3;
    this.streamingService1 = streamingService1;
    this.streamingService2 = streamingService2;
    this.franchise = franchise;
    this.suggestedMovie = suggestedMovie;
    this.moviePoster = moviePoster

      //create a button for each entry
    this.checkbox = createCheckbox(this.title)

    //position each button 50 pixels below the previous
    for(let i = -1; i < movieDataArray.length; i++){
      this.checkbox.position(50, i*55+100);
    }
    this.checkbox.style('z-index', '1');
  }


  show(){

  }

  // update the output for each entry after the button is clicked
  update(){

    if (this.checkbox.checked()) {

      showTitleScreen = false
      //update the variables to reflect the data tied to the button that was clicked
    image(startScreen,  windowWidth/2, windowHeight/2, 1100, 700)
    
    fill(100, 199, 67);
    noStroke();
    textSize(21);
    textAlign(CENTER, CENTER);
    text('Title: ' + this.title, windowWidth/2, 50 );
    text('Director: ' + this.director, windowWidth/2, 100)
    text('Date: ' + this.date, windowWidth/2, 150);
    text('Genre 1: ' + this.genre1, windowWidth/2, 200);
    text('Genre 2: ' + this.genre2, windowWidth/2, 250);
    text('Genre 3: ' + this.genre3, windowWidth/2, 300);
    text('Rotten Tomatoes: ' + this.tomatoes, windowWidth/2, 350);
    text('Cast Member 1: ' + this.castMember1, windowWidth/2, 400);
    text('Cast Member 2: ' + this.castMember2, windowWidth/2, 450);
    text('Cast Member 3: ' + this.castMember3, windowWidth/2, 500);
    text('Streaming Service 1: ' + this.streamingService1, windowWidth/2, 550);
    text('Streaming Service 2: ' + this.streamingService2, windowWidth/2, 600);
    text('Franchise? ' + this.franchise, windowWidth/2, 650);
    text('Suggested Movie: ' + this.suggestedMovie, windowWidth/2, 700);
    image(moviePoster, windowWidth/2, windowHeight/2, 200, 300)
    }else if (!this.checkbox.checked()){
     // image(startScreen, 0, 0, windowWidth, windowHeight)
    }
    
  }
}


function draw(){
    background(255, 124, 117);
    text((windowWidth/2 - mouseX) * -1 , 30, 30)
    text((windowHeight/2 - mouseY) *-1, 30, 60)
  if (showTitleScreen == true){
    image(startScreen,  windowWidth/2, windowHeight/2, 1100, 700)
  }
    for (let i = 0; i < movieDataArray.length; i++){
    movieDataArray[i].update();
    }
}






//title

//Select 5 Films You Like from My Favorites
//select box
//add info from each film clicked into an array

//film poster section
