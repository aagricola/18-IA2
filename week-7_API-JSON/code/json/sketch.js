//variables for the JSON data sets
var charData;

function preload(){
  //preload all the datasets
  charData = loadJSON("character.json");
}

function setup() {
  //we don't need a canvas for this example
  noCanvas();
  //path to the specific data we want to use
  var character = charData.characters[1].name;
  //dom element using the dom library
  createP(character);
}

function draw() {

}