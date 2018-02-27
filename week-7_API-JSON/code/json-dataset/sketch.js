//variables for the JSON data sets
var charData;

function preload(){
  //preload all the dataset
  charData = loadJSON("character.json");
}

function setup() {
  //we don't need a canvas for this example
  noCanvas();
  //variable to load all characters
  var character = charData.characters;
  //for loop to loop through the characters
  for(var i = 0; i < character.length; i++){
    //header element for the character names
    createElement('h1', character[i].name);
    //we want to add the qualities beneath the character
    var qualities = character[i].qualities;
    for( var j = 0; j < qualities.length; j++){
      createDiv(qualities[j]);
    }
    
  }

}

function draw() {

}