let table;
let submitButton
let canvas
let movieMenu

let startButton

let imageArray = []
let movieDataArray = [];
let secondScreenBool =false;
let firstScreenBool = true;
let thirdScreenBool =false;

let choiceCounter = 0
let userGenreArray = []
let userGenre2Array = []
let suggestedMovieArray = []

function preload() {
 table = loadTable('js/DataWithImages.csv', 'csv', 'header', loadImageArray)
 secondScreen = loadImage('images/secondScreen.png')
 firstScreen = loadImage('images/firstScreen.png')
 thirdScreen = loadImage('images/thirdScreen.png')
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

  startButton = createButton("Begin")
  startButton.mousePressed(chooseMovies)
  startButton.position(windowWidth/2, windowHeight/2 + 200)
  startButton.style("z-index", "1")
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
  // for (let i = 0; i < movieDataArray.length; i++){
  //   movieDataArray[i].show();
  // }

}


function introScreen(){

image(firstScreen, windowWidth/2, windowHeight/2)
}

function chooseMovies(){
  background(255, 124, 117);
  firstScreenBool = false
  secondScreenBool = true
  startButton.hide()

  for (let i = 0; i < movieDataArray.length; i++){
    movieDataArray[i].show();
  }
}

function finalScreen(){
  for (let i = 0; i < movieDataArray.length; i++){
    movieDataArray[i].hideButtons();
  }
  image(thirdScreen, windowWidth/2, windowHeight/2)
  toThirdScreenButton = createButton("I'm done choosing my favorite films")
  toThirdScreenButton.position(windowWidth/2 + 565, windowHeight/2 +109)
  toThirdScreenButton.mousePressed(thirdScreen)
  toThirdScreenButton.show()
}


function draw(){
 
  print("X" + (windowWidth/2 - mouseX) * -1 , 30, 30)
  print("y" + (windowHeight/2 - mouseY) *-1, 30, 60)

  if(firstScreenBool == true){
    introScreen()
  }

  if(secondScreenBool == true){
   // chooseMovies()
  }

  if(thirdScreenBool == true){
    finalScreen()
  }

}


//movie data class
class movieData{
  constructor(title, director, date, genre1, genre2, genre3, tomatoes, castMember1, castMember2, castMember3, streamingService1, streamingService2, franchise, suggestedMovie, moviePoster){
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
    this.button = createButton(this.title)

    //position each button 50 pixels below the previous
    for(let i = -1; i < movieDataArray.length; i++){
      this.button.position(230, i*25+330);
    }
    this.button.style('z-index', '1');
    this.button.hide()
  }

  show(){
    this.button.show()
    //when the button is pressed trigger the update function
    //to update the data entry
    this.button.mousePressed(() => this.update())
    image(secondScreen,  windowWidth/2, windowHeight/2, 1100, 700)
  }

  hideButtons(){
     this.button.hide()
  }

  // update the output for each entry after the button is clicked
  update(){
    choiceCounter ++
    if(choiceCounter <= 5){

    userGenreArray.push(this.genre1)
    userGenre2Array.push(this.genre2)
    suggestedMovieArray.push(this.suggestedMovie)

    background(255, 124, 117);
      //update the variables to reflect the data tied to the button that was clicked
    image(secondScreen,  windowWidth/2, windowHeight/2, 1100, 700)
    
    fill(0, 0, 0);
    noStroke();
    textSize(21);
    textAlign(LEFT);

    text('Title: ' + this.title, windowWidth/2 -141, windowHeight/2 +180 );
    text('Director: ' + this.director, windowWidth/2 -141, windowHeight/2 +210)
    text('Date: ' + this.date, windowWidth/2 -141, windowHeight/2 + 240);
    //text('Genre 1: ' + this.genre1, windowWidth/2, 200);
    //text('Genre 2: ' + this.genre2, windowWidth/2, 250);
    //text('Genre 3: ' + this.genre3, windowWidth/2, 300);
    text('Rotten Tomatoes: ' + this.tomatoes, windowWidth/2 -141, windowHeight/2 + 270);
    //text('Cast Member 1: ' + this.castMember1, windowWidth/2, 400);
    //text('Cast Member 2: ' + this.castMember2, windowWidth/2, 450);
    //text('Cast Member 3: ' + this.castMember3, windowWidth/2, 500);
    //text('Streaming Service 1: ' + this.streamingService1, windowWidth/2, 550);
    //text('Streaming Service 2: ' + this.streamingService2, windowWidth/2, 600);
    //text('Franchise? ' + this.franchise, windowWidth/2, 650);
    //text('Suggested Movie: ' + this.suggestedMovie, windowWidth/2, 700);
    image(this.moviePoster, windowWidth/2, windowHeight/2, 200, 300)
    // }else if (!this.checkbox.checked()){
    //  // image(secondScreen, 0, 0, windowWidth, windowHeight)
    // }
    this.button.hide()
    for(let i = 0; i < userGenreArray.length; i++){
      text(userGenreArray[i], windowWidth/2 +195, windowHeight/2 -140 + (i*25+55))
    }
    for(let i = 0; i < userGenre2Array.length; i++){
      text(userGenre2Array[i], windowWidth/2 +350, windowHeight/2 -140 + (i*25+55))
    }
    for(let i = 0; i < suggestedMovieArray.length; i++){
      text(suggestedMovieArray[i], windowWidth/2 +203, windowHeight/2 +135 + (i*25+55))
    }
    } else{
      
    }
  }
}

//where do i input the code: if choiceCounter
//recommendation algorithms
//change my screen to rectangles and shapes not images
//need to integrate my firstScreen
//create button on firstScreen to get to secondScreen
//if counter >5, toThirdScreenButton appears
//create toThirdScreenButton that gets you to thirdScreen
//if genre comes up more than once, blurb will appear on thirdScreen
//   about the type of person you are...
//create button to get back to firstScreen
