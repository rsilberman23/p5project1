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
// let camImage;
let cookiesImage;
let warningImage;
let scienceAdImage;
let actionAdImage;
let dramaAdImage;
let paramountAdImage;
let maxAdImage;
let disneyAdImage;
let appleAdImage;
let peacockAdImage;
let netflixAdImage;
let primeAdImage;

let choiceCounter = 0
let userGenreArray = []
let userGenre2Array = []
let suggestedMovieArray = []
let userGenre3Array = []
let castMember1Array = []
let castMember2Array = []
let streamingService1Array = []
let streamingService2Array = []
let franchiseArray = []
let titleArray = []

function preload() {
 table = loadTable('js/DataWithImages.csv', 'csv', 'header', loadImageArray)
 secondScreen = loadImage('images/secondScreen.png')
 firstScreen = loadImage('images/backgroundColor.png')
 thirdScreen = loadImage('images/backgroundColor.png')
 // camImage = loadImage('images/cam.png')
 warningImage = loadImage('images/warning.png')
 scienceAdImage = loadImage('images/scienceAd.png')
 actionAdImage = loadImage('images/actionAd.png')
 dramaAdImage = loadImage('images/dramaAd.png')
 paramountAdImage = loadImage('images/paramountAd.png')
 maxAdImage = loadImage('images/maxAd.png')
 disneyAdImage = loadImage('images/disneyAd.png')
 appleAdImage = loadImage('images/appleAd.png')
 peacockAdImage = loadImage('images/peacockAd.png')
 netflixAdImage = loadImage('images/netflixAd.png')
 primeAdImage = loadImage('images/primeAd.png')
 cookiesImage = loadImage('images/cookies.png')
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

  startButton = createButton("Accept Cookies and Begin")
  startButton.mousePressed(chooseMovies)
  startButton.position(windowWidth/2 - 120, windowHeight/2 + 280)
  // startButton.position(windowWidth/2 - startButton.width/2, windowHeight/2 + 200 - startButton.height /2)
  startButton.style("z-index", "1")
  startButton.style('background-color', 'white')
  startButton.style('padding', '12px 24px')
  startButton.style('border', '2px solid black')

  //create button in setup otherwise you'll be creating a bunch
  //buttons in the draw loop
  toThirdScreenButton = createButton("Continue")
  toThirdScreenButton.position(windowWidth/2 + 600, windowHeight/2 + 300)
  toThirdScreenButton.style("z-index", "1");
  toThirdScreenButton.style('background-color', 'white')
  toThirdScreenButton.style('border', '2px solid black')
  toThirdScreenButton.mousePressed(finalScreen)
  toThirdScreenButton.hide()

  restartButton = createButton("Restart");
  restartButton.position(windowWidth/2 + 600, windowHeight/2 + 300)
  restartButton.style("z-index", "1");
  restartButton.style('background-color', 'white')
  restartButton.style('border', '2px solid black')
  restartButton.mousePressed(introScreen)
  restartButton.hide()

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
  startButton.show();
  restartButton.hide();
   firstScreenBool = true;
  secondScreenBool = false;
  thirdScreenBool = false;
 choiceCounter = 0;
  userGenreArray = [];
  userGenre2Array = [];
  userGenre3Array = [];
  suggestedMovieArray = [];
  castMember1Array = [];
  castMember2Array = [];
  streamingService1Array = [];
  streamingService2Array = [];
  franchiseArray = [];
  titleArray = [];

  background(255, 124, 117);
//image(firstScreen, windowWidth/2, windowHeight/2)
fill(252, 252, 252)
stroke(0)
strokeWeight(6)
rect(windowWidth/2 - 635, windowHeight/2 - 270, 1270, 170);
//stroke(0)
strokeWeight(1)
textSize(70)
fill(0, 0, 0)
textAlign(CENTER)
//text("Curate Your Film Profile", windowWidth/2 - 300, windowHeight/2 - 165);
text("Curate Your Film Profile", windowWidth/2, windowHeight/2 - 165);

fill(252, 252, 252)
//stroke(0)
strokeWeight(6)
rect(windowWidth/2 - 635, windowHeight/2 - 85, 1270, 170);

strokeWeight(1)
textSize(38)
fill(0, 0, 0)
text("Choose 5 films from my favorites and your profile will be displayed", windowWidth/2, windowHeight/2 + 10)
//print("intro")

image(cookiesImage, windowWidth/2, windowHeight/2 + 180, 200, 170)

}

function chooseMovies(){
  //secondScreenBool = true;
  background(255, 124, 117);
  firstScreenBool = false
  secondScreenBool = true
  startButton.hide()

  for (let i = 0; i < movieDataArray.length; i++){
    movieDataArray[i].show();
  }
  fill(252, 252, 252)
strokeWeight(4)
  rect(windowWidth/2 - 500, windowHeight/2 - 180, 310, 510);
  strokeWeight(1)
  textSize(30)
  fill(0, 0, 0)
  //textAlign(left)
  strokeWeight(1)
  text("Films to Select From", windowWidth/2 - 545, windowHeight/2 - 165, 400, 400);
  
  //poster box
  strokeWeight(4)
  fill(252, 252, 252)
  rect(windowWidth/2 - 155, windowHeight/2 - 180, 310, 510);
  

  //genres you like box
  fill(252, 252, 252)
  strokeWeight(4)
  rect(windowWidth/2 + 190, windowHeight/2 - 180, 310, 250);
  fill(0,0,0)
  strokeWeight(1)
  text("Films You Chose", windowWidth/2 + 145, windowHeight/2 - 165, 400, 400);

  //Suggested Films for you
  fill(252, 252, 252)
  strokeWeight(4)
  rect(windowWidth/2 + 190, windowHeight/2 + 90, 310, 240);
  fill(0,0,0)
  strokeWeight(1)
  text("Suggested Films", windowWidth/2 + 145, windowHeight/2 + 105, 400, 400);
  textSize(12)
  text("Cookies being collected...", windowWidth/2 - 545, windowHeight/2 + 300, 400, 400);
}

function finalScreen(){
  toThirdScreenButton.hide();
  thirdScreenBool = true;
  // firstScreenBool = true;
  for (let i = 0; i < movieDataArray.length; i++){
    movieDataArray[i].hideButtons();
  }
  background(255, 124, 117);
  // image(camImage, windowWidth/2 - 330, windowHeight/2 + 188, 500, 350)
  fill(255, 211, 89)
  rect(windowWidth/2 - 100, windowHeight/2 - 325,800,675);
  fill(0, 0, 0)
  strokeWeight(6)
  textSize(38)
  // textAlign(CENTER)
  text("Your Film Profile", windowWidth/2 - 50,windowHeight/2 - 250);
  fill(0, 0, 0, 255);
  textSize(24)
  strokeWeight(2)
  textStyle(NORMAL)
  text('You tend to like this genre: ' + userGenreArray[0], windowWidth/2 - 50, windowHeight/2 - 200);
  text('And you also like this genre: ' + userGenre2Array[0], windowWidth/2 - 50, windowHeight/2 - 165);
  text('You might even like this genre: ' + userGenre3Array[0], windowWidth/2 - 50, windowHeight/2 - 130);
  text('This is a celebrity who captivates you: ' + castMember1Array[0], windowWidth/2 - 50, windowHeight/2 - 95);
  text('So is this: ' + castMember2Array[0], windowWidth/2 - 50, windowHeight/2 -60);
  text('You tend to use this platform: ' + streamingService1Array[0], windowWidth/2 - 50, windowHeight/2 - 25);
  text('And this platform: ' + streamingService2Array[0], windowWidth/2 - 50, windowHeight/2 + 10);
  if (franchiseArray[0] == "Yes"){
    text('You are a fan of franchises.', windowWidth/2 - 50, windowHeight/2 + 45);
  } else{
    text('You are not a huge fan of franchises.', windowWidth/2 - 50, windowHeight/2 + 45);
  }
  text('You will like this movie: ' + suggestedMovieArray[0], windowWidth/2 - 50, windowHeight/2 + 80);
  image(warningImage, windowWidth/2 + 300, windowHeight/2 + 150, 100, 100)
  fill(240, 10, 10)
  textSize(12)
  text("By continuing to use this app, you acknowledge that I am collecting data based on the movies you select and your viewing preferences.",  windowWidth / 2 - 50, windowHeight/2 + 230);
  text("This information will be used to tailor ads specifically for you--ads that follow you across platforms.", windowWidth / 2 - 50, windowHeight/2 + 250); 
  text("Once you accepted the cookies, you allowed me to track your activity, be prepared:", windowWidth / 2 - 50, windowHeight/2 + 270);
  textStyle(BOLD)
  text("the ads will know you--perhaps more than you'd like them to.", windowWidth / 2 - 50, windowHeight/2 + 290);
  restartButton.show();

  //genre ad image
  if (userGenreArray[0] == "Science Fiction"){
    image(scienceAdImage, windowWidth/2 - 400, windowHeight/2 - 150, 500, 250)
  } else if (userGenreArray[0] == "Action"){
    image(actionAdImage, windowWidth/2 - 400, windowHeight/2 - 150, 500, 250)
  } else if (userGenreArray[0] == "Drama"){
      image(dramaAdImage, windowWidth/2 - 400, windowHeight/2 - 180, 350, 350)
  }

  // streaming service ad image
  if (streamingService1Array[0] == "Paramount+"){
    image(paramountAdImage, windowWidth/2 - 400, windowHeight/2 + 150, 500, 250)
  } else if (streamingService1Array[0] == "Disney+"){
    image(disneyAdImage, windowWidth/2 - 400, windowHeight/2 + 150, 500, 250)
  } else if (streamingService1Array[0] == "Max"){
    image(maxAdImage, windowWidth/2 - 400, windowHeight/2  + 150, 400, 250)
  } else if (streamingService1Array[0] == "Apple TV"){
    image(appleAdImage, windowWidth/2 - 400, windowHeight/2  + 150, 500, 200)
  } else if (streamingService1Array[0] == "Peacock"){
    image(peacockAdImage, windowWidth/2 - 400, windowHeight/2  + 170, 400, 350)
  } else if (streamingService1Array[0] == "Prime Video"){
    image(primeAdImage, windowWidth/2 - 400, windowHeight/2  + 170, 200, 300)
  } else if (streamingService1Array[0] == "Netflix"){
    image(netflixAdImage, windowWidth/2 - 400, windowHeight/2  + 150, 500, 250)
  }

}

function resetGame(){
  firstScreenBool = true;
  secondScreenBool = false;
  thirdScreenBool = false;

  choiceCounter = 0;
  userGenreArray = [];
  userGenre2Array = [];
  userGenre3Array = [];
  suggestedMovieArray = [];
  castMember1Array = [];
  castMember2Array = [];
  streamingService1Array = [];
  streamingService2Array = [];
  franchiseArray = [];
  titleArray = [];

  background(255, 124, 117)
  fill(255)


  startButton.show()
  restartButton.hide()

  toThirdScreenButton.hide()

  for (let i=0; i < movieDataArray.length; i++){
    movieDataArray[i].hideButtons();
  }

  imageMode(CENTER)
  fill(255, 124, 117)
  background(255, 124, 117)

  clear()

  print(userGenreArray)
}


function draw(){
 
  // print("X" + (windowWidth/2 - mouseX) * -1 , 30, 30)
  // print("y" + (windowHeight/2 - mouseY) *-1, 30, 60)

  if(firstScreenBool == true){
    introScreen()
  }

  if(secondScreenBool == true){
   //chooseMovies()
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
      this.button.position(windowWidth/2 - 490, i*25+ windowHeight/2 - 90); 
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
    if(choiceCounter == 5){
      toThirdScreenButton.show();
    }
    if(choiceCounter <= 5){

    userGenreArray.push(this.genre1)
    userGenre2Array.push(this.genre2)
    suggestedMovieArray.push(this.suggestedMovie)
    userGenre3Array.push(this.genre3)
    castMember1Array.push(this.castMember1)
    castMember2Array.push(this.castMember2)
    streamingService1Array.push(this.streamingService1)
    streamingService2Array.push(this.streamingService2)
    franchiseArray.push(this.franchise)
    titleArray.push(this.title)


    // background(255, 124, 117);
     //image(secondScreen,  windowWidth/2, windowHeight/2, 1100, 700)
    
    // fill(0, 0, 0);
    // noStroke();
    // textSize(21);
     textAlign(CENTER);
     stroke(0)
    fill(252, 252, 252)
   strokeWeight(4)
  rect(windowWidth/2 - 500, windowHeight/2 - 180, 310, 510);
  strokeWeight(1)
  textSize(30)
  fill(0, 0, 0)
  //textAlign(left)
   strokeWeight(1)
  text("Films to Select From", windowWidth/2 - 545, windowHeight/2 - 165, 400, 400);
  
  //poster box
  strokeWeight(4)
  fill(252, 252, 252)
  rect(windowWidth/2 - 155, windowHeight/2 - 180, 310, 510);
  

  //genres you like box
  fill(252, 252, 252)
  strokeWeight(4)
  rect(windowWidth/2 + 190, windowHeight/2 - 180, 310, 250);
  fill(0,0,0)
  strokeWeight(1)
  text("Films You Chose", windowWidth/2 + 145, windowHeight/2 - 165, 400, 400);

  //Suggested Films for you
  fill(252, 252, 252)
  strokeWeight(4)
  rect(windowWidth/2 + 190, windowHeight/2 + 90, 310, 240);
  fill(0,0,0)
  strokeWeight(1)
  text("Suggested Films", windowWidth/2 + 145, windowHeight/2 + 105, 400, 400);
  textSize(12)
  text("Cookies being collected...", windowWidth/2 - 545, windowHeight/2 + 300, 400, 400);

  fill(0, 0, 0);
    noStroke();
    textSize(21);
    textAlign(LEFT);
    text('Title: ' + this.title, windowWidth/2 -141, windowHeight/2 +180 );
    text('Director: ' + this.director, windowWidth/2 -141, windowHeight/2 +210)
    text('Date: ' + this.date, windowWidth/2 -141, windowHeight/2 + 240);
    text('Rotten Tomatoes: ' + this.tomatoes, windowWidth/2 -141, windowHeight/2 + 270);
    image(this.moviePoster, windowWidth/2, windowHeight/2, 200, 300)
    this.button.hide()
    for(let i = 0; i < titleArray.length; i++){
      text(titleArray[i], windowWidth/2 + 205, windowHeight/2 -140 + (i*25+55))
    }
    //for(let i = 0; i < userGenre2Array.length; i++){
    //  text(userGenre2Array[i], windowWidth/2 +350, windowHeight/2 -140 + (i*25+55))
    }
    for(let i = 0; i < suggestedMovieArray.length; i++){
      text(suggestedMovieArray[i], windowWidth/2 +203, windowHeight/2 +135 + (i*25+55))
    }
    } 
  }
//}

//I want to change the background images to rectangles. 
//What do you think is the best way to go about it, so it does not break my code?
//In line 117, I have a line of code to show an image, but the image appears behind the rectangle...
//How do I bring this image to the front (or in front of the rectangle)?


//I added rectangles and text to the first and second screens.
//when i click on a movie title, my rectangles and text go away. 
//when i get rid of the backgrounds, my code does not work properly.
//my restart button does not bring you to the first screen (I attempted to code it in setup)




