let table;
let submitButton
let canvas
let movieMenu

let imageArray = []
let movieData = [];

let showScreen = true


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  //table = loadTable('js/rebPersonalData.csv', 'csv', 'header', loadImageArray);
 table = loadTable('js/rebPersonalData.csv', 'csv', 'header')
 startScreen = loadImage('curateFilmScreen.png')


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

  background(255, 124, 117);
  fill(255)

  // submitButton = createButton('Submit')
  // submitButton.position(150, 50)
  //movieMenu = createSelect()
  //movieMenu.option('Select Movie')
  //cycle through the table rows

  //button?????????
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

    movieData.push(new movieData(title, director, date, genre1, genre2, genre3, tomatoes, castMember1, castMember2, castMember3, streamingService1, streamingService2, franchise, suggestedMovie));
  }

  //show each button for each data entry
  for (let i = 0; i < movieData.length; i++){
    movieData[i].show();




  //for (let i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
   // let date = table.getString(i, 'Date of Release');
   // let location = table.getString(i, 'location')
    //let movie = table.getString(i, 'Movie Title')

    //movieMenu.option(movie)
    //checkbox = createCheckbox(movie);
   // checkbox.checked(changeData)
   // submitButton.mousePressed(changeData)
   // movieMenu.changed(changeData)
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

      //create a button for each entry
    this.button = createButton(this.date)

    //position each button 50 pixels below the previous
    for(let i = -1; i < movieData.length; i++){
      this.button.position(50, i*25+50);
    }
    this.button.style('z-index', '1');
  }


  show(){
    //when the button is pressed trigger the update function
    //to update the data entry
    this.button.mousePressed(() => this.update())
  }

  // upadte the output for each entry after the button is clicked
  update(){
    //update the variables to reflect the data tied to the button that was clicked

    bgColor = random(0,100);

    background(bgColor);
    fill(100, 199, 67);
    noStroke();
    textSize(21);
    textAlign(CENTER, CENTER);
    text('title: ' + this.title, windowWidth/2, 50 );
    text('director: ' + this.director, windowWidth/2, 100)
    text('date: ' + this.date, windowWidth/2, 150);
    text('genre1: ' + this.genre1, windowWidth/2, 200);
    text('genre2: ' + this.genre2, windowWidth/2, 250);
    text('genre3: ' + this.genre3, windowWidth/2, 300);
    text('tomatoes: ' + this.tomatoes, windowWidth/2, 350);
    text('castMember1: ' + this.castMember1, windowWidth/2, 400);
    text('castMember2: ' + this.castMember2, windowWidth/2, 450);
    text('castMember3: ' + this.castMember3, windowWidth/2, 500);
    text('streamingService1: ' + this.streamingService1, windowWidth/2, 550);
    text('streamingService2: ' + this.streamingService2, windowWidth/2, 600);
    text('franchise: ' + this.franchise, windowWidth/2, 650);
    text('suggestedMovie: ' + this.suggestedMovie, windowWidth/2, 700);
  }
}



}

function draw(){
  if (showScreen){
    image(startScreen, 0, 0, windowWidth, windowHeight)
    }

}
 //function draw(){
    //if(checkbox.checked()){
   //   print("avatar!")
  //  }
// }

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
          image(imageArray[i], random(windowWidth), random(windowHeight), 50, 50)
        }
      }
  }

}





//title

//Select 5 Films You Like from My Favorites
//select box
//add info from each film clicked into an array

//film poster section
